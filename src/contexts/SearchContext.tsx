import { createContext, useContext, useState, ReactNode } from 'react';

interface SearchContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchContext = createContext<SearchContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SearchContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = (): SearchContextType => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }

  return context;
};
