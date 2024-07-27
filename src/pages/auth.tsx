import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";

import AuthForm from "@/components/auth/auth-form";

export interface AuthPageProps {}

export default function AuthPage({}: AuthPageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();

      if (session) {
        router.replace("/");
      } else {
        setIsLoading(false);
      }
    };

    checkSession();
  }, [router]);

  if (isLoading) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  return <AuthForm />;
}
