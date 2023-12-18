import styles from './Header.module.scss';
import { HeaderMenu } from './HeaderMenu';
import { Search } from './Search';
import { User } from './User';



export const Header = () => {
  return (
    <div className={styles.main}>
      <HeaderMenu />
      <div>
        <Search />
        <User />
      </div>
    </div>
  );
}