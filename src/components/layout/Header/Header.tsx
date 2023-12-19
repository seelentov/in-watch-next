
import cn from 'classnames';
import styles from './Header.module.scss';
import { HeaderMenu } from './HeaderMenu';
import { Search } from './Search';
import { User } from './User';
import { HeaderMenuMobile } from './HeaderMenuMobile';



export const Header = () => {

  return (
    <div className={styles.main}>
      <HeaderMenu />
      <HeaderMenuMobile />
      <div className={styles.right}>
        <Search />
        <User />
      </div>
    </div>
  );
}