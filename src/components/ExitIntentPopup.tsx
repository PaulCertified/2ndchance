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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/50 p-3 sm:p-4 overflow-y-auto overscroll-contain">
      <div className="bg-card rounded-2xl p-6 sm:p-8 max-w-md w-full max-h-[min(90dvh,32rem)] overflow-y-auto shadow-2xl border border-border relative animate-in fade-in zoom-in-95 duration-200 my-auto min-w-0">
        <button
          type="button"
          onClick={() => { setDismissed(true); setShow(false); }}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-muted-foreground hover:text-foreground rounded-md"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 text-center text-balance pr-8">
          Still Wondering If You Qualify?
        </h3>
        <p className="text-muted-foreground text-center mb-6 text-sm sm:text-base text-pretty">
          Thousands of people with health conditions have been approved. It only takes a minute to connect with a licensed agent.
        </p>
        <Button variant="cta" size="lg" className="w-full text-base sm:text-lg py-5 min-h-12 h-auto whitespace-normal rounded-lg" onClick={handleCTA}>
          Check If You Qualify
        </Button>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
