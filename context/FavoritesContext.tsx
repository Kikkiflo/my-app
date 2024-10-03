import React, { createContext, useState, useContext } from 'react';

type FavoritesContextType = {
    favorites: any[];
    addToFavorites: (recipe: any) => void;
    removeFromFavorites: (recipe: any) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
    const [favorites, setFavorites] = useState<any[]>([]);

    const addToFavorites = (recipe: any) => {
        if (!favorites.includes(recipe)) {
            setFavorites([...favorites, recipe]);
        }
    };

    const removeFromFavorites = (recipe: any) => {
        setFavorites(favorites.filter((fav) => fav !== recipe));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites must be used within a FavoritesProvider");
    }
    return context;
};
