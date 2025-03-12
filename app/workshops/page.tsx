import { Suspense } from 'react';
import WorkshopsContent from './WorkshopsContent';

export default function Workshops() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-500" />
      </div>
    }>
      <WorkshopsContent />
    </Suspense>
  );
} 