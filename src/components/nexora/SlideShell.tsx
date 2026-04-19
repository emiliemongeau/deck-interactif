import type { ReactNode } from "react";

export function SlideShell({ children }: { children: ReactNode }) {
  return (
    <div
      key={Math.random()}
      className="nexora-fade absolute inset-0 flex flex-col items-center justify-center px-16 py-20 text-white"
    >
      {children}
    </div>
  );
}
