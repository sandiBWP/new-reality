import { PlatformNav } from "@/components/layout/PlatformNav";
import { mediaSubNav } from "@/data/navigation";

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="platform-media min-h-screen bg-platform-bg">
      <PlatformNav items={mediaSubNav} label="Media" />
      {children}
    </div>
  );
}
