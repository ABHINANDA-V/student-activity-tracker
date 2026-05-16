function Navbar() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (

    <div className="bg-white rounded-2xl shadow p-5 flex justify-between items-center">

      <div>
        <h1 className="text-3xl font-bold text-blue-600">
          Hii  {user?.username}
        </h1>

        <p className="text-gray-500 text-2xl">
          Welcome back
        </p>
      </div>
    </div>
  );
}
export default Navbar;