
import cn from 'classnames';
import styles from './Header.module.scss';
import { HeaderMenu } from './HeaderMenu';
import { Search } from './Search';
import { User } from './User';
import { HeaderMenuMobile } from './HeaderMenuMobile';



export const Header = () => {

  return (
    <header className={styles.main}>
      <HeaderMenuMobile />
      <div className={styles.right}>
        <Search />
        <User />
      </div>
    </header>
  );
}