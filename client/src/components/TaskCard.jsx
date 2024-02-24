import { FiEdit, FiCheck, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useTasks } from "../context/taskContext";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
dayjs.extend(utc);

/* eslint-disable react/prop-types */
const TaskCard = ({ task }) => {
  // const formattedDate = task.date.toLocaleDateString("en-US");
  const { deleteTask } = useTasks();
  return (
    <div className="block rounded-lg bg-gray-100 text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-56 mx-auto">
      <div className="p-6 pb-2">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
          {task.title}
        </h5>
        <p className="mb-4 text-base text-neutral-600 line-clamp-3 h-[68px] max-h-[68px]">
          {task.description}
        </p>
        <div className="flex flex-flow justify-between gap-x-4">
          <button
            type="button"
            className="bg-teal-500 hover:bg-teal-600 active:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-300 py-2 px-3 w-full my-3 rounded-md text-white text-sm shadow-sm font-semibold transition duration-300  ease-out flex flex-row align-middle justify-center gap-x-2 text-center"
            onClick={() => deleteTask(task._id)}>
            <FiCheck className="h-full" />
            <span>Done</span>
          </button>
          <Link
            to={`/tasks/${task._id}`}
            type="button"
            className="bg-gray-700 hover:bg-gray-900 active:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-500 py-2 px-3 w-full my-3 rounded-md text-white text-sm shadow-sm font-semibold transition duration-300  ease-out flex flex-row align-middle justify-center gap-x-2 text-center">
            <FiEdit className="h-full" />
            <span>Edit</span>
          </Link>
        </div>
      </div>
      <div className="border-t-2 border-neutral-100 px-6 py-1 flex flex-row align-middle justify-center gap-x-2 text-center">
        <FiClock className="h-full mt-1" />
        <span>{dayjs(task.date).utc().format("DD/MM/YYYY")}</span>
      </div>
    </div>
  );
};

export default TaskCard;
