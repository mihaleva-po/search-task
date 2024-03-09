import {useState} from "react";
import {SearchForm} from "./components/SearchFrom/SearchForm";
import {SearchContext} from "./components/SearchResults/SearchContext";
import {SearchResults} from "./components/SearchResults/SearchResults";
import {mockUsers} from "./mockUsers";
import {User} from "./components/UserCard/UserCard.tsx";

export default function App() {
    const [users, setUsers] = useState(mockUsers);


    const updateData = (data: User[]) => {
        setUsers(data);
    }

    return (
        <SearchContext.Provider value={{users}}>
            <SearchForm updateData={updateData}/>
            <SearchResults/>
        </SearchContext.Provider>
    );
}
