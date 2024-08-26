export default function List_li() {
    const tasks = [
        { id: "1", title: "doing homework at 09:00" },
        { id: "2", title: "eating breakfast at 10:00" },
        { id: "3", title: "taking a shower at 11:00" },
        { id: "4", title: "reading a book at 13:00" },
        { id: "5", title: "going to the gym at 15:00" }
    ];

    const pm = " PM"; // Define what `pm` should be

    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title + pm}</li>
                ))}
            </ul>
        </div>
    );
}
