import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface FloatingCTAProps {
  onClick: () => void;
}

const FloatingCTA = ({ onClick }: FloatingCTAProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed z-50 flex justify-center md:hidden px-3 w-full max-w-[100%] left-0 right-0"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom, 0px))" }}
    >
      <Button
        variant="cta"
        size="lg"
        className="w-full max-w-md text-base sm:text-lg py-4 min-h-12 rounded-full shadow-2xl whitespace-normal px-4"
        onClick={onClick}
      >
        Check If You Qualify
      </Button>
    </div>
  );
};

export default FloatingCTA;
