// src/app/page.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Play FIFA 1v1. Win Real Cash.
        </h1>
        <p className="text-lg text-gray-300">
          Challenge players. Bet. Win. Withdraw.
        </p>
        <div className="space-x-4">
          <a href="/register" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white font-semibold">
            Register
          </a>
          <a href="/login" className="bg-gray-700 hover:bg-gray-800 px-6 py-3 rounded-xl text-white font-semibold">
            Login
          </a>
        </div>
      </div>
    </main>
  );
}

