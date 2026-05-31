import { useAuthStore } from "../stores/authStore";

const DashboardPage = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="min-w-screen flex flex-col items-center justify-center p-6">
      <h1>WELCOME {user?.name}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default DashboardPage;
