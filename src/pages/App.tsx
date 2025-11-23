import { Link } from "react-router";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      {/* <CounterPage /> */}
      <h1 className="text-3xl font-bold">Home Page</h1>
      <Link to={"/posts"}>Go to Post Page</Link>
    </div>
  );
}

export default App;
