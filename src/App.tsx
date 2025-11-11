import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Programi from "./pages/Programi";
import Kontakti from "./pages/Kontakti";
import ElezIsmaili from "./pages/biografi/ElezIsmaili";
import SeadRamadani from "./pages/biografi/SeadRamadani";
import PellumbVorpsi from "./pages/biografi/PellumbVorpsi";
import VirtytSokoli from "./pages/biografi/VirtytSokoli";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programi" element={<Programi />} />
          <Route path="/kontakti" element={<Kontakti />} />
          <Route path="/biografi/elez-ismaili" element={<ElezIsmaili />} />
          <Route path="/biografi/sead-ramadani" element={<SeadRamadani />} />
          <Route path="/biografi/pellumb-vorpsi" element={<PellumbVorpsi />} />
          <Route path="/biografi/virtyt-sokoli" element={<VirtytSokoli />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
