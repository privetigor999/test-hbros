import * as yup from "yup";

export const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Имя обязательно к заполнению")
    .max(20, "Максимум 20 символов"),

  password: yup
    .string()
    .required("Пароль обязателен к заполнению")
    .min(4, "Минимум 4 символа")
    .max(12, "Максимум 12 символов"),

  text: yup
    .string()
    .trim()
    .required("Текст обязателен к заполнению")
    .max(100, "Максимум 100 символов"),
});
