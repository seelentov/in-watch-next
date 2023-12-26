import { Layout } from '@/components/layout/Layout';
import cn from 'classnames';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.scss';

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'inWatch',
  description: 'Кинотека с удобной системой поиска, фильтрации и коллекцией',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="ru">
      <body className={cn(montserrat.className, 'themes--black')}>
        {/*<Provider>*/}
        <Layout>{children}</Layout>
        {/*</Provider>*/}
      </body>
    </html>
  )
}
