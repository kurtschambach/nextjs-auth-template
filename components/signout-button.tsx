import { signOut } from "@/auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        type="submit"
        className="cursor-pointer p-2 px-3 rounded bg-black text-white"
      >
        Sign Out
      </button>
    </form>
  );
}
