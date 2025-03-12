import { Suspense } from 'react';
import PostProductionContent from './PostProductionContent';

export default function PostProduction() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-500" />
      </div>
    }>
      <PostProductionContent />
    </Suspense>
  );
} 