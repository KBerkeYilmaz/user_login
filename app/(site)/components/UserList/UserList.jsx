import UserListItem from "./UserListItem";


const UserList = (props) => {
  const users = props.users

  if (users.length > 0) {
    return (
      <div className="w-2/5 max-h-max flex flex-col justify-center items-center mt-5">
        <ul className="flex flex-col justify-center items-center gap-10 w-full h-full rounded-lg">
          {users.map(user => {
            return (
              <UserListItem
              
              userName = {user.name}
              userAge = {user.age}
              key = {user.id}
              id={user.id}
              />
            )
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default UserList;
