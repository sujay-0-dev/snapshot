import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch photos from Picsum API
 * Returns photos data, loading state, and error state
 */
export const useFetchPhotos = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://picsum.photos/v2/list?limit=30');

                if (!response.ok) {
                    throw new Error('Failed to fetch photos');
                }

                const data = await response.json();
                setPhotos(data);
                setError(null);
            } catch (err) {
                setError(err.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        fetchPhotos();
    }, []);

    return { photos, loading, error };
};
