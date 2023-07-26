import { User } from "../../App";
import UserDetail from "./UserDetail";

const Users = ({
  users,
  getUserDetail,
  addUser,
  updateUser,
  deleteUser
}: {
  users: User[];
  getUserDetail: (id: number) => void;
  addUser: (loginName: string, firstName: string,lastName: string, email: string) => void;
  updateUser: (id: number) => void;
  deleteUser: (id: number, done: boolean) => void;
}) => {
  return (
    <div className="flex flex-col gap-2">
      {users.length ? (
        users.map((t) => (
          <UserDetail
            key={t.id}
            loginName={t.loginName}
            id={t.id}
            firstName={t.firstName} 
            lastName={t.lastName} 
            email={t.email}
            getUserDetail={getUserDetail}
            addUser={addUser}
            updateUser={updateUser}
            deleteUser={deleteUser}  
            done={false}/>
        ))
      ) : (
        <span className="text-green-100">No user added yet!</span>
      )}
    </div>
  );
};

export default User;
