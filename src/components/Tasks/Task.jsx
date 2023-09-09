import { AiOutlineCloseCircle } from "react-icons/ai";
import { TbProgress, TbProgressAlert, TbProgressCheck } from "react-icons/tb";
import { useTasks } from "../../contexts/TaskContext";

function Task({ setOpen, task, setId }) {
  const { handleDeleteTask } = useTasks();
  const { name, category, status, id } = task;

  function handleDelete(e) {
    e.stopPropagation();
    handleDeleteTask(id);
  }

  return (
    <>
      <div
        onClick={() => {
          setOpen(true);
          setId(id);
        }}
        className="cursor-pointer border-2 border-[#E5E6FF]  shadow-sm px-4 py-2 rounded-lg flex items-center justify-between mb-2"
      >
        <div className="flex items-center">
          {status === "Not started" ? (
            <TbProgressAlert size={25} color="#4D0303" className="mr-2" />
          ) : status === "In progress" ? (
            <TbProgress size={25} color="#402200" className="mr-2" />
          ) : status === "Finished" ? (
            <TbProgressCheck size={25} color="#0F4D00" className="mr-2" />
          ) : (
            ""
          )}

          <div className="">{name}</div>
        </div>
        <div className="flex items-center">
          <div className="bg-[#E5E6FF] py-2 px-4 rounded-full mr-2 text-[14px] font-medium text-[#49495e]">
            {category}
          </div>
          <AiOutlineCloseCircle
            onClick={handleDelete}
            size={30}
            color="F24848"
          />
        </div>
      </div>
    </>
  );
}

export default Task;
