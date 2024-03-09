import "./style.css";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    address: {
        city: string;
    };
}


export function UserCard(props: { user: User }) {
    const {user} = props;
    return (
        <div className="userCard">
            <img alt={'userPic'} className="userPic" src={user.image}/>
            <div className="userInfo">
                <div>{`${user.firstName} ${user.lastName}`}</div>
                <div>{user.address.city}</div>
            </div>
        </div>
    );
}
