import toast from "react-hot-toast";
import { loginUser } from "../services/authService";
import { useAuthStore } from "../stores/authStore";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await loginUser({
        email,
        password,
      });
      login(data.user, data.token);
      toast.success(`Welcome ${data.user.name}`);
    } catch (error) {
      toast.error("Invalid Creds");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f172a]">
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-600/30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/30 blur-[120px]" />

      <div className="relative flex min-h-screen items-center justify-center p-6">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl md:grid-cols-2">
          {/* Left Side */}
          <div className="hidden flex-col justify-center p-12 md:flex">
            <h1 className="text-6xl font-extrabold text-white">
              Todo<span className="text-cyan-400">Flow</span>
            </h1>

            <p className="mt-6 max-w-md text-lg text-slate-300">
              Organize your tasks, stay productive and manage everything from
              one beautiful dashboard.
            </p>

            <div className="mt-10 flex gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-2xl font-bold text-white">10k+</h3>
                <p className="text-slate-400">Tasks Managed</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-2xl font-bold text-white">99%</h3>
                <p className="text-slate-400">Productivity</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center p-8 md:p-12">
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-white">Welcome Back</h2>
                <p className="mt-2 text-slate-400">
                  Login to continue your journey
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 py-3 font-semibold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>

              <p className="text-center text-sm text-slate-400">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="cursor-pointer font-medium text-cyan-400 hover:text-cyan-300"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
