import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { email, password } = await req.json();
    console.log(email, password);

    // check user entered email and pass
    if (!email || !password) {
      return NextResponse.json({
        error: "لطفا اطلاعات معتبر وارد کنید",
        status: 422,
      });
    }
    // check email is exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "حساب کاربری وجود دارد", status: 422 });
    }

    // hash password and create user
    const hashedPassword = await hashPassword(password);
    await User.create({
      email: email,
      password: hashedPassword,
    });

    return NextResponse.json({
      message: "حساب کاربری ایجاد شد",
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "مشکلی در سرور رخ داده است",
      status: 500, // status 500 => server error
    });
  }
}
