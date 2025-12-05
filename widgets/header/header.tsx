import { ChessKnight } from "lucide-react";
import Link from "next/link";
import { headetStyle, logoStyle } from "./header.style";

export function Header() {
  return (
    <header className={headetStyle()}>
      <Link href="/" className={logoStyle()} title="Chess GM Wiki">
        <ChessKnight width={32} height={32} />
        <h1>Chess GM Wiki</h1>
      </Link>
    </header>
  );
}
