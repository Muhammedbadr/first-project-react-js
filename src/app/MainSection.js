
export default function MainSection({ name, lastname }) {
  return (
    <main className="space-y-6 px-4  ">
        <div
          
          className="p-6  mb-6 rounded-lg shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-shadow duration-300"
        >
          <p className="text-2xl font-semibold text-gray-800">{name}</p>
          <hr className="my-4 border-gray-300" />
          <p className="text-lg text-gray-600">{lastname}</p>
        </div>
    </main>
  );
}