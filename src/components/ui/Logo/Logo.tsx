import Image from 'next/image';
import { FC } from 'react';
import styles from './Logo.module.scss';

export interface ILogoProps {

}

export const Logo: FC<ILogoProps> = () => {


  return (
    <div className={styles.logo}>
      
      <Image src="/logo.svg" alt={'inWatch'} width={32} height={32}/>
      <div>
      <span>in</span><span>Watch</span>
      </div>
    </div>
  );
}