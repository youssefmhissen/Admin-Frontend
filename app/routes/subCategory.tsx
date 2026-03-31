import React, { useState } from 'react';
import { Search, Plus, ChevronLeft, ChevronDown, Trash2 } from 'lucide-react';

interface CategoryData {
  id: number;
  name: string;
  description: string;
  category: string;
  status: boolean;
}

const CategoryPage: React.FC = () => {
  const [view, setView] = useState<'list' | 'add'>('list');
  
  // حالة التحكم في ظهور المودال وتخزين الـ ID المطلوب حذفه
  const [idToDelete, setIdToDelete] = useState<number | null>(null);

  const [data, setData] = useState<CategoryData[]>([
    { id: 1, name: 'Petra', description: '20%', category: 'Programing', status: true },
    { id: 2, name: 'Petra', description: '20%', category: 'Programing', status: true },
    { id: 3, name: 'Petra', description: '20%', category: 'Programing', status: true },
    { id: 4, name: 'Petra', description: '20%', category: 'Programing', status: true },
  ]);

  const toggleStatus = (id: number) => {
    setData(prev =>
      prev.map(item =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  const confirmDelete = () => {
    if (idToDelete !== null) {
      setData(prev => prev.filter(item => item.id !== idToDelete));
      setIdToDelete(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#C4DAD2] font-sans text-[#6A9C89] p-6 relative">

      {/* --- DELETE MODAL WITH BLUR --- */}
      {idToDelete !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={() => setIdToDelete(null)} 
          />
          
          <div className="relative bg-[#EAEAEA] border-[3px] border-[#0074E0] rounded-lg shadow-2xl p-12 max-w-lg w-full text-center animate-in zoom-in duration-200">
            <p className="text-xl font-medium text-black mb-10">
              Are you sure you want to delete this  Sub Category ?
            </p>

            <div className="flex justify-center gap-6">
              <button 
                onClick={confirmDelete}
                className="bg-[#16423C] text-white text-lg px-10 py-2 rounded-md hover:bg-[#E9EFEC] transition-all font-medium shadow-lg"
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
        <div className={idToDelete !== null ? 'blur-[2px] pointer-events-none' : ''}>
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Sub Category"
              className="bg-[#E9EFEC] border border-[#C4DAD2] px-4 py-2 rounded w-64 text-gray-800"
            />

            <button
              onClick={() => setView('add')}
              className="bg-[#16423C] text-white px-4 py-2 rounded flex items-center gap-2 text-sm hover:bg-[#E9EFEC] transition-colors"
            >
              <Plus size={16} />
              Add New Sub category
            </button>
          </div>

          <div className="bg-[#E9EFEC] border border-[#C4DAD2] rounded shadow-sm overflow-hidden">
            <div className="flex justify-between items-center p-4">
              <div className="flex gap-2">
                <select className="border px-3 py-2 rounded bg-[#E9EFEC] text-sm text-gray-700 outline-none">
                  <option>No Action</option>
                </select>
                <button className="bg-[#16423C] text-white px-4 py-2 rounded text-sm hover:bg-[#E9EFEC] transition-colors">Apply</button>
              </div>

              <div className="flex items-center gap-2">
                <select className="border px-3 py-2 rounded bg-[#E9EFEC] text-sm text-gray-700 outline-none">
                  <option>ALL</option>
                </select>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border px-3 py-2 rounded-l text-sm bg-[#E9EFEC] text-gray-800 outline-none"
                  />
                  <button className="bg-[#16423C] text-white px-3 rounded-r hover:bg-[#E9EFEC] transition-colors">
                    <Search size={16} />
                  </button>
                </div>
              </div>
            </div>

            <table className="w-full text-sm text-center">
              <thead className="bg-[#16423C] text-white">
                <tr>
                  <th className="py-3">Name</th>
                  <th>Description</th>
                  <th>Select Category</th>
                  <th>Status</th>
                  <th className="px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="border-b bg-[#E9EFEC] hover:bg-[#D1D8D5] transition-colors">
                    <td className="py-4 text-gray-800">{item.name}</td>
                    <td className="text-gray-600">{item.description}</td>
                    <td className="text-gray-800">{item.category}</td>
                    <td>
                      <button
                        onClick={() => toggleStatus(item.id)}
                        className={`w-10 h-5 flex items-center rounded-full p-1 mx-auto transition-all ${item.status ? 'bg-[#16423C]' : 'bg-gray-300'}`}
                      >
                        <div className={`bg-[#E9EFEC] w-3 h-3 rounded-full transform transition ${item.status ? 'translate-x-5' : ''}`} />
                      </button>
                    </td>
                    <td>
                      <button 
                        onClick={() => setIdToDelete(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors p-1"
                        title="Delete category"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between items-center p-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                Show
                <select className="border px-2 py-1 rounded bg-[#E9EFEC] outline-none">
                  <option>10</option>
                </select>
                Entries
              </div>
              <div className="flex items-center gap-2">
                <button className="px-2 hover:text-black">{'<'}</button>
                <span className="bg-[#16423C] text-white px-3 py-1 rounded">1</span>
                <button className="px-2 hover:text-black">{'>'}</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- ADD VIEW --- */}
      {view === 'add' && (
        <div className="animate-in slide-in-from-right duration-500 max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="bg-[#6A9C89] border border-gray-200 px-8 py-2 rounded shadow-sm">
              <span className="text-gray-800 font-medium text-lg">Add New Sub Category</span>
            </div>
            <button
              onClick={() => setView('list')}
              className="bg-[#16423C] text-white px-5 py-2 rounded flex items-center gap-2 hover:bg-[#E9EFEC] transition-all"
            >
              <ChevronLeft size={18} />
              Back
            </button>
          </div>

          <div className="bg-[#E9EFEC] rounded-md shadow-md border border-gray-100 p-10 text-gray-800">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-semibold block mb-1">Name <span className="text-red-600">*</span></label>
                <input type="text" placeholder="Sub Category Name" className="w-full border px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-black" />
              </div>
              <div>
                <label className="text-sm font-semibold block mb-1">Category <span className="text-red-600">*</span></label>
                <div className="relative">
                  <select className="w-full border px-4 py-3 rounded-md appearance-none outline-none focus:ring-2 focus:ring-black">
                    <option>Select Category</option>
                    <option>Programming</option>
                    <option>Design</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold block mb-1">Description <span className="text-red-600">*</span></label>
                <textarea rows={4} placeholder="Write description here..." className="w-full border px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-black" />
              </div>
              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setView('list')}
                  className="bg-[#16423C] text-white px-12 py-3 rounded-md font-semibold hover:bg-[#C4DAD2] transition-all"
                >
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