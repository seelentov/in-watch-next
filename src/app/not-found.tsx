import { Button } from "@/components/ui/Button/Button";
import { ROUTING } from "@/core/config/routing.config";
import Link from "next/link";
import styles from './loading.module.scss';
import { Loader } from "@/components/ui/Loader/Loader";

export default function Custom404() {
  return (
    <div className={styles.page}>
      <h2>404 not found</h2>
      <p>Страница не найдена</p>
      <Link href={ROUTING.HOME}>
        <Button>Домой</Button>
      </Link>
    </div>
  )
}
