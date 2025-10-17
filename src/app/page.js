import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-6">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-xs" 
        style={{ backgroundImage: "url('/bg-todo-1.jpg')" }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full"> 
        <TodoList />
        <footer className="mt-6 text-sm text-gray-700 drop-shadow-md font-bold">
          Built with ❤️ using Next.js & TailwindCSS
        </footer>
      </div>
    </main>
  );
}