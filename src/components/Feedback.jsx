import React from 'react';

// Loading Spinner Component
export const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center p-10 space-y-4">
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <p className="text-slate-500 font-medium">Fetching beautiful moments...</p>
    </div>
);

// Error Message Component
export const ErrorMessage = ({ message }) => (
    <div className="p-6 bg-red-50 border border-red-200 rounded-xl text-center">
        <p className="text-red-600 font-semibold text-lg mb-2">Oops! Something went wrong</p>
        <p className="text-red-500">{message}</p>
        <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
            Try Again
        </button>
    </div>
);
