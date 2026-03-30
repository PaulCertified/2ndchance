import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { NOT_FOUND_DESCRIPTION, NOT_FOUND_TITLE } from "@/config/siteSeo";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

const NotFound = () => {
  const location = useLocation();

  useDocumentMeta({ title: NOT_FOUND_TITLE, description: NOT_FOUND_DESCRIPTION });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4 overflow-x-hidden w-full">
      <div className="text-center max-w-md min-w-0">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
