import { z } from "zod";

export const LoginSchema = z.object({
   email_or_username: z.string()
      .min(1, { message: 'Please enter your username or email!' }) .refine((value) => {
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