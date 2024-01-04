import { SignUp } from "@/components/Auth/SignUp";
import { ROUTING } from "@/core/config/routing.config";
import { Metadata } from "next";
import Link from "next/link";
import styles from './SignUpPage.module.scss';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Регистрация',
    description: 'Составьте свою личную коллекцию фильмов',
  }
}


export default function SignUpPage() {
  return (
    <div className={styles.main}>
      <SignUp />
      <Link href={ROUTING.LOGIN}>Уже есть аккаунт?</Link>
    </div>
  )
}
