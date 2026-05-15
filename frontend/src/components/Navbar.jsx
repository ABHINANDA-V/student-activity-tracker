function Navbar() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (

    <div className="bg-white rounded-2xl shadow p-5 flex justify-between items-center">

      <div>

        <h1 className="text-2xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome back
        </p>

      </div>

      <div className="font-semibold">
        {user?.username}
      </div>

    </div>
  );
}

export default Navbar;