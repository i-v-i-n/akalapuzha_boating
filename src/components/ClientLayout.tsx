"use client";

import { ReactNode } from "react";
import { LenisProvider } from "./LenisProvider";

interface ClientLayoutProps {
  children: ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <LenisProvider>
      {children}
    </LenisProvider>
  );
}
