import { ProviderAdmin } from '@/components/provider/ProviderAdmin';
import cn from 'classnames';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.scss';
import { SidebarAdmin } from '@/components/Admin/SidebarAdmin/SidebarAdmin';

const montserrat = Montserrat({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Административная панель',
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    },
  }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="ru">
      <body className={cn(montserrat.className, 'themes--black')}>
        <ProviderAdmin>
          <SidebarAdmin />
          {children}
        </ProviderAdmin>
      </body>
    </html>
  )
}
