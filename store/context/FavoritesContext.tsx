import { createContext, useState } from "react";

interface ContextValue {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

const initialValue: ContextValue = {
  ids: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
};

export const FavoritesContext = createContext<ContextValue>(initialValue);

interface FavoritesContextProviderProps {
  children: React.ReactNode;
}

export const FavoritesContextProvider = ({
  children,
}: FavoritesContextProviderProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavorites((prev => ([id, ...prev])))
  }

  const removeFavorite = (id: string) => {
    const cleanedFavorites = favorites.filter(favorite => favorite !== id);
    setFavorites(cleanedFavorites);
  }


  const value: ContextValue = {
    ids: favorites,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
