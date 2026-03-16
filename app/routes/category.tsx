import React, { useState } from 'react';
import { Plus, Search, ChevronLeft, ChevronRight, Trash2, ArrowUpDown } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  description: string;
  status: boolean;
}

const CategoryTable: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: 'Petra', description: 'Programming', status: true },
    { id: 2, name: 'Petra', description: 'Programming', status: true },
    { id: 3, name: 'Petra', description: 'Programming', status: false },
    { id: 4, name: 'Petra', description: 'Programming', status: true },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans text-gray-700">
      
      
      <div className="flex justify-between items-center mb-6">
        <div className="bg-white px-8 py-2 rounded-sm shadow-sm border border-gray-200">
          <h1 className="font-medium text-lg">Category</h1>
        </div>
        <button className="flex items-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all text-sm">
          <Plus size={16} className="mr-2 border border-white rounded-full p-0.5" />
          Add New category
        </button>
      </div>

  
      <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200">
        
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4">
            <select className="bg-gray-100 border-none rounded-md px-4 py-2 text-sm w-48 focus:ring-1 focus:ring-gray-300">
              <option>No Action</option>
            </select>
            <button className="bg-black text-white px-6 py-2 rounded-md font-bold text-sm uppercase">
              Apply
            </button>
          </div>

          <div className="flex gap-2">
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none">
              <option>ALL</option>
            </select>
            <div className="flex">
              <input 
                type="text" 
                placeholder="Search...." 
                className="border border-gray-300 rounded-l-md px-4 py-2 text-sm focus:outline-none w-64"
              />
              <button className="bg-gray-400 p-2 rounded-r-md text-white px-4">
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-black text-white">
                <th className="py-3 px-4 font-medium text-sm">
                   <div className="flex items-center justify-center gap-2">
                     <ArrowUpDown size={12} className="opacity-70" /> Name
                   </div>
                </th>
                <th className="py-3 px-4 font-medium text-sm border-l border-gray-700">
                   <div className="flex items-center justify-center gap-2">
                     <ArrowUpDown size={12} className="opacity-70" /> Description
                   </div>
                </th>
                <th className="py-3 px-4 font-medium text-sm border-l border-gray-700">
                   <div className="flex items-center justify-center gap-2">
                     <ArrowUpDown size={12} className="opacity-70" /> Status
                   </div>
                </th>
                <th className="py-3 px-4 font-medium text-sm border-l border-gray-700">
                   <div className="flex items-center justify-center gap-2">
                     <ArrowUpDown size={12} className="opacity-70" /> Action
                   </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat, index) => (
                <tr key={cat.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                  <td className="py-4 border-r border-white">{cat.name}</td>
                  <td className="py-4 border-r border-white">{cat.description}</td>
                  <td className="py-4 border-r border-white">
                    
                    <div className="flex justify-center">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={cat.status} className="sr-only peer" readOnly />
                        <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                      </label>
                    </div>
                  </td>
                  <td className="py-4 flex justify-center items-center gap-4 text-red-800">
                    <button className="hover:underline font-medium">edit</button>
                    <button className="text-red-400 hover:text-red-600 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
        <div className="flex justify-between items-center mt-8">
          <div className="flex items-center gap-2 text-sm">
            <span>Show</span>
            <input type="number" defaultValue={10} className="border border-gray-300 w-12 text-center py-1 rounded-sm" />
            <span>Entries</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="text-gray-400 hover:text-black transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="bg-black text-white w-8 h-8 rounded-sm text-sm">1</button>
            <button className="text-gray-400 hover:text-black transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTable;