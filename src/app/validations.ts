import { z } from "zod";

const signupSchema = z.object({
  email: z.string().email({ message: "لطفا ایمیل معتبر وارد کنید." }),
  password: z.string().min(6, {
    message: "لطفا پسوردی که انتخاب میکنی بیشتر از ۵ کاراکتر باشد.",
  }),
});

type signupSchema = z.infer<typeof signupSchema>;

export { signupSchema };
