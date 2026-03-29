import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * On route change: scroll to top for normal navigations; if the URL has a hash (e.g. /#lead-form),
 * scroll that element into view after the next paint so blog → form CTAs still work.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace(/^#/, "");
      if (id) {
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
