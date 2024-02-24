import { useEffect } from "react";
import { useTasks } from "../context/taskContext";
import { Link } from "react-router-dom";
import TaskCard from "../components/TaskCard";

const TasksPage = () => {
  const { getTasks, tasks } = useTasks();
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="my-10">
      {tasks.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          {tasks.map((task) => (
            <TaskCard task={task} key={task._id} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center align-middle w-full h-full mt-32 text-center">
          <h1 className="text-xl">You don&apos;t have any tasks yet</h1>
          <Link
            to="/tasks/new"
            className="bg-teal-500 hover:bg-teal-600 active:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-300 py-2 px-3 w-fit my-3 rounded-md text-white shadow-sm font-semibold duration-300 transition ease-out mx-auto">
            Create one
          </Link>
        </div>
      )}
    </div>
  );
};

export default TasksPage;
