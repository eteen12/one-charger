import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-[60vh] min-w-[100vw] flex flex-col justify-center text-center gap-5">
      <h1 className="ralewayBold text-lg">Thank you for your purchase, enjoy your charger(s).</h1>
      <div>
        <Link href="/">
          <p className="underline">Click me to go home</p>
        </Link>
      </div>
    </div>
  );
}
