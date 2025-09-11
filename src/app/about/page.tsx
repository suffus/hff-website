import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us - Human Freedom Foundation',
  description: 'Learn about our mission to harness AI for human liberation and empowerment. Discover our values and vision for a human-centered AI future.',
};

export default function About() {
  return <AboutClient />;
}
