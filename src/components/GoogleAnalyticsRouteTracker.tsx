import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { GA_MEASUREMENT_ID } from "@/config/analytics";

/**
 * Sends GA4 page_view on client-side navigations. Initial load is covered by gtag in index.html.
 */
const GoogleAnalyticsRouteTracker = () => {
  const location = useLocation();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    if (typeof window.gtag !== "function") return;

    const pagePath = `${location.pathname}${location.search}`;

    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_location: window.location.href,
    });
  }, [location.pathname, location.search]);

  return null;
};

export default GoogleAnalyticsRouteTracker;
