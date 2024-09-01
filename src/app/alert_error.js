export default function Alert_error({ isVisible ,errorMsg }) {
    if (!isVisible) {
        return null;
    }

    return (
        <div className="p-4 w-1/3 bg-white border border-white rounded-lg shadow-lg">
        <p className={`text-black font-bold text-center text-2xl ${errorMsg ? "text-red-500" : "text-green-500"}`}>
        <p className="">{errorMsg !==null ? errorMsg:"An error occurred"}</p>
            </p>
        </div>
    );
}
