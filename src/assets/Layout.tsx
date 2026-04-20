import type { LayoutAppProps } from "./Interface/MainInterface";

export default function LayoutApp({ children }: LayoutAppProps) {
  return (
    <>
      <div className="min-h-screen bg-background">{children}</div>
    </>
  );
}
