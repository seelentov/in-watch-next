import { SignUp } from "@/components/Auth/SignUp";
import { ROUTING } from "@/core/config/routing.config";
import Link from "next/link";
import styles from './SignUpPage.module.scss';

export default function Login() {
  return (
    <div className={styles.main}>
      <SignUp />
      <Link href={ROUTING.LOGIN}>Уже есть аккаунт?</Link>
    </div>
  )
}
