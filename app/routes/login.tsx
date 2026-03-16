import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Lock, Mail, Eye, EyeOff, LogIn } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for authentication
    console.log("Logging in with:", formData);

    // On success, navigate to the dashboard
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E9EFEC] p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg border border-[#C4DAD2]">
        {/* Logo & Header */}
        <div className="text-center">
          <div className="mx-auto h-16 w-48 bg-[#E9EFEC] border border-dashed border-[#6A9C89] flex items-center justify-center rounded-lg text-xl text-[#16423C] font-bold mb-6">
            your logo
          </div>
          <h2 className="text-2xl font-bold text-[#16423C]">Admin Portal</h2>
          <p className="mt-2 text-sm text-[#6A9C89]">
            Please sign in to your account
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Email Field */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-[#16423C] ml-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-[#6A9C89]" />
                </div>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="block w-full pl-10 pr-3 py-2 border border-[#C4DAD2] rounded-lg focus:ring-2 focus:ring-[#6A9C89] focus:border-transparent outline-none transition-all text-sm"
                  placeholder="admin@example.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <div className="flex items-center justify-between px-1">
                <label className="text-sm font-semibold text-[#16423C]">
                  Password
                </label>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[#6A9C89]" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="block w-full pl-10 pr-10 py-2 border border-[#C4DAD2] rounded-lg focus:ring-2 focus:ring-[#6A9C89] focus:border-transparent outline-none transition-all text-sm"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#6A9C89] hover:text-[#16423C]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 text-[#16423C] focus:ring-[#6A9C89] border-[#C4DAD2] rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-[#16423C]"
            >
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-[#16423C] hover:bg-[#6A9C89] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#16423C] transition-colors"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LogIn className="h-5 w-5 text-[#C4DAD2] group-hover:text-white" />
            </span>
            Sign In
          </button>
        </form>

        <div className="text-center text-xs text-[#6A9C89]">
          &copy; {new Date().getFullYear()} Admin Management System. All rights
          reserved.
        </div>
      </div>
    </div>
  );
}
