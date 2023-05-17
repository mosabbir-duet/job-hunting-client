import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-5xl text-violet-700 text-center my-8">
        Job hunting.
      </h1>
      <div className="flex justify-center">
        <Link to="/addjob">
          <button className="btn btn-warning">Post job</button>
        </Link>
      </div>
    </>
  );
}

export default App;
