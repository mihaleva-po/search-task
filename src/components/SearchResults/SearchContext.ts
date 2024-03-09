

import { createContext } from 'react';
import { User } from '../UserCard/UserCard.tsx';

interface SearchContextType {
    users: User[];
}

// Создание контекста с указанием типа данных
export const SearchContext = createContext<SearchContextType>({ users: [] });
