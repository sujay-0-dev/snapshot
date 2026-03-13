import React, { useState, useReducer } from 'react';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { favoritesReducer, initialState } from './store/favoritesReducer';

function App() {
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState);
  const [view, setView] = useState('all'); // 'all' or 'favorites'

  return (
    <div className="min-h-screen">
      {/* Premium Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 mb-8">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6.75A1.5 1.5 0 0019.5 5.25H4.5A1.5 1.5 0 003 6.75v12a1.5 1.5 0 001.5 1.5z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-800 tracking-tight leading-none">SNAPSHOT</h1>
              <p className="text-[10px] text-indigo-500 font-bold uppercase tracking-widest mt-1">Premium Photo Gallery</p>
            </div>
          </div>

          <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setView('all')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${view === 'all'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
                }`}
            >
              All Photos
            </button>
            <button
              onClick={() => setView('favorites')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${view === 'favorites'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
                }`}
            >
              Favorites
              {favorites.length > 0 && (
                <span className="ml-2 bg-indigo-100 text-indigo-600 px-1.5 py-0.5 rounded-md text-[10px]">
                  {favorites.length}
                </span>
              )}
            </button>
          </div>

          <div className="hidden md:block">
            <p className="text-sm text-slate-400 font-medium">Celebrare Frontend Assignment</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Discover <span className="text-indigo-600">Beautiful</span> Imagery
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Explore a curated collection of high-quality photographs from around the world. Mark your favorites to save them for later.
          </p>
        </div>

        <Gallery
          view={view}
          favorites={favorites}
          dispatch={dispatch}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
