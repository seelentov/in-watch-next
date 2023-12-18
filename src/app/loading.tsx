import { Loader } from '@/components/ui/Loader/Loader';
import styles from './loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.page}>
      <Loader />
    </div>
  );
}

export default Loading