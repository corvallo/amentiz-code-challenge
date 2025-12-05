export type GrandMasterProfileLayoutProps = {
  children: React.ReactNode;
};

export default function GrandMasterProfileLayout({ children }: Readonly<GrandMasterProfileLayoutProps>) {
  return <div className="flex flex-col gap-4">{children}</div>;
}
