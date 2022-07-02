import { MainLayout } from '../../components/Layout';
import { ContactForm } from '../../components/ContactForm';
import { Spacer } from '../../components/Spacer';

export default function Contact() {
    return (
        <MainLayout title="Contact" header="Contact">
            <p>
                Fill out the form below and I&apos;ll get back to you within 2
                business days.
            </p>
            <Spacer size={4} />
            <ContactForm />
        </MainLayout>
    );
}
