'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [user, setUser] = useState<{ email: string; username: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      router.push('/login'); // Not logged in
    } else {
      const parsedUser = JSON.parse(storedUser);
      setUser({ email: parsedUser.email, username: parsedUser.username });
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  if (!user) return null; // or a loading spinner

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user.username}!</h1>
        <p className="text-gray-400 mb-6">You are logged in with <strong>{user.email}</strong></p>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Logout
        </button>
      </div>
    </main>
  );
}
