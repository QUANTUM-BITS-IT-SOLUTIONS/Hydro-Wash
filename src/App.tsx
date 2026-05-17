import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import RouteGuard from "@/components/RouteGuard";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import ServicesList from "./pages/ServicesList";
import ServiceDetail from "./pages/ServiceDetail";
import GalleryPage from "./pages/GalleryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <RouteGuard>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<ServicesList />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/gallery" element={<GalleryPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </RouteGuard>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
