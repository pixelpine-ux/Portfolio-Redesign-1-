import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-6 dark:bg-slate-900">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl mb-4">404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="text-xl text-slate dark:text-gray-300">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/"
            className="bg-cyan text-white px-8 h-12 rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
          >
            <Home size={20} />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="border-2 border-navy dark:border-cyan text-navy dark:text-cyan px-8 h-12 rounded-lg hover:bg-navy dark:hover:bg-cyan hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
