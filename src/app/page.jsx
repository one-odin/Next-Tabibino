import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Link href="/add-user" className="bg-purple-700 text-white px-10 py-5 rounded-lg">
          افزودن کاربر جدید
        </Link>
      </main>
    </div>
  );
}
