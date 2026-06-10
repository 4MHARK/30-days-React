const UserCards = ({ name, role }) => {
    return (
        <div className=" bg-white shadow-lg rounded-xl p-6 m-4 w-64 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    {name[0]}
                </div>
                <div>
                    <h1 className="text-lg font-bold text-gray-800">{name}</h1>
                    <p className="text-gray-500 text-sm">{role}</p>
                </div>
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg w-full"
                onClick={() => console.log(`Deleting user: ${name}`)}>
                Delete
            </button>
        </div>
    )
}
export default UserCards