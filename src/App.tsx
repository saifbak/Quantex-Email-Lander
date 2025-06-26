import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index1 from "./pages/Landing1/Index";
import Index2 from "./pages/Landing2/Index";
import Index3 from "./pages/Landing3/Index";
import Index4 from "./pages/Landing4/Index";
import Index5 from "./pages/Landing5/Index";
import Index6 from "./pages/Landing6/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/abdullah-zainab" element={<Index1 />} />
          <Route path="/mai-hendy" element={<Index2 />} />
          <Route path="/rehab-nasr-eldin" element={<Index3 />} />
          <Route path="/shainnah-magleo" element={<Index4 />} />
          <Route path="/nouran-fahmy" element={<Index5 />} />
          <Route path="/sherine-emad" element={<Index6 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
