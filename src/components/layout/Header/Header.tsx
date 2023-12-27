
import { Logo } from '@/components/ui/Logo/Logo';
import apiGetMovies from '@/core/api/api';
import { ROUTING } from '@/core/config/routing.config';
import Link from 'next/link';
import styles from './Header.module.scss';
import { Search } from './Search';
import { User } from './User';



export const Header = async () => {

  const mayValues = await apiGetMovies.getMayValues()

  return (
    <header className={styles.main}>
      <div className={styles.logo}>
        <Link href={ROUTING.HOME}>
          <Logo />
        </Link>
      </div>
      <div className={styles.right}>
        <Search mayNames={mayValues.name} />
        <User />
      </div>
    </header>
  );
}