import React from 'react';

const PhotoCard = ({ photo, isFavorite, onToggleFavorite }) => {
    return (
        <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
            {/* Photo Container */}
            <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                    src={photo.download_url}
                    alt={`By ${photo.author}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                />
            </div>

            {/* Card Info */}
            <div className="p-4 flex justify-between items-center bg-white">
                <div className="truncate pr-2">
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Author</p>
                    <h3 className="text-slate-800 font-bold truncate">{photo.author}</h3>
                </div>

                {/* Heart Icon Button */}
                <button
                    onClick={() => onToggleFavorite(photo)}
                    className={`p-2 rounded-full transition-all duration-300 ${isFavorite
                            ? 'bg-red-50 text-red-500 scale-110'
                            : 'bg-slate-50 text-slate-400 hover:text-red-400 hover:bg-red-50'
                        }`}
                    aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={isFavorite ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                    >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default PhotoCard;
