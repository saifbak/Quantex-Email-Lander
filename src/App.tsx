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
import Index11 from "./pages/Landing11/Index";
import Index12 from "./pages/Landing12/Index";
import Index13 from "./pages/Landing13/Index";
import Index14 from "./pages/Landing14/Index";
import Index15 from "./pages/Landing15/Index";
import Index16 from "./pages/Landing16/Index";
import Index17 from "./pages/Landing17/Index";
import Index18 from "./pages/Landing18/Index";
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
import EmailTemplatePage11 from "./pages/Email11";
import EmailTemplatePage12 from "./pages/Email12";
import EmailTemplatePage13 from "./pages/Email13";
import EmailTemplatePage14 from "./pages/Email14";
import EmailTemplatePage15 from "./pages/Email15";
import EmailTemplatePage16 from "./pages/Email16";
import EmailTemplatePage17 from "./pages/Email17";
import EmailTemplatePage18 from "./pages/Email18";


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
          <Route path="/sherine-emad-nassim" element={<Index11 />} />
          <Route path="/nouran-a-fahmy" element={<Index12 />} />
          <Route path="/mai" element={<Index13 />} />
          <Route path="/rehab" element={<Index14 />} />
          <Route path="/shainnah" element={<Index15 />} />
          <Route path="/abdullah" element={<Index16 />} />
          <Route path="/sherine" element={<Index17 />} />
          <Route path="/nouran" element={<Index18 />} />
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
          <Route path="/email-sherine-emad-nassim" element={<EmailTemplatePage11 />} />
          <Route path="/email-nouran-a-fahmy" element={<EmailTemplatePage12 />} />
          <Route path="/email-mai" element={<EmailTemplatePage13 />} />
          <Route path="/email-rehab" element={<EmailTemplatePage14 />} />
          <Route path="/email-shainnah" element={<EmailTemplatePage15 />} />
          <Route path="/email-abdullah" element={<EmailTemplatePage16 />} />
          <Route path="/email-sherine" element={<EmailTemplatePage17 />} />
          <Route path="/email-nouran" element={<EmailTemplatePage18 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
