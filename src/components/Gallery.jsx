import React, { useState, useMemo, useCallback } from 'react';
import { useFetchPhotos } from '../hooks/useFetchPhotos';
import { ACTIONS } from '../store/favoritesReducer';
import PhotoCard from './PhotoCard';
import SearchBar from './SearchBar';
import { LoadingSpinner, ErrorMessage } from './Feedback';

const Gallery = ({ view = 'all', favorites, dispatch }) => {
    // Custom Hook for API fetching (Requirement 6)
    const { photos, loading, error } = useFetchPhotos();

    // Local state for search query
    const [searchQuery, setSearchQuery] = useState('');

    // useCallback for search handler (Requirement 7)
    // Memoizing this avoids unnecessary re-renders of the SearchBar if it were more complex
    const handleSearchChange = useCallback((value) => {
        setSearchQuery(value);
    }, []);

    // useMemo for filtering photos (Requirement 7)
    // Only re-calculate when photos change, favorites change, search query changes, or view changes
    const filteredPhotos = useMemo(() => {
        const sourcePhotos = view === 'favorites' ? favorites : photos;

        if (!searchQuery.trim()) return sourcePhotos;

        return sourcePhotos.filter(photo =>
            photo.author.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [photos, favorites, searchQuery, view]);

    const handleToggleFavorite = (photo) => {
        dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: photo });
    };

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
            {/* Search Filter Section (Requirement 4) */}
            <SearchBar value={searchQuery} onChange={handleSearchChange} />

            {/* Responsive Grid View (Requirement 3) */}
            {/* Design: 4 cols on desktop, 2 on tablet, 1 on mobile */}
            <div className="photo-grid-container">
                {filteredPhotos.length > 0 ? (
                    filteredPhotos.map(photo => (
                        <PhotoCard
                            key={photo.id}
                            photo={photo}
                            isFavorite={!!favorites.find(f => f.id === photo.id)}
                            onToggleFavorite={handleToggleFavorite}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center py-20 bg-slate-50/50 rounded-3xl border-2 border-dashed border-slate-100">
                        <div className="max-w-xs mx-auto">
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-slate-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                </svg>
                            </div>
                            <h3 className="text-slate-600 font-bold mb-1">
                                {view === 'favorites' && favorites.length === 0
                                    ? "No favorites yet"
                                    : "No photos found"}
                            </h3>
                            <p className="text-slate-400 text-sm">
                                {view === 'favorites' && favorites.length === 0
                                    ? "Explore the gallery and mark some photos as favorites to see them here."
                                    : `We couldn't find any results for "${searchQuery}"`}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;
