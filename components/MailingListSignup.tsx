import styled from 'styled-components';
import { useState } from 'react';
import { SubscribeResponse } from '../pages/api/subscribe';
import { Button } from './Button';
import { Spacer } from './Spacer';
import { Input } from './Input';

export function MailingListSignupForm() {
    const [emailAddress, setEmailAddress] = useState('');
    const [messageType, setMessageType] = useState<
        'none' | 'success' | 'error'
    >('none');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!emailAddress) {
            return;
        }

        const normalizedEmailAddress = emailAddress.toLowerCase();

        // TODO
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            body: JSON.stringify({ emailAddress: normalizedEmailAddress }),
        });

        const data: SubscribeResponse = await response.json();
        if (data.error.code === 'ServerError') {
            setMessageType('error');
        } else {
            setMessageType('success');
            setEmailAddress('');
        }
    };

    return (
        <section>
            <h2>Subscribe for the latest news</h2>
            <Spacer size={4} />
            <p>
                Sign up for my mailing list to get the latest blog posts and
                content from me. Unsubscribe anytime.
            </p>
            <Spacer size={4} />
            <Form onSubmit={handleSubmit}>
                {/* TODO: VisuallyHidden styles for this label */}
                {/* <label htmlFor="mailing-list-email">Email:</label> */}
                <MailingListInput
                    id="mailing-list-email"
                    type="email"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    placeholder="Email address"
                />
                <Button type="submit">Subscribe</Button>
            </Form>
            {/* TODO: Link to MailChimp-hosted sign up page */}
            {messageType !== 'none' &&
                (messageType === 'success' ? (
                    <div>Success!</div>
                ) : (
                    <div>There was an error.</div>
                ))}
        </section>
    );
}

const Form = styled.form`
    display: flex;
    gap: var(--spacing-2);
`;

const MailingListInput = styled(Input)`
    // Matches medium input height
    padding: calc(var(--spacing-3) - var(--border-width-1))
        calc(var(--spacing-4) - var(--border-width-1));

    @media ${(p) => p.theme.queries.mobileAndBelow} {
        flex-grow: 1;
        flex-shrink: 1;
        width: 0; /* allow input to get below its minimum content size */
    }
`;
