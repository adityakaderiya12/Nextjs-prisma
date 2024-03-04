"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

// here auth provider is wrapper around session provider
const AuthProvider = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
