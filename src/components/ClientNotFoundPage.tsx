import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

export function ClientNotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1E3A8A] to-[#000000]">
      <div className="text-center px-4">
        <h1 className="text-7xl font-bold text-white mb-4">404</h1>
        <p className="text-2xl text-white/90 mb-2">Project Preview Not Found</p>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          This preview link may have expired or the URL may be incorrect.
          Please check the link and try again.
        </p>
        <Button
          size="lg"
          className="bg-[#0EA5E9] hover:bg-white hover:text-[#1E3A8A] text-white cursor-pointer"
          asChild
        >
          <a href="#home">
            <ArrowLeft size={18} className="mr-2" />
            Go to Run Horse Run
          </a>
        </Button>
      </div>
    </div>
  );
}
