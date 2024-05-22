import "./App.css";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="bg-[#3179ba] w-screen md:h-screen h-full flex flex-col items-center self-center py-5 ">
      <h1 className="text-3xl font-bold text-[#ffffff]">Todo Application</h1>
      <div class="container mx-auto">
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
