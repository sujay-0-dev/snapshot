/**
 * Reducer to manage favorites list
 * Logic for adding/removing items and sync with localStorage
 */

export const initialState = JSON.parse(localStorage.getItem('favorites')) || [];

export const ACTIONS = {
    TOGGLE_FAVORITE: 'toggle_favorite',
};

export const favoritesReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.TOGGLE_FAVORITE: {
            const photoId = action.payload.id;
            const exists = state.find(item => item.id === photoId);

            let newState;
            if (exists) {
                // Remove if already favorited
                newState = state.filter(item => item.id !== photoId);
            } else {
                // Add if not favorited
                newState = [...state, action.payload];
            }

            // Persist to localStorage
            localStorage.setItem('favorites', JSON.stringify(newState));
            return newState;
        }
        default:
            return state;
    }
};
