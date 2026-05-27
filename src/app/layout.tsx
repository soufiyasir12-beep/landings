export const metadata = {
  title: 'Markethink Landings',
  description: 'Marketing landing pages by Markethink',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
