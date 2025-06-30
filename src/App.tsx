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
import Index7 from "./pages/Landing7/Index";
import Index8 from "./pages/Landing8/Index";
import Index9 from "./pages/Landing9/Index";
import Index10 from "./pages/Landing10/Index";
import NotFound from "./pages/NotFound";
import EmailTemplatePage from "./pages/Email1";
import EmailTemplatePage2 from "./pages/Email2";
import EmailTemplatePage3 from "./pages/Email3";
import EmailTemplatePage4 from "./pages/Email4";
import EmailTemplatePage5 from "./pages/Email5";
import EmailTemplatePage6 from "./pages/Email6";
import EmailTemplatePage7 from "./pages/Email7";
import EmailTemplatePage8 from "./pages/Email8";
import EmailTemplatePage9 from "./pages/Email9";
import EmailTemplatePage10 from "./pages/Email10";

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
          <Route path="/abdulla-jihad-zainab" element={<Index7 />} />
          <Route path="/shainnah-mae-magleo" element={<Index8 />} />
          <Route path="/rehab-nasreldeen-rateb-abdelaleem" element={<Index9 />} />
          <Route path="/mai-mohamed-fathi-mohamed-elsayed" element={<Index10 />} />
          <Route path="/email-abdullah-zainab" element={<EmailTemplatePage />} />
          <Route path="/email-mai-hendy" element={<EmailTemplatePage2 />} />
          <Route path="/email-rehab-nasr-eldin" element={<EmailTemplatePage3 />} />
          <Route path="/email-shainnah-magleo" element={<EmailTemplatePage4 />} />
          <Route path="/email-nouran-fahmy" element={<EmailTemplatePage5 />} />
          <Route path="/email-sherine-emad" element={<EmailTemplatePage6 />} />
          <Route path="/email-abdulla-jihad-zainab" element={<EmailTemplatePage7 />} />
          <Route path="/email-shainnah-mae-magleo" element={<EmailTemplatePage8 />} />
          <Route path="/email-rehab-nasreldeen-rateb-abdelaleem" element={<EmailTemplatePage9 />} />
          <Route path="/email-mai-mohamed-fathi-mohamed-elsayed" element={<EmailTemplatePage10 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
