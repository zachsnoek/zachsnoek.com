import { getEnv } from '../../utils/getEnv';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { TextArea } from '../TextArea/TextArea';
import styles from './ContactForm.module.css';

const redirectURL = `${getEnv('NEXT_PUBLIC_ORIGIN')}/contact/success`;

export function ContactForm() {
    return (
        <form
            name="Contact Form"
            className={styles.form}
            data-botpoison-public-key="pk_2c233de0-e913-4214-9bec-458d0d43d4ef"
            action="https://submit-form.com/9DeQ2TdBN"
        >
            <script src="https://unpkg.com/@botpoison/browser" async></script>
            <input type="hidden" name="_redirect" value={redirectURL} />
            <input type="hidden" name="_append" value="false" />
            <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <Input
                    type="text"
                    name="name"
                    placeholder="Geddy Lee"
                    size="small"
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <Input
                    type="email"
                    name="email"
                    placeholder="geddy@rush.com"
                    size="small"
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <TextArea
                    id="message"
                    name="message"
                    className={styles.textArea}
                    placeholder="Let's get the band back together..."
                    size="small"
                    required
                />
            </div>
            <Button type="submit" className={styles.button}>
                Send
            </Button>
        </form>
    );
}
