import { Header } from "@/components/Header";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="auth-layout h-screen flex justify-center items-center">{children}</div>;
}
