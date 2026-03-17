import RootPage from "./components/HomePage/RootPage";
import ExampleModal from "./components/modal/modal";

function App() {

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <RootPage />
      <ExampleModal />
    </div>
  );
}

export default App;
