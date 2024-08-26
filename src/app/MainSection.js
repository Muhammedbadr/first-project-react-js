import React from 'react';

export default function MainSection({ name = "no name", lastname = "no lastname" }) {
  const tasks = [
    { id: "1", name: "Muhammad", lastname: "Jack Ali" },
    { id: "2", name: "Ali", lastname: "Jack Ali" },
    { id: "3", name: "Omar", lastname: "Ali" },
    { id: "4", name: "Sara", lastname: "Smith" },
    { id: "5", name: "John", lastname: "Doe" },
    { id: "6", name: "John", lastname: "Doe" },
  ];

  return (
    <main className="space-y-6 px-4">
      {/* <div
        className="p-6 mb-6 rounded-lg shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-shadow duration-300"
      >
        <p className="text-2xl font-semibold text-gray-800">{name}</p>
        <hr className="my-4 border-gray-300" />
        <p className="text-lg text-gray-600">{lastname}</p>
      </div> */}

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-4 mb-4 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-2xl font-semibold text-gray-800">{task.name}</p>
            <hr className="my-4 border-gray-300" />
            <p className="text-md text-gray-600">{task.lastname}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
