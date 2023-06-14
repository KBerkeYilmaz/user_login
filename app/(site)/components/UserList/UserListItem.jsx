import UserAge from "./UserAge";
import UserName from "./UserName";
import styles from '../UI/Glass.module.css';

const UserListItem = (props) => {
    
    return (
        <li 
        id={props.id}  
        className={`${styles.glass} flex justify-between items-center w-full p-10`}
        >
            <UserName name={props.userName}/>
            <UserAge age={props.userAge}/>
        </li>
    )

};

export default UserListItem;
