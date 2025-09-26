import { Github, Lock } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

const PrivateRepoPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-8">
      <div className="flex flex-col items-center justify-center text-center space-y-6 border border-gray-800 bg-gray-900/50 rounded-lg p-12 shadow-2xl shadow-gray-900/50">
        
        {/* GitHub Icon */}
        <Github className="h-16 w-16 text-gray-400" />

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl flex items-center gap-3">
          <Lock className="h-8 w-8 text-yellow-400" />
          Private Repository
        </h1>
        
        {/* Description */}
        <p className="max-w-md text-lg text-gray-400">
          This content is protected. Please ensure you have the necessary permissions to view this repository.
        </p>
        
        {/* Action Button */}
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        >
          Return to Homepage
        </Link>
      </div>
    </main>
  );
};

export default PrivateRepoPage;