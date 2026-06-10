import { PlatformNav } from "@/components/layout/PlatformNav";
import { investSubNav } from "@/data/navigation";

export default function InvestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="platform-invest min-h-screen bg-platform-bg">
      <PlatformNav items={investSubNav} label="Invest" />
      {children}
    </div>
  );
}
