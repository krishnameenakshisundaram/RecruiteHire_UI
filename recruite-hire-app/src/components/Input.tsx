import { FormEvent, useState } from "react";

const InputContainer = ({
  handleSubmit,
}: {
  handleSubmit: (e: FormEvent<HTMLFormElement>, value: string) => void;
}) => {
  const [newUserName, setNewUserName] = useState("");
  return (
    <form
      action=""
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        handleSubmit(e, newUserName);
        setNewUserName("");
      }}
    >
      <div className="flex flex-col">
        <label className="text-white">Enter UserName:</label>
        <input
          className="p-1 rounded-sm"
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-green-100 rounded-lg hover:bg-green-200 p-1"
      >
        Add User
      </button>
    </form>
  );
};

export default InputContainer;
