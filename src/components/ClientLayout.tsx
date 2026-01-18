"use client";

import { ReactNode } from "react";
import { LenisProvider } from "./LenisProvider";
import { BubbleCursor } from "./BubbleCursor";

interface ClientLayoutProps {
  children: ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <LenisProvider>
      {children}
      <BubbleCursor />
    </LenisProvider>
  );
}
