import { object, string } from 'yup';

export enum ErrorMessage {
  required = 'This field is required',
  min_length = 'The length must be min 2 letters',
  email = 'email must be a valid email',
}
const validationSchema = object({
  name: string()
    .trim()
    .min(2, ErrorMessage.min_length)
    .required(ErrorMessage.required),
  email: string()
    .trim()
    .email(ErrorMessage.email)
    .required(ErrorMessage.required),
  message: string().trim().required(ErrorMessage.required),
  variants: string().required(ErrorMessage.required),
});

export default validationSchema;
