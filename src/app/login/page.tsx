import { Login } from "@/components/Auth/Login";
import { ROUTING } from "@/core/config/routing.config";
import { Metadata } from "next";
import Link from "next/link";
import styles from './LoginPage.module.scss';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Вход',
    description: 'Составьте свою личную коллекцию фильмов',
  }
}

export default function LoginPage() {
  return (
    <div className={styles.main}>
      <Login />
      <Link href={ROUTING.SIGNUP}>Нет аккаунта? Создайте новый!</Link>
    </div>
  )
}
