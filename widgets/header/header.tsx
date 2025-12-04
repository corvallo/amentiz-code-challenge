import { ChessKnight } from "lucide-react";
import Link from "next/link";
import { headetStyle } from "./header.style";

export const Header: React.FC = () => {
  return (
    <header className={headetStyle()}>
      <Link href="/" className="flex gap-4">
        <ChessKnight className="w-8 h-8" />
        <h1>Chess GM Wiki</h1>
      </Link>
      <div>Test</div>
    </header>
  );
};
