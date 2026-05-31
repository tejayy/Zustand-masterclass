import { useAuthStore } from "../stores/authStore";

const LoginPage = () => {
  const login = useAuthStore((state) => state.login);
  const handleLogin = () => {
    login(
      {
        id: "1",
        name: "Tejas",
        email: "test@test.com",
      },
      "jwt-token-123",
    );
  };

  return (
    <div className="min-w-screen flex items-center justify-center p-6">
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
