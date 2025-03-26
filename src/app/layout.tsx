import { Providers } from './providers';

export const metadata = {
  title: 'Jestor - Terms of Service',
  description: 'Terms of Service for Jestor platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}