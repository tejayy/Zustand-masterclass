import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    if (!acceptTerms) {
      return toast.error("Please accept terms & conditions");
    }

    try {
      setLoading(true);

      // API Call Here
      await registerUser({
        fullName: formData.name,
        email: formData.email,
        password: formData.password,
      });
      toast.success(`Account created successfully!`);
      navigate("/");
    } catch (error) {
      toast.error("Signup failed");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f172a]">
      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-600/30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/30 blur-[120px]" />

      <div className="relative flex min-h-screen items-center justify-center p-6">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl md:grid-cols-2">
          {/* Left Side */}
          <div className="hidden flex-col justify-center p-12 md:flex">
            <span className="mb-4 inline-flex w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              🚀 Join Thousands of Productive Users
            </span>

            <h1 className="text-6xl font-extrabold text-white">
              Todo<span className="text-cyan-400">Flow</span>
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-300">
              Create your account and start organizing your tasks, projects, and
              goals in one beautiful workspace.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-3xl font-bold text-white">25k+</h3>
                <p className="mt-1 text-slate-400">Active Users</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-3xl font-bold text-white">1M+</h3>
                <p className="mt-1 text-slate-400">Tasks Completed</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center p-8 md:p-12">
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
              <div>
                <h2 className="text-4xl font-bold text-white">
                  Create Account
                </h2>

                <p className="mt-2 text-slate-400">
                  Start your productivity journey today
                </p>
              </div>

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                />

                <p className="mt-2 text-xs text-slate-500">
                  Use at least 8 characters with numbers and symbols.
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              {/* Terms */}
              <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-400">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="h-4 w-4 rounded border-white/20"
                />
                I agree to the Terms & Conditions
              </label>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>

              {/* Footer */}
              <p className="text-center text-sm text-slate-400">
                Already have an account?{" "}
                <Link
                  to="/"
                  className="cursor-pointer font-medium text-cyan-400 transition hover:text-cyan-300"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
