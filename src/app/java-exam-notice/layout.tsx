import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Java MCQ Exam Notice',
  description: 'Official academic notice regarding the upcoming Java MCQ internal examination carrying 5 marks internal assessment.',
  openGraph: {
    title: 'Java MCQ Exam Notice',
    description: 'There will be a Java MCQ exam the day after tomorrow. Please make sure to attend the exam. It carries 5 marks internal.',
    url: 'https://stupid-stuffs.vercel.app/java-exam-notice',
    siteName: 'Oxford College of Engineering & Management',
    type: 'website',
    images: [
      {
        url: 'https://oxfordcollege.edu.np/img/logo/logo.png',
        width: 200,
        height: 200,
        alt: 'Oxford College Crest',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Java MCQ Exam Notice',
    description: 'There will be a Java MCQ exam the day after tomorrow. Please make sure to attend the exam.',
    images: ['https://oxfordcollege.edu.np/img/logo/logo.png'],
  },
};

export default function JavaExamNoticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
