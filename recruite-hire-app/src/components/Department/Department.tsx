import { User } from "../../App";

const Department = ({ 
    departmentId, departmentName, description, getDepartmentDetail,
    addDepartment,
    updateDepartment,
}: 
    {
        departmentId: number;
        departmentName: string;
        description: string;
        getDepartmentDetail: (departmentId: number) => void;
        addDepartment: (departmentName: string, description: string) => void;
        updateDepartment: (departmentId: number) => void;

    }) => {
        return (
            <div className="flex justify-between bg-white p-1 px-3 rounded-sm gap-4">
              <div className="flex gap-2 items-center">
                <input
                  type="submit"            
                  onClick={() => getDepartmentDetail(departmentId)}
                />                
              </div>
              <button
                className="bg-green-200 hover:bg-green-300 rounded-lg p-1 px-3"
                type="button"
                onClick={() => addDepartment(departmentName,description)}
              >
                Create
              </button>
              <button
                className="bg-green-200 hover:bg-green-300 rounded-lg p-1 px-3"
                type="button"
                onClick={() => updateDepartment(departmentId)}
              >
                Update
              </button>
            </div>
          );
};

export default Department;
