import { ChessKnight } from "lucide-react";
import Link from "next/link";
import { headetStyle } from "./header.style";

export function Header() {
  return (
    <header className={headetStyle()}>
      <Link href="/" className="flex gap-4 items-center">
        <ChessKnight className="w-8 h-8" />
        <h1>Chess GM Wiki</h1>
      </Link>
    </header>
  );
}
