import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dr. Maya Reynolds, PsyD | Anxiety, Trauma & Burnout Therapy in Santa Monica',
  description: 'Dr. Maya Reynolds, PsyD, is a fictional licensed clinical psychologist in Santa Monica offering adult therapy for anxiety, panic, trauma, burnout and perfectionism, plus secure telehealth across California.',
  keywords: [
    'Dr. Maya Reynolds PsyD',
    'Santa Monica therapist',
    'anxiety therapy Santa Monica',
    'trauma therapy Santa Monica',
    'EMDR Santa Monica',
    'burnout therapy California',
    'adult therapy Santa Monica',
    'telehealth therapy California',
  ],
  openGraph: {
    title: 'Dr. Maya Reynolds, PsyD | Therapy in Santa Monica',
    description: 'Adult therapy for anxiety, trauma, burnout and perfectionism in Santa Monica, with secure telehealth across California.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
