import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Trash2, 
  ArrowUpDown,
  ChevronLeft,
  ChevronDown
} from 'lucide-react';

interface Category {
  id: number;
  name: string;
  description: string;
  status: boolean;
}

const CategoryPage: React.FC = () => {
  const [view, setView] = useState<'list' | 'add'>('list');
  
  const [idToDelete, setIdToDelete] = useState<number | null>(null);
  
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: 'Petra', description: 'Programming', status: true },
    { id: 2, name: 'Petra', description: 'Programming', status: true },
    { id: 3, name: 'Petra', description: 'Programming', status: false },
    { id: 4, name: 'Petra', description: 'Programming', status: true },
  ]);

  const confirmDelete = () => {
    if (idToDelete !== null) {
      setCategories(prev => prev.filter(cat => cat.id !== idToDelete));
      setIdToDelete(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#C4DAD2] font-sans text-[#6A9C89] p-6 relative">
      
      {idToDelete !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={() => setIdToDelete(null)} 
          />
          
          <div className="relative bg-[#EAEAEA] border-[3px] border-[#0074E0] rounded-lg shadow-2xl p-12 max-w-lg w-full text-center animate-in zoom-in duration-200">
            <p className="text-xl font-medium text-black mb-10">
              Are you sure you want to delete this category ?
            </p>

            <div className="flex justify-center gap-6">
              <button 
                onClick={confirmDelete}
                className="bg-[#C4DAD2] text-white text-lg px-10 py-2 rounded-md hover:bg-gray-800 transition-all font-medium shadow-lg"
              >
                Delete
              </button>
              
              <button 
                onClick={() => setIdToDelete(null)}
                className="bg-white text-black text-lg px-12 py-2 rounded-md border border-gray-200 hover:bg-gray-100 transition-all font-medium shadow-sm"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

    
      {view === 'list' && (
        <div className={`animate-in fade-in duration-500 ${idToDelete !== null ? 'blur-[2px] pointer-events-none' : ''}`}>
          <div className="flex justify-between items-center mb-6">
            <div className="bg-white px-8 py-2 rounded-sm shadow-sm border border-[#E9EFEC]">
              <h1 className="font-medium text-lg">Category</h1>
            </div>

            <button 
              onClick={() => setView('add')}
              className="flex items-center bg-[#16423C] text-white px-4 py-2 rounded-md hover:bg-[#E9EFEC] text-sm transition-all"
            >
              <Plus size={16} className="mr-2 border border-white rounded-full p-0.5" />
              Add New category
            </button>
          </div>

          <div className="bg-[#E9EFEC] p-6 rounded-md shadow-sm border border-[#E9EFEC]">
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-4">
                <select className="bg-[#6A9C89] rounded-md px-4 py-2 text-sm w-48 outline-none text-gray-700">
                  <option>No Action</option>
                </select>
                <button className="bg-[#16423C] text-white px-6 py-2 rounded-md text-sm uppercase">
                  Apply
                </button>
              </div>

              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Search...." 
                  className="border border-[#C4DAD2] rounded-l-md px-4 py-2 text-sm w-64 outline-none focus:border-gray-400 text-gray-800"
                />
                <button className="bg-[#6A9C89] p-2 rounded-r-md text-white px-4">
                  <Search size={18} />
                </button>
              </div>
            </div>

            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="bg-[#16423C] text-white">
                  <th className="py-3 font-medium">
                    <div className="flex justify-center gap-2 items-center">
                      <ArrowUpDown size={12} /> Name
                    </div>
                  </th>
                  <th className="font-medium">Description</th>
                  <th className="font-medium">Status</th>
                  <th className="font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {categories.map((cat, index) => (
                  <tr key={cat.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white border-y border-gray-100'}>
                    <td className="py-4">{cat.name}</td>
                    <td>{cat.description}</td>
                    <td>
                      <span className={cat.status ? 'text-green-600 font-medium' : 'text-red-500 font-medium'}>
                        {cat.status ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="flex justify-center items-center gap-4 py-4">
                      <button className="text-red-800 hover:underline text-sm uppercase font-bold">edit</button>
                      
                      <Trash2 
                        size={18} 
                        className="text-red-500 cursor-pointer hover:text-red-700 transition-colors" 
                        onClick={() => setIdToDelete(cat.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* --- View 2: Add Form --- */}
      {view === 'add' && (
        <div className="animate-in slide-in-from-right duration-500 max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="bg-[#E9EFEC] px-8 py-2 rounded-sm shadow-sm border border-[#C4DAD2]">
              <h1 className="font-medium text-lg text-gray-800">Add New Category</h1>
            </div>

            <button 
              onClick={() => setView('list')}
              className="flex items-center bg-[#16423C] text-white px-5 py-2 rounded-md hover:bg-[#E9EFEC] text-sm uppercase tracking-wide transition-all"
            >
              <ChevronLeft size={18} className="mr-1" />
              Back
            </button>
          </div>

          <div className="bg-white rounded-md shadow-md border border-gray-100 p-10">
            <form className="space-y-8 text-gray-800">
              <div className="space-y-2">
                <label className="block text-sm font-semibold">Name <span className="text-red-600 font-bold">*</span></label>
                <input type="text" placeholder="Name" className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:border-gray-500 outline-none" />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold">Image <span className="text-red-600 font-bold">*</span></label>
                <div className="flex">
                  <input type="text" placeholder="Choose Image" className="flex-1 border border-gray-300 border-r-0 rounded-l-md px-4 py-3 text-sm bg-white" readOnly />
                  <button type="button" className="bg-[#16423C] hover:bg-[#6A9C89] text-white px-8 rounded-r-md text-sm font-medium transition-colors">Browser</button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold">Status <span className="text-red-600 font-bold">*</span></label>
                <div className="relative">
                  <select className="w-full border border-[#C4DAD2] rounded-md px-4 py-3 text-sm appearance-none outline-none focus:border-[#16423C] bg-[#E9EFEC]">
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold">Description <span className="text-red-600 font-bold">*</span></label>
                <textarea rows={6} placeholder="Description" className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:border-gray-500 outline-none" />
              </div>

              <div className="flex justify-end pt-4">
                <button type="button" onClick={() => setView('list')} className="bg-[#16423C] text-white px-12 py-3 rounded-md text-sm font-bold hover:bg-[#6A9C89] shadow-lg transition-transform active:scale-95">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;