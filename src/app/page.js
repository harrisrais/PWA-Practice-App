import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-purple-200 p-6">
      <TodoList />
      <footer className="mt-6 text-sm text-gray-500">
        Built with ❤️ using Next.js & TailwindCSS
      </footer>
    </main>
  );
}
