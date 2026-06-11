import { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("counter");

  const navItems = [
    { id: "counter", label: "Tally Counter" },
    { id: "profile", label: "Social Profile" },
    { id: "flashcards", label: "Flashcards" },
    { id: "feedback", label: "Feedback Board" },
    { id: "landing", label: "Landing Kit" },
  ];
  const [count, setCount] = useState(0);
  const buttonstyle = 'bg-blue-500 text-white mr-4 rounded mb-5 px-4 py-2 justify-center'
  return (
    <div className="flex h-screen bg-gray-100 font-sans text-gray-900">
      <aside className="w-64 bg-white border-r flex flex-col">
        <div className="p-6 border-b border-gray-300 font-bold text-sm uppercase tracking-widest">
          Project Hub
        </div>

        <nav className="flex flex-col">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`${activeTab === item.id ? "bg-blue-500 text-white shadow-sm" : "text-gray-400"} w-full items-center flex space-x-3 px-4 py-3`}
            >
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto p-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold capitalize">
              {activeTab.replace("-", "")}
            </h1>
            <p className="text-gray-400 mt-2">Master Project / {activeTab}</p>
          </div>

          {activeTab === "counter" && (
            <div className="bg-white rounded-2xl shadow-md p-4">
              <h2>Counter Component</h2>
              <div className="items-center">
                <h1 className="flex justify-center mb-4">{count}</h1>
                <button className={buttonstyle} onClick={() => setCount(count + 1)}>Increase</button>
                <button className={buttonstyle} onClick={() => setCount(0)}>Reset</button>
                <button className={buttonstyle} onClick={() => setCount(count - 1)}>Decrease</button>
              </div>
            </div>
          )}

           {activeTab === "profile" && (
            <div>
                <h2>Social Profile</h2>
            </div>
           )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
