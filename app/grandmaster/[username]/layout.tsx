import { GoBack } from "@/features/go-back/go-back";

export type GrandMasterProfileLayoutProps = {
  children: React.ReactNode;
};

export default function GrandMasterProfileLayout({ children }: Readonly<GrandMasterProfileLayoutProps>) {
  return (
    <div className="flex flex-col gap-4">
      <GoBack href="/grandmaster" />
      {children}
    </div>
  );
}
