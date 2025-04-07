import { auth } from "@/auth";
import { SignOut } from "@/components/signout-button";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session) return redirect("/login");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 p-24 bg-white text-black">
      <h1 className="text-xl">NextJS Template - logged in</h1>
      <SignOut />
    </main>
  );
}
