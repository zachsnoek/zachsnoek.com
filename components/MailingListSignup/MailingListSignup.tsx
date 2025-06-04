import { useState } from 'react';
import { SubscribeResponse } from '../../pages/api/subscribe';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Link } from '../Link/Link';
import { Spacer } from '../Spacer';
import styles from './MailingListSignup.module.scss';

export function MailingListSignupForm() {
    const [state, setState] = useState<{
        input: string;
        isLoading: boolean;
        result: 'error' | 'success' | null;
    }>({
        input: '',
        isLoading: false,
        result: null,
    });

    const { input, isLoading, result } = state;

    const handleSubmit = async (event) => {
        event.preventDefault();

        const normalizedEmailAddress = input.toLowerCase().trim();
        if (!normalizedEmailAddress) {
            return;
        }

        setState((x) => ({ ...x, isLoading: true }));

        const response = await fetch('/api/subscribe', {
            method: 'POST',
            body: JSON.stringify({ emailAddress: normalizedEmailAddress }),
        });

        const data: SubscribeResponse = await response.json();

        if (data?.error?.code === 'ServerError') {
            setState((x) => ({ ...x, result: 'error' }));
        } else {
            setState((x) => ({ ...x, result: 'success', input: '' }));
        }

        setState((x) => ({ ...x, isLoading: false }));
    };

    const isSuccess = result === 'success';
    const isError = result === 'error';

    return (
        <section>
            <h2>Subscribe for the latest news</h2>
            <Spacer size={4} />
            <p>
                Sign up for my mailing list to get the latest blog posts and
                content from me. Unsubscribe anytime.
            </p>
            <Spacer size={5} />
            <form onSubmit={handleSubmit} className={styles.form}>
                {/* TODO: VisuallyHidden label */}
                <Input
                    id="mailing-list-email"
                    type="email"
                    className={styles.input}
                    value={input}
                    onChange={(e) =>
                        setState((x) => ({ ...x, input: e.target.value }))
                    }
                    placeholder="Email address"
                />
                <Button type="submit" disabled={!input.length || isLoading}>
                    Subscribe
                </Button>
            </form>
            {result && (
                <>
                    <Spacer size={5} />
                    <div>
                        {isSuccess && (
                            <p>
                                You&apos;ve been subscribed; thanks for signing
                                up!
                            </p>
                        )}
                        {isError && (
                            <p>
                                Oops! There was an error. You can sign up using
                                the form{' '}
                                <Link
                                    href="https://z7k.io/newsletter"
                                    target="_blank"
                                >
                                    here
                                </Link>{' '}
                                instead.
                            </p>
                        )}
                    </div>
                </>
            )}
        </section>
    );
}
