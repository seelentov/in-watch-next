import { Login } from "@/components/Auth/Login";
import { ROUTING } from "@/core/config/routing.config";
import Link from "next/link";
import styles from './LoginPage.module.scss';

export default function LoginPage() {
  return (
    <div className={styles.main}>
      <Login />
      <Link href={ROUTING.SIGNUP}>Нет аккаунта? Создайте новый!</Link>
    </div>
  )
}
