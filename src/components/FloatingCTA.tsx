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
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center md:hidden px-4">
      <Button variant="cta" size="lg" className="w-full max-w-sm text-lg py-5 rounded-full shadow-2xl" onClick={onClick}>
        Check If You Qualify
      </Button>
    </div>
  );
};

export default FloatingCTA;
