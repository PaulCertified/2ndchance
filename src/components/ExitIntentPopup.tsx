import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExitIntentPopupProps {
  onCTAClick: () => void;
}

const ExitIntentPopup = ({ onCTAClick }: ExitIntentPopupProps) => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const handler = (e: MouseEvent) => {
      if (e.clientY <= 5) {
        setShow(true);
      }
    };
    document.addEventListener("mouseleave", handler);
    return () => document.removeEventListener("mouseleave", handler);
  }, [dismissed]);

  if (!show || dismissed) return null;

  const handleCTA = () => {
    setDismissed(true);
    setShow(false);
    onCTAClick();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/50 px-4">
      <div className="bg-card rounded-2xl p-8 max-w-md w-full shadow-2xl border border-border relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={() => { setDismissed(true); setShow(false); }}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        >
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-xl font-bold text-foreground mb-2 text-center">
          Still Wondering If You Qualify?
        </h3>
        <p className="text-muted-foreground text-center mb-6">
          Thousands of people with health conditions have been approved. It only takes 60 seconds to check.
        </p>
        <Button variant="cta" size="lg" className="w-full text-lg py-5 rounded-lg" onClick={handleCTA}>
          Check If You Qualify
        </Button>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
