import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css'

export const metadata: Metadata = {
  title: 'Tech Quizz',
  description: 'A tech quizz app to developers',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}  `}>
            {children}
        </body>
      </html>
    </ClerkProvider>

  )
  
    
  
}
