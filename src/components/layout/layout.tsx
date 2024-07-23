import MainNavigation from "./main-navigation";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
}
