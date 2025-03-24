import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
		<>
			<p>Hello world</p>
			<Link href="/about">ABOUT</Link>
		</>
  );
}
