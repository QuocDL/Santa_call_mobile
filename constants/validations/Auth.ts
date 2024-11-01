import { z } from "zod";

export const LoginSchema = z.object({
  email_or_username: z.string()
    .min(1, { message: 'Please enter your username or email!' }).refine((value) => {
      const hasAtSymbol = value.includes('@');
      if (hasAtSymbol && !z.string().email().safeParse(value).success) {
        return false;
      }
      return true;
    }, {
      message: 'Invalid email address!'
    })
    .refine((value) => {
      const hasAtSymbol = value.includes('@');
      if (!hasAtSymbol && value.length < 3) {
        return false;
      }
      return true;
    }, {
      message: 'Username must be at least 3 characters long!'
    }),

  password: z.string().min(1, { message: 'Please enter your password!' }).min(6, { message: 'Password must be at least 6 characters long!' }),
})

export type LoginType = z.infer<typeof LoginSchema>

export const RegisterSchema = z.object({
  userName: z.string().min(1, { message: 'Please enter your name!' }).max(16, {
    message: 'The name must not exceed 16 characters!'
  }),
  email: z.string().min(1, { message: 'Please enter your email!' }).email({ message: 'The email must be in the correct format!' }),
  password: z.string().min(1, { message: 'Please enter your password!' }).min(6, { message: 'Password must be at least 6 characters long!' }),
  confirmPassword: z.string().min(1, { message: 'Please confirm your password!' }).min(6, { message: 'Confirm password must be at least 6 characters long!' }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match!",
  path: ['confirmPassword'],
});

export type RegisterType = z.infer<typeof RegisterSchema>

export const ResetPasswordSchema = z.object({
  email: z.string().min(1, { message: 'Please enter your email' }).email({
    message: 'The email must be in the correct format!'
  })
})

export type ResetPasswordType = z.infer<typeof ResetPasswordSchema>