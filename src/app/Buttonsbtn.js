
export default function Buttonsbtn(btn) {
  return (
    <div className="p-6 border-4 border-blue-500 rounded-lg ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <button
            className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-semibold rounded-lg shadow-md p-4 transform hover:scale-105 transition-transform duration-300"
          >
            <img src="/" alt="" />
            Click here
          </button>
          
      </div>
    </div>
  );
}