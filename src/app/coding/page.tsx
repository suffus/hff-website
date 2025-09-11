import { Metadata } from 'next';
import CodingClient from './CodingClient';

export const metadata: Metadata = {
  title: 'AI Coding - Human Freedom Foundation',
  description: 'Revolutionary AI-powered development tools that enhance developer productivity and democratize programming education for everyone.',
};

export default function Coding() {
  return <CodingClient />;
}
