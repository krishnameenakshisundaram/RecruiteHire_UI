import { FormEvent, useState } from "react";
import Container from "./components/Container";
import Input from "./components/Input";
import Department from "./components/Department/Department";
import UserDetail from "./components/User/UserDetail";

export interface User {
    loginName: string;
    firstName: string;
    lastName: string;
    email: string;
    id: number;
}

function App() {
    const [users, setUsers] = useState<User[]>([]);

    const handleDeleteUserDetail = (id: number) => {
        setUsers((users) => users.filter((u) => u.id !== id));
    };

    function handleSubmit(e: FormEvent<HTMLFormElement>, value: string): void {
        throw new Error("Function not implemented.");
    }

    return (
        <div className="flex justify-center m-5">
            <div className="flex flex-col items-center">
                <div className="border shadow p-10 flex flex-col gap-10 sm:w-[640px]">
                    <Container title={"User"}>
                        <UserDetail deleteUser={handleDeleteUserDetail}
                        getUserDetail={function (id: number): void {
                            throw new Error("Function not implemented.");
                        } } addUser={function (loginName: string, firstName: string, lastName: string, email: string): void {
                            throw new Error("Function not implemented.");
                        } } updateUser={function (id: number): void {
                            throw new Error("Function not implemented.");
                        } } loginName={""} firstName={""} lastName={""} email={""} id={0} done={false}></UserDetail>
                    </Container>
                    <Container>
                        <Input handleSubmit={handleSubmit} />
                    </Container>
                    <Container title={"Department"}>
                        <Department departmentId={0} departmentName={""} description={""} addDepartment={function (departmentName: string, description: string): void {
                            throw new Error("Function not implemented.");
                        } } updateDepartment={function (departmentId: number): void {
                            throw new Error("Function not implemented.");
                        } } getDepartmentDetail={function (departmentId: number): void {
                            throw new Error("Function not implemented.");
                        } }></Department>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default App;
