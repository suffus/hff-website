import { Metadata } from 'next';
import MedicalClient from './MedicalClient';

export const metadata: Metadata = {
  title: 'Medical AI - Human Freedom Foundation',
  description: 'Revolutionizing healthcare through AI-assisted diagnosis, early disease detection, robotic surgery, and medical advancement.',
};

export default function Medical() {
  return <MedicalClient />;
}
