import React from "react";

function AddUser() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md"
        >
          <h2 className="text-3xl font-bold mb-5 text-center">Add New User</h2>

          {/* Name */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full border border-slate-400 p-2 rounded focus:outline-none focus:ring-1 focus:ring-slate-500"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-slate-400 p-2 rounded focus:outline-none focus:ring-1 focus:ring-slate-500"
            />
          </div>

          {/* Age */}
          <div className="mb-5">
            <label className="block mb-1 font-medium">Age</label>
            <input
              type="tel"
              name="mobile"
              placeholder="Enter your Age"
              className="w-full border border-slate-400 p-2 rounded focus:outline-none focus:ring-1 focus:ring-slate-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-slate-500 hover:bg-slate-700 duration-300 text-lg text-white mb-4 px-3 py-1 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddUser;
