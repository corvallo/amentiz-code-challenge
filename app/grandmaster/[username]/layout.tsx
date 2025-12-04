import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export type GrandMasterProfileLayoutProps = {
  params: Promise<{ username: string }>;
  children: React.ReactNode;
};

export default function GrandMasterProfileLayout({
  params,
  children,
}: Readonly<GrandMasterProfileLayoutProps>) {
  return (
    <div className="flex flex-col gap-4">
      <Link
        href="/grandmaster"
        className="flex gap-2 px-4 py-3 border rounded-lg"
      >
        <ArrowLeft />
        Go Back
      </Link>
      {children}
    </div>
  );
}
