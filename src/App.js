import Header from "./components/Header";
import AddCategory from "./pages/AddCategory";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <AddCategory />
      </div>
    </>
  );
}

export default App;
