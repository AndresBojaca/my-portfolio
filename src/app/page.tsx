import { Onest } from "next/font/google";
const font = Onest({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${font.className} flex min-h-screen flex-col mx-auto`}>
    </main>
  );
}
