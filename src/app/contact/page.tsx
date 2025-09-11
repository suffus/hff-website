import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us - Human Freedom Foundation',
  description: 'Get in touch with the Human Freedom Foundation. Join our mission to harness AI for human liberation and empowerment.',
};

export default function Contact() {
  return <ContactClient />;
}
