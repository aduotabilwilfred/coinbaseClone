import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import coinbaseLogo from "../assets/coinbaseLogo.svg";
import Button from "../components/ui/Button";
import { loginUser, registerUser } from "../services/api";
import { useAuth } from "../context/AuthContext";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const res = await loginUser(email, password);
      login(res.data.token, res.data.user);
      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-white flex flex-col items-center pt-10 px-6 animate-fade-in">
      <Link
        to="/"
        className="self-start mb-16 md:ml-12 lg:ml-20 animate-fade-in-up"
      >
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-gray-100 rounded-full"></div>
          </div>
        </div>
      </Link>

      <div className="w-full max-w-[420px] mt-10 animate-fade-in-up stagger-1">
        <h1 className="text-3xl font-bold mb-8 text-center font-display">
          Sign in to CryptoBase
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-xl text-sm font-sans">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-bold mb-2 font-sans">
              Email
            </label>
            <input
              type="email"
              placeholder="waotabil@nopelO.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-4 bg-transparent border border-gray-80 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-60 font-sans text-white placeholder-gray-500 hover:border-gray-60 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 font-sans">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-4 bg-transparent border border-gray-80 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-60 font-sans text-white placeholder-gray-500 hover:border-gray-60 transition-colors"
            />
          </div>

          <Button
            variant="primary"
            type="submit"
            disabled={isLoading || !email || !password}
            className={`w-full py-5 text-xl font-bold rounded-full ${isLoading || !email || !password
                ? "bg-blue-60/20 text-white/50 cursor-not-allowed"
                : "bg-blue-60 text-white hover:opacity-90 cursor-pointer"
              }`}
          >
            {isLoading ? "Signing in..." : "Continue"}
          </Button>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-80"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gray-100 text-gray-40 font-bold uppercase tracking-wider">
                OR
              </span>
            </div>
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-10 py-5 bg-cds-gray-80 hover:bg-gray-70 rounded-full transition-all border border-transparent active:scale-[0.98]"
          >
            <span className="text-2xl">🔑</span>
            <span className="font-bold text-xl">Sign in with Passkey</span>
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-10 py-5 bg-cds-gray-80 hover:bg-gray-70 rounded-full transition-all border border-transparent active:scale-[0.98]"
          >
            <span className="text-2xl">G</span>
            <span className="font-bold text-xl">Sign in with Google</span>
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-10 py-5 bg-cds-gray-80 hover:bg-gray-70 rounded-full transition-all border border-transparent active:scale-[0.98]"
          >
            <span className="text-2xl"></span>
            <span className="font-bold text-xl">Sign in with Apple</span>
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-gray-40 font-sans">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-60 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <div className="mt-20 w-full max-w-[600px] border-t border-gray-80 pt-8 pb-20 px-6 animate-fade-in-up stagger-2">
        <div className="bg-gray-80/30 p-8 rounded-2xl border border-dashed border-gray-80 text-center">
          <p className="text-gray-40 italic font-sans">
            Not your device? Use a private window. See our Privacy Policy for
            more info.
          </p>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 opacity-50 flex flex-col items-center animate-fade-in stagger-3">
        <div className="w-10 h-10 bg-cds-gray-80 rounded-full flex items-center justify-center mb-1">
          <span className="text-xs">🛡️</span>
        </div>
        <span className="text-[10px] text-gray-40">Privacy</span>
        <span className="text-[10px] text-gray-40">Terms</span>
      </div>
    </div>
  );
};

export const SignUpForm = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-20 px-6 animate-fade-in">
      <Link
        to="/"
        className="mb-12 self-start md:ml-12 lg:ml-20 animate-fade-in-up"
      >
        <img src={coinbaseLogo} alt="CryptoBase" className="h-10" />
      </Link>

      <div className="w-full max-w-[500px] animate-fade-in-up stagger-1">
        <h1 className="text-3xl font-bold text-cds-gray-100 mb-2 text-center font-display">
          Create your account
        </h1>
        <p className="text-center text-gray-60 mb-8 font-sans">
          Be sure to use your full legal name as it appears on your
          government-issued ID.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-cds-gray-100 mb-2 font-sans">
                First name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-cds-gray-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-60 font-sans transition-all hover:border-gray-20"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-cds-gray-100 mb-2 font-sans">
                Last name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-cds-gray-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-60 font-sans transition-all hover:border-gray-20"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-cds-gray-100 mb-2 font-sans">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-cds-gray-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-60 font-sans transition-all hover:border-gray-20"
              placeholder="[EMAIL_ADDRESS]"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-cds-gray-100 mb-2 font-sans">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-cds-gray-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-60 font-sans transition-all hover:border-gray-20"
              placeholder="Minimum 8 characters"
            />
          </div>

          <div className="flex items-start gap-4 p-4 border border-cds-gray-10 rounded-xl bg-gray-5">
            <input
              type="checkbox"
              className="mt-1 w-5 h-5 accent-cds-blue-60 cursor-pointer"
            />
            <label className="text-sm font-sans text-cds-gray-80">
              I certify that I am 18 years of age or older, and agree to the{" "}
              <Link to="#" className="text-blue-60 font-bold hover:underline">
                User Agreement
              </Link>{" "}
              and{" "}
              <Link to="#" className="text-blue-60 font-bold hover:underline">
                Privacy Policy
              </Link>
              .
            </label>
          </div>

          <Button
            variant="primary"
            className="w-full py-4 text-3xl font-bold uppercase tracking-wide hover:shadow-lg transition-shadow"
          >
            Create account
          </Button>
        </form>

        <div className="mt-8 text-center pb-20">
          <p className="text-gray-60 font-sans">
            Already have a CryptoBase account?{" "}
            <Link
              to="/signin"
              className="text-blue-60 font-bold hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export const EmailSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      await registerUser(name, email, password);
      navigate("/signin");
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-white flex flex-col items-center pt-10 px-6 animate-fade-in">
      <Link
        to="/"
        className="self-start mb-16 md:ml-12 lg:ml-20 animate-fade-in-up"
      >
        <img
          src={coinbaseLogo}
          alt="CryptoBase"
          className="h-8 invert brightness-0"
        />
      </Link>

      <div className="w-full max-w-[420px] mt-10 animate-fade-in-up stagger-1">
        <h1 className="text-3xl font-bold mb-3 font-display">
          Create your account
        </h1>
        <p className="text-gray-40 mb-8 font-sans">
          Access all that CryptoBase has to offer with a single account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-xl text-sm font-sans">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-bold mb-2 font-sans">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Wilfred Otabil"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-4 bg-transparent border border-gray-80 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-60 font-sans text-white placeholder-gray-500 hover:border-gray-60 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 font-sans">
              Email
            </label>
            <input
              type="email"
              placeholder="waotabil@nopelO.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-4 bg-transparent border border-gray-80 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-60 font-sans text-white placeholder-gray-500 hover:border-gray-60 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 font-sans">
              Password
            </label>
            <input
              type="password"
              placeholder="Minimum 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              className="w-full px-4 py-4 bg-transparent border border-gray-80 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-60 font-sans text-white placeholder-gray-500 hover:border-gray-60 transition-colors"
            />
          </div>

          <Button
            variant="primary"
            type="submit"
            disabled={isLoading || !name || !email || !password}
            className={`w-full py-5 text-xl font-bold rounded-full ${isLoading || !name || !email || !password
                ? "bg-blue-60/20 text-white/50 cursor-not-allowed"
                : "bg-blue-60 text-white hover:opacity-90 cursor-pointer"
              }`}
          >
            {isLoading ? "Creating account..." : "Continue"}
          </Button>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-80"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gray-100 text-gray-40 font-bold uppercase tracking-wider">
                OR
              </span>
            </div>
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-10 py-5 bg-cds-gray-80 hover:bg-gray-70 rounded-full transition-all border border-transparent active:scale-[0.98]"
          >
            <span className="text-2xl">G</span>
            <span className="font-bold text-xl">Sign up with Google</span>
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-10 py-5 bg-cds-gray-80 hover:bg-gray-70 rounded-full transition-all border border-transparent active:scale-[0.98]"
          >
            <span className="text-2xl"></span>
            <span className="font-bold text-xl">Sign up with Apple</span>
          </button>
        </form>

        <div className="mt-12 text-center pb-20">
          <p className="text-gray-40 font-sans">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-blue-60 font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 opacity-50 flex flex-col items-center animate-fade-in stagger-2">
        <div className="w-10 h-10 bg-cds-gray-80 rounded-full flex items-center justify-center mb-1">
          <span className="text-xs">🛡️</span>
        </div>
        <span className="text-[10px] text-gray-40">Privacy</span>
        <span className="text-[10px] text-gray-40">Terms</span>
      </div>
    </div>
  );
};

export const SignUpSelection = () => {
  const signupOptions = [
    {
      id: "personal",
      title: "Personal",
      description: "Trade crypto as an individual.",
      icon: (
        <div className="relative">
          <div className="w-10 h-10 bg-cds-blue-60 rounded-full flex items-center justify-center text-white">
            <span className="text-xl">👤</span>
          </div>
          <div className="absolute -bottom-1 -right-1 bg-white rounded-md p-0.5 border border-gray-100">
            <div className="bg-white text-black text-[10px] font-bold">✓</div>
          </div>
        </div>
      ),
      path: "/signup",
    },
    {
      id: "business",
      title: "Business",
      description:
        "Manage teams and portfolios, accept crypto payments, access APIs, and more",
      icon: (
        <div className="flex -space-x-2">
          <div className="w-10 h-10 bg-cds-gray-60 rounded-full flex items-center justify-center text-white">
            <span className="text-xl">👥</span>
          </div>
          <div className="w-8 h-8 bg-yellow-500 rounded-full border-2 border-gray-100 flex items-center justify-center text-black font-bold">
            C
          </div>
        </div>
      ),
      path: "#",
    },
    {
      id: "developer",
      title: "Developer",
      description: "Build onchain using developer tooling.",
      icon: (
        <div className="w-10 h-10 flex flex-col items-center justify-center space-y-[-14px]">
          <div className="w-8 h-4 bg-cds-blue-20 rounded transform -skew-x-12"></div>
          <div className="w-8 h-4 bg-cds-blue-60 rounded transform -skew-x-12 border-t-2 border-gray-100"></div>
          <div className="w-8 h-4 bg-cds-blue-80 rounded transform -skew-x-12 border-t-2 border-gray-100"></div>
        </div>
      ),
      path: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-white flex flex-col items-center pt-10 px-6 animate-fade-in">
      <Link
        to="/"
        className="self-start mb-16 md:ml-12 lg:ml-20 animate-fade-in-up"
      >
        <img
          src={coinbaseLogo}
          alt="CryptoBase"
          className="h-8 invert brightness-0"
        />
      </Link>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center font-display animate-fade-in-up stagger-1">
        What kind of account are you creating?
      </h1>

      <div className="w-full max-w-[540px] space-y-4">
        {signupOptions.map((option, idx) => (
          <Link
            key={option.id}
            to={option.path}
            className={`flex items-center gap-6 p-8 rounded-xl border border-gray-80 bg-gray-100 hover:bg-cds-gray-80 transition-all group animate-fade-in-up stagger-${idx + 1}`}
          >
            <div className="w-20 flex justify-center transform group-hover:scale-110 transition-transform">
              {option.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1 font-display">
                {option.title}
              </h3>
              <p className="text-gray-40 text-sm md:text-base font-sans leading-relaxed">
                {option.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
