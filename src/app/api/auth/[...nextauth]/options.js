import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      authorize: async (credentials) => {
        const { email, password } = credentials;
        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در سرور رخ داده است");
        }
        if (!email || !password) throw new Error("لطفااطلاعات معتبر وارد کنید");

        // check user exist
        const user = await User.findOne({ email });
        if (!user) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید.");

        // verify password checking
        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error("ایمیل را رمز عبور اشتباه است.");

        return { email };
      },
    }),
  ],
};
