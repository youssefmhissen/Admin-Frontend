//   );
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // إضافة الهوك الخاص بالتنقل
import { 
  Search, 
  Plus, 
  Trash2, 
  ChevronLeft, 
  ArrowUpDown, 
  ChevronDown 
} from 'lucide-react';

// 1. تعريف واجهة البيانات
interface ServiceItem {
  id: number;
  name: string;
  category: string;
  subCategory: string;
  maxPrice: string;
  discount: string;
  commissionType: string;
  commissionValue: string;
  status: boolean;
}

const ServiceManagement: React.FC = () => {
  const navigate = useNavigate(); // تعريف navigate لاستخدامه في الزرار الجديد
  
  // الحالة للتحكم في أي واجهة تظهر
  const [view, setView] = useState<'list' | 'add'>('list');
  
  // حالات المودال والبيانات
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);

  // حالة الفورم
  const [form, setForm] = useState({
    serviceName: "",
    category: "",
    subCategory: "",
    pricingType: "",
    price: "",
    commissionType: "",
    commissionValue: "",
    discount: "",
    status: "Active",
    description: "",
  });

  // بيانات تجريبية للقائمة
  const [services, setServices] = useState<ServiceItem[]>(new Array(4).fill(null).map((_, i) => ({
    id: i,
    name: "Petra",
    category: "Programming",
    subCategory: "General",
    maxPrice: "100",
    discount: "10%",
    commissionType: "Value",
    commissionValue: "10",
    status: true,
  })));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const newService: ServiceItem = {
        id: Date.now(),
        name: form.serviceName,
        category: form.category,
        subCategory: form.subCategory,
        maxPrice: form.price,
        discount: form.discount,
        commissionType: form.commissionType,
        commissionValue: form.commissionValue,
        status: form.status === "Active",
    };
    setServices([newService, ...services]);
    setView('list');
    setForm({
        serviceName: "", category: "", subCategory: "", pricingType: "",
        price: "", commissionType: "", commissionValue: "", discount: "",
        status: "Active", description: ""
    });
  };

  const openDeleteModal = (id: number) => {
    setSelectedServiceId(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setServices(services.filter(s => s.id !== selectedServiceId));
    setIsDeleteModalOpen(false);
    setSelectedServiceId(null);
  };

  return (
    <div className="p-8 bg-[#f8f9fa] min-h-screen font-sans text-gray-800">
      
      {/* ---------------- View 1: Service List (القائمة) ---------------- */}
      {view === 'list' && (
        <div className="animate-in fade-in duration-500">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-xl font-semibold text-gray-800">Service Management</h1>
            
            {/* الزرار الجديد الذي قمت بإرساله */}
            <button
              onClick={() => navigate("/service-management/add-service")}
              className="bg-[#1a4a3a] hover:bg-[#15392d] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Add Service
            </button>
          </div>

          <div className="bg-[#E9EFEC] rounded-xl shadow-sm border border-gray-200 p-6">
            {/* Toolbar: Search and Filter */}
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
               <div className="flex gap-4">
                 <div className="relative">
                   <select className="appearance-none border border-gray-300 rounded bg-[#E9EFEC] px-4 py-2 pr-10 min-w-[180px] focus:outline-none text-sm">
                     <option>No Action</option>
                   </select>
                   <ChevronDown className="absolute right-3 top-2.5 text-gray-500" size={16} />
                 </div>
                 <button className="bg-[#16423C] text-white px-8 py-2 rounded font-bold hover:opacity-90 uppercase text-[10px] tracking-widest">
                   Apply
                 </button>
               </div>
               <div className="flex items-center">
                 <select className="border border-gray-300 rounded-l px-3 py-2 bg-[#E9EFEC] outline-none text-sm border-r-0">
                   <option>ALL</option>
                 </select>
                 <div className="relative">
                    <input type="text" placeholder="Search...." className="border border-[#C4DAD2] px-4 py-2 w-64 focus:outline-none" />
                 </div>
                 <button className="bg-[#16423C] p-2 border border-gray-300 rounded-r text-gray-700 hover:bg-[#E9EFEC]">
                   <Search size={20} />
                 </button>
               </div>
            </div>

            <div className="overflow-x-auto rounded-lg border border-[#C4DAD2]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#16423C] text-white">
                    <HeaderCell label="Name" />
                    <HeaderCell label="Category" />
                    <HeaderCell label="Sub Category" />
                    <HeaderCell label="Max Price" />
                    <HeaderCell label="Discount (%)" />
                    <HeaderCell label="Commission type" />
                    <HeaderCell label="Commission value" />
                    <HeaderCell label="Status" />
                    <HeaderCell label="Action" />
                  </tr>
                </thead>
                <tbody>
                  {services.map((service) => (
                    <tr key={service.id} className="border-b border-[#C4DAD2] hover:bg-[#E9EFEC] transition-colors">
                      <DataCell value={service.name} />
                      <DataCell value={service.category} />
                      <DataCell value={service.subCategory} />
                      <DataCell value={service.maxPrice} />
                      <DataCell value={service.discount} center />
                      <DataCell value={service.commissionType} />
                      <DataCell value={service.commissionValue} />
                      <td className="p-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${service.status ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {service.status ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-center gap-3">
                          <button className="text-red-700 font-bold hover:underline uppercase text-[10px]">edit</button>
                          <Trash2 
                            size={16} 
                            className="text-red-700 cursor-pointer hover:scale-110 transition-transform" 
                            onClick={() => openDeleteModal(service.id)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- View 2: Add New Service (الفورم) ---------------- */}
      {view === 'add' && (
        <div className="max-w-7xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold text-[#16423C]">Add New Service</h1>
            <button 
              onClick={() => setView('list')} 
              className="bg-[#16423C] text-white px-4 py-2 rounded flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:bg-[#E9EFEC] transition-all"
            >
              <ChevronLeft size={16} /> Back
            </button>
          </div>

          <form onSubmit={handleSave} className="bg-[#E9EFEC] p-10 rounded-xl shadow-sm border border-[#C4DAD2]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
              <FormInput label="Service Name" name="serviceName" placeholder="Service Name" value={form.serviceName} onChange={handleInputChange} required />
              <FormSelect label="Select Category" name="category" value={form.category} onChange={handleInputChange} options={["Programming", "Design", "Marketing"]} placeholder="Select Category" required />
              <FormSelect label="Select Sub-Category" name="subCategory" value={form.subCategory} onChange={handleInputChange} options={["Web", "Mobile", "UI/UX"]} placeholder="Select Sub-Category" required />
              <FormSelect label="Pricing Type" name="pricingType" value={form.pricingType} onChange={handleInputChange} options={["Fixed", "Variable"]} placeholder="Pricing Type" required />
              <FormInput label="Price" name="price" placeholder="Price" value={form.price} onChange={handleInputChange} required />
              <FormSelect label="Commission type" name="commissionType" value={form.commissionType} onChange={handleInputChange} options={["Percentage", "Fixed Value"]} placeholder="Commission type" required />
              <FormInput label="Commission value" name="commissionValue" placeholder="Commission value" value={form.commissionValue} onChange={handleInputChange} required />
              <FormInput label="Discount (%)" name="discount" placeholder="Discount (%)" value={form.discount} onChange={handleInputChange} />
              <FormSelect label="Status" name="status" value={form.status} onChange={handleInputChange} options={["Active", "Inactive"]} required />
              <div className="md:col-span-3">
                <label className="block text-sm font-semibold mb-2 text-gray-700">Description</label>
                <textarea 
                  name="description" placeholder="Description" value={form.description} onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:ring-2 focus:ring-black/5 focus:border-black outline-none transition-all resize-none text-sm"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end mt-10">
              <button type="submit" className="bg-[#16423C] text-white px-10 py-2.5 rounded font-bold uppercase text-xs tracking-widest hover:bg-[#E9EFEC] shadow-lg active:scale-95 transition-all">
                Save
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ---------------- Delete Modal (مودال الحذف) ---------------- */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsDeleteModalOpen(false)}></div>
          <div className="relative bg-[#E9EFEC] rounded-2xl shadow-2xl w-full max-w-sm p-8 text-center animate-in zoom-in-95 duration-200">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Are you sure you want to</h2>
            <h2 className="text-xl font-bold text-gray-900 mb-8">delete this service?</h2>
            <div className="flex justify-center gap-4">
              <button onClick={confirmDelete} className="bg-[#16423C] text-white px-8 py-2 rounded-lg font-bold min-w-[100px] hover:bg-[#E9EFEC] transition-all">Delete</button>
              <button onClick={() => setIsDeleteModalOpen(false)} className="bg-white text-black px-8 py-2 rounded-lg font-bold min-w-[100px] border border-gray-300 hover:bg-gray-50 transition-all">No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- المكونات المساعدة (Sub-components) ---
const FormInput = ({ label, name, placeholder, value, onChange, required }: any) => (
  <div>
    <label className="block text-sm font-semibold mb-2 text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input 
      type="text" name={name} placeholder={placeholder} value={value} onChange={onChange} 
      className="w-full border border-gray-300 rounded-lg p-2.5 focus:border-black outline-none transition-all text-sm"
    />
  </div>
);

const FormSelect = ({ label, name, value, onChange, options, placeholder, required }: any) => (
  <div>
    <label className="block text-sm font-semibold mb-2 text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <select 
        name={name} value={value} onChange={onChange} 
        className="w-full appearance-none border border-gray-300 rounded-lg p-2.5 focus:border-black outline-none text-sm bg-transparent pr-10"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={16} />
    </div>
  </div>
);

const HeaderCell = ({ label }: { label: string }) => (
  <th className="p-4 font-bold text-[10px] whitespace-nowrap uppercase tracking-widest border-r border-white/10 last:border-r-0">
    <div className="flex items-center gap-2">
      <ArrowUpDown size={12} className="opacity-50" />
      {label}
    </div>
  </th>
);

const DataCell = ({ value, center }: { value: string; center?: boolean }) => (
  <td className={`p-4 text-sm text-gray-600 border-r border-gray-50 last:border-r-0 ${center ? 'text-center' : ''}`}>
    {value || "—"}
  </td>
);

export default ServiceManagement;