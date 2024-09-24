import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  // const [theme, setTheme] = useState("light");
  // const themeHandler = () => {
  //   setTheme((prevState) => (prevState == "light" ? "dark" : "light"));
  // };
  // useEffect(() => {
  //   document.querySelector("html").classList.remove("light", "dark");
  //   document.querySelector("html").classList.add(theme);
  // }, [theme]);

  return (
    //we can wrap the element with provider here or in main.js
    <>
      <div className="w-full h-screen dark:bg-gray-800">
        {/* <div>
          <button
            onClick={themeHandler}
            className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            {" "}
            themeHandler
          </button>
        </div> */}
        <div className="flex justify-center  ">
          <div className=" flex flex-col ">
            <div>
              <AddTodo />
            </div>
            <h1 className="mt-4 font-semibold underline ">My Todos</h1>
            <div>
              <Todos />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
