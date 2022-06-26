import { NextApiRequest, NextApiResponse } from 'next';
import { isValidEmailAddress } from '../../lib/isValidEmailAddress';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export type SubscribeResponse = {
    error?: {
        code: 'MethodNotAllowed' | 'InvalidEmail' | 'ServerError';
        message?: string;
    };
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<SubscribeResponse>
) {
    if (req.method !== 'POST') {
        res.status(405).json({
            error: { code: 'MethodNotAllowed' },
        });
        return;
    }

    const body = JSON.parse(req.body);
    const emailAddress = body?.emailAddress;

    if (!emailAddress || !isValidEmailAddress(emailAddress)) {
        res.status(400).json({
            error: {
                code: 'InvalidEmail',
                message: 'Invalid email address.',
            },
        });
        return;
    }

    try {
        // https://mailchimp.com/developer/marketing/api/lists/batch-subscribe-or-unsubscribe/
        // TODO: merge fields
        const subscribeResponse = await mailchimp.lists.batchListMembers(
            process.env.MAILCHIMP_LIST_ID,
            {
                members: [
                    { email_address: emailAddress, status: 'subscribed' },
                ],
            }
        );

        const subscribeIsSuccess = subscribeResponse.total_created === 1;
        if (!subscribeIsSuccess && subscribeResponse.errors.length) {
            console.error(subscribeResponse.errors[0]);
            throw new Error(
                `Could not subscribe ${emailAddress} to mailing list.`
            );
        }

        res.status(201).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: {
                code: 'ServerError',
                message: error?.message,
            },
        });
    }
}
