import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Scroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 }); // smooth scroll to the top of the page when navigating to a new page
  }, [pathname]);
  return null; // return null to prevent unnecessary re-renders
}
