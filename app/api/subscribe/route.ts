import mailchimp from '@mailchimp/mailchimp_marketing';
import { isValidEmailAddress } from '../../../utils/isValidEmailAddress';

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function POST(req: Request) {
    if (req.method !== 'POST') {
        return Response.json(
            { message: 'Method not allowed.' },
            { status: 405 }
        );
    }

    const body = await req.json();
    const emailAddress = body?.emailAddress;

    if (!emailAddress || !isValidEmailAddress(emailAddress)) {
        return Response.json(
            {
                message: 'Invalid email address.',
            },
            { status: 400 }
        );
    }

    try {
        // https://mailchimp.com/developer/marketing/api/lists/batch-subscribe-or-unsubscribe/
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
            console.error(
                `Could not subscribe ${emailAddress} to mailing list.`,
                subscribeResponse.errors[0]
            );
            return Response.json(
                { message: `Could not subscribe ${emailAddress}.` },
                { status: 500 }
            );
        }

        return Response.json({ message: 'Success!' }, { status: 201 });
    } catch (error) {
        console.error(
            `Could not subscribe ${emailAddress} to mailing list.`,
            error?.message
        );
        return Response.json(
            { message: `Could not subscribe ${emailAddress}.` },
            { status: 500 }
        );
    }
}
