// interface ButtonProps {
//   btn?: string;
// }

export default function Button({ btn = "Not yet" }) {
  const tasksBtn = [
    { id: "1", btn: "Add Task" },
    { id: "2", btn: "Click here" },
    { id: "3", btn: "Click me" },
    { id: "4", btn: "Click to join" },
    { id: "5", btn: "Click to add" },
    { id: "6", btn: "Add card" },
  ];
  return (
    <div>
      {tasksBtn.map((task) => (
        <button key={task.id} className="block w-full py-2 px-4 mb-2 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 font-semibold rounded-lg shadow-md  transform hover:scale-105 transition-transform duration-300">
          {task.btn}
        </button>
      ))}
    </div>
  );
}
