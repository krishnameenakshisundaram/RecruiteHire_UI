const UserDetail = ({
    loginName,
    firstName,
    lastName,
    email,
    id,
    done,
    getUserDetail,
    addUser,
    updateUser,
    deleteUser,
  }: {
    loginName: string;
    firstName: string;
    lastName: string;
    email: string;
    id: number;
    done: boolean;
    getUserDetail: (id: number) => void;
    addUser: (loginName: string, firstName: string,lastName: string, email: string) => void;
    updateUser: (id: number) => void;
    deleteUser: (id: number, done: boolean) => void;
  }) => {
    return (
      <div className="flex justify-between bg-white p-1 px-3 rounded-sm gap-4">
        <div className="flex gap-2 items-center">
          <input
            type="submit"            
            onClick={() => getUserDetail(id)}
          />
          {loginName}
        </div>
        <button
          className="bg-green-200 hover:bg-green-300 rounded-lg p-1 px-3"
          type="button"
          onClick={() => deleteUser(id, !done)}
        >
          Delete
        </button>
      </div>
    );
  };
  
  export default UserDetail;
  