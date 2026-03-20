import { useState } from "react";

const Home = () => {
  const users = [
    { id: 1, name: "Rajesh", email: "rajesh@gmail.com", age: 25 },
    { id: 2, name: "Amit", email: "amit@gmail.com", age: 28 },
    { id: 3, name: "Priya", email: "priya@gmail.com", age: 23 },
  ];

  return (
    <div className="py-10 px-24">
      <button className="bg-slate-500 hover:bg-slate-700 duration-300 text-lg text-white mb-4 px-3 py-1 rounded">
        Add User
      </button>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left">S.No</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Age</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.age}</td>

                <td className="py-2 px-4 flex justify-center gap-2">
                  <button className="bg-teal-500 hover:bg-teal-700 text-white px-3 py-1 rounded">
                    Edit
                  </button>

                  <button className="bg-slate-500 hover:bg-slate-700 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
