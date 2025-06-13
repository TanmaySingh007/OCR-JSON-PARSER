import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import HomePage from '@/pages/HomePage';
import NotFound from '@/pages/NotFound';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 3
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient} data-id="hhy81gq5m" data-path="src/App.tsx">
      <TooltipProvider data-id="goi9ethlx" data-path="src/App.tsx">
        <Router data-id="uwd5c7sl3" data-path="src/App.tsx">
          <div className="App" data-id="fusgppf2u" data-path="src/App.tsx">
            <Routes data-id="do92ao40l" data-path="src/App.tsx">
              <Route path="/" element={<HomePage data-id="dsliokf1k" data-path="src/App.tsx" />} data-id="yukvmv384" data-path="src/App.tsx" />
              <Route path="*" element={<NotFound data-id="jefvllh4q" data-path="src/App.tsx" />} data-id="pautgcd4d" data-path="src/App.tsx" />
            </Routes>
            <Toaster data-id="8s1erlxiw" data-path="src/App.tsx" />
          </div>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>);

}

export default App;