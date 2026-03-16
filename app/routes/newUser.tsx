import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { ChevronLeft, Save } from "lucide-react";

export default function NewUser() {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we are editing an existing user
  const editingUser = location.state?.userData;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [formData, setFormData] = useState({
    name: editingUser?.name || "",
    username: editingUser?.username || "",
    userType: editingUser?.userType || "",
    email: editingUser?.email || "",
    password: editingUser?.password || "",
    confirmPassword: editingUser?.confirmPassword || "",
    contactNumber: editingUser?.contact || "",
    status: editingUser?.status?.toString() || "1",
    address: editingUser?.address || "",
    description: editingUser?.description || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingUser) {
      console.log("Updating existing user:", formData);
    } else {
      console.log("Creating new user:", formData);
    }
    navigate("/system-users/users-list");
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            to="/system-users/users-list"
            className="p-2 bg-white rounded-full border border-[#C4DAD2] text-[#16423C] hover:bg-[#E9EFEC] transition-colors"
          >
            <ChevronLeft size={24} />
          </Link>
          <h1 className="text-xl font-semibold text-[#16423C]">
            {editingUser ? `Edit User: ${editingUser.name}` : "Add New User"}
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-sm border border-[#C4DAD2] overflow-hidden"
      >
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#16423C]">Name *</label>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#C4DAD2] rounded-md focus:ring-2 focus:ring-[#6A9C89] outline-none"
              placeholder="Enter full name"
            />
          </div>

          {/* Username */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#16423C]">
              Username *
            </label>
            <input
              required
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#C4DAD2] rounded-md focus:ring-2 focus:ring-[#6A9C89] outline-none"
              placeholder="Enter username"
            />
          </div>

          {/* User Type */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#16423C]">
              User Type *
            </label>
            <select
              required
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#C4DAD2] rounded-md focus:ring-2 focus:ring-[#6A9C89] outline-none bg-white"
            >
              <option value="">Select User Type</option>
              <option value="adminUser">Admin user</option>
            </select>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#16423C]">Email *</label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#C4DAD2] rounded-md focus:ring-2 focus:ring-[#6A9C89] outline-none"
              placeholder="email@example.com"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#16423C]">
              Password *
            </label>
            <input
              required
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#C4DAD2] rounded-md focus:ring-2 focus:ring-[#6A9C89] outline-none"
              placeholder="********"
            />
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#16423C]">
              Confirm Password *
            </label>
            <input
              required
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#C4DAD2] rounded-md focus:ring-2 focus:ring-[#6A9C89] outline-none"
              placeholder="********"
            />
          </div>

          {/* Contact Number */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#16423C]">
              Contact Number *
            </label>
            <input
              required
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#C4DAD2] rounded-md focus:ring-2 focus:ring-[#6A9C89] outline-none"
              placeholder="Enter contact number"
            />
          </div>

          {/* Status Toggle */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#16423C]">Status *</label>
            <div className="flex items-center gap-3 h-10">
              <span className="text-sm text-gray-500">Inactive</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={formData.status === "1"}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      status: e.target.checked ? "1" : "0",
                    }))
                  }
                />
                <div className="w-11 h-6 bg-[#C4DAD2] rounded-full peer peer-checked:bg-[#16423C] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
              </label>
              <span className="text-sm text-gray-500">Active</span>
            </div>
          </div>

          {/* Address (Optional) */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#16423C]">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#C4DAD2] rounded-md focus:ring-2 focus:ring-[#6A9C89] outline-none transition-all"
              placeholder="Enter physical address (optional)"
            />
          </div>

          {/* Description (Optional)  */}
          <div className="space-y-2 lg:col-span-3 md:col-span-2">
            <label className="text-sm font-bold text-[#16423C]">
              Description
            </label>
            <textarea
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#C4DAD2] rounded-md focus:ring-2 focus:ring-[#6A9C89] outline-none resize-none"
              placeholder="Enter additional details (optional)"
            />
          </div>
        </div>

        {/* Form Actions */}
        <div className="bg-white px-6 py-4 flex justify-end gap-3 ">
          <button
            type="submit"
            className="flex items-center gap-2 bg-[#16423C] text-white px-8 py-2 rounded-md hover:bg-[#6A9C89] transition-colors font-medium shadow-sm"
          >
            <Save size={18} />
            <span>{editingUser ? "Update User" : "Save User"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
