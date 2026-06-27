function Greeting() {

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  return (

    <div className="mb-10">

      <h1 className="text-5xl font-bold text-slate-800">

        Welcome To LifeTrack,

        <span className="text-blue-600 ml-2">
          {user.fullname || "User"}
        </span>

      </h1>

      <p className="text-slate-500 text-lg mt-2">
        Manage your productivity from one place.
      </p>

    </div>

  );

}

export default Greeting;