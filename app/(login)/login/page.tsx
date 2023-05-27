import { redirect } from "next/navigation";
import { getUserInfo } from "@/lib/cookies";
import LoginForm from "./form";

export default async function LoginPage() {
  const user = await getUserInfo();
  if (user) redirect(`/${user.tid}`);

  return (
    <main className="login-page">
      <h1 className="text-3xl text-slate-700 font-extrabold mt-4 mb-10">Login ke Aces</h1>
      <LoginForm />
    </main>
  );
}
