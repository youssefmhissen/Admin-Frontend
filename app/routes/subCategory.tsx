import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react'; 
const AddCategory: React.FC = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    image: null as File | null,
    status: 'Active',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      
      <div className="flex justify-between items-center mb-6">
        <div className="bg-white px-6 py-2 rounded-sm shadow-sm border border-gray-200">
          <h1 className="text-gray-800 font-medium">Add New Category</h1>
        </div>
        <button className="flex items-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
          <ChevronLeft size={16} className="mr-1" />
          <span className="text-sm uppercase tracking-wider">Back</span>
        </button>
      </div>

      
      <div className="bg-white p-8 rounded-md shadow-sm border border-gray-200 max-w-7xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Image <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="Choose Image"
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md bg-white placeholder-gray-400 focus:outline-none"
              />
              <label className="bg-gray-400 text-white px-6 py-2 rounded-r-md cursor-pointer hover:bg-gray-500 transition-colors flex items-center">
                Browser
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => setFormData({ ...formData, image: e.target.files?.[0] || null })}
                />
              </label>
            </div>
          </div>

          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Status <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white text-gray-600"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

    
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Description"
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400 resize-none"
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            ></textarea>
          </div>

    
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="bg-black text-white px-10 py-2 rounded-md font-bold hover:bg-gray-800 transition-all shadow-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;