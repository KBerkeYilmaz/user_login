const UserList = (props) => {
  if (props.users.length > 0) {
    return (
      <div className="w-1/2 h-16 flex flex-col justify-center items-center bg-slate-400 rounded-lg">
        <div className="flex justify-center items-center gap-5 w-full h-full">
          <div className="bg-blue-400">
            {props.users.map((user) => {
              return user.name;
            })}
            </div>
            <div>
            {props.users.map((user) => {
              return user.age;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default UserList;
