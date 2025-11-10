import RootPage from "./components/HomePage/RootPage";
import ExampleModal from "./components/modal/modal";

function App() {

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <RootPage />
      <ExampleModal />
    </div>
  );
}

export default App;
