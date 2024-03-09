import "./styles.css";
import {useState} from "react";
import {sendDataToAPI} from "./API.ts";
import {User} from "../UserCard/UserCard.tsx";

interface PropsFunc {
    updateData: (users: User[]) => void; // Предполагается, что User - это интерфейс для пользователя
}

export function SearchForm({updateData}: PropsFunc) {

    const [inputText, setInputText] = useState('');


    async function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputText(e.target.value);
        const data = await sendDataToAPI(e.target.value);
        updateData(data.users);
    }

    return (
        <div className="searchForm">
            <form>
                <input type="text" value={inputText} onChange={handleOnChange}
                       placeholder={'Введите ник пользователя'}/>
            </form>
        </div>
    );
}
