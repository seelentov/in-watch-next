import { validEmailRegex } from "@/core/constants/validEmailRegex";

export const isValidEmail = (email: string) =>
  validEmailRegex.test(email);