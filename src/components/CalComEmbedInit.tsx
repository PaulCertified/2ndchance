import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { CALCOM_NAMESPACE } from "@/config/calcom";

/**
 * Loads Cal.com embed once so any `[data-cal-link]` buttons (e.g. post-submit “Book an appointment”) open the scheduler.
 */
const CalComEmbedInit = () => {
  useEffect(() => {
    void (async () => {
      const cal = await getCalApi({ namespace: CALCOM_NAMESPACE });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return null;
};

export default CalComEmbedInit;
