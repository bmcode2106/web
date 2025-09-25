import type { Metadata } from "next";

// Mencegah mesin pencari mengindeks halaman embed kita
export const metadata: Metadata = {
  robots: "noindex, nofollow",
  };

  export default function EmbedLayout({
    children,
    }: {
      children: React.ReactNode;
      }) {
        return (
            <html lang="en">
                  <body style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
                          {children}
                                </body>
                                    </html>
                                      );
                                      }