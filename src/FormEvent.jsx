const FormEvent = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let email = e.target.email.value;
        console.log(`Name: ${name}, Email: ${email}`)
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Contact Us
                </h2>

                <div className="flex flex-col gap-4">
                    <div>
                        <label className="text-gray-600 text-sm font-medium mb-1 block">
                            Full Name
                        </label>
                        <input 
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="text-gray-600 text-sm font-medium mb-1 block">
                            Email Address
                        </label>
                        <input 
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <button 
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 mt-2 transition-colors"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
export default FormEvent;