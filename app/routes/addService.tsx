
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// export default function AddService() {
//   const navigate = useNavigate(); // 2. تعريف الدالة

//   const [form, setForm] = useState({
//     serviceName: "",
//     category: "",
//     subCategory: "",
//     pricingType: "",
//     price: "",
//     commissionType: "",
//     commissionValue: "",
//     discount: "",
//     status: "Active",
//     description: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(form);
//   };

//   return (
//     <div className="min-h-screen bg-[#6A9C89] p-6 text-black">
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-xl font-medium text-black-800 rounded-md">
//           Add New Service
//         </h1>
//         {/* زر الـ Back العلوي */}
//         <button 
//           onClick={() => navigate("/service-management/services-list")}
//           className="bg-[#16423C] text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
//         >
//           &lt; BACK
//         </button>
//       </div>

//       <form onSubmit={handleSubmit} className="bg-[#E9EFEC] p-6 rounded-xl shadow-md">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Service Name */}
//           <div>
//             <label className="block mb-1 font-medium text-black">
//               Service Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name="serviceName"
//               placeholder="Service Name"
//               className="w-full border rounded-md px-3 py-2 text-black"
//               onChange={handleChange}
//             />
//           </div>

//           {/* Select Category */}
//           <div>
//             <label className="block mb-1 font-medium text-black">
//               Select Category <span className="text-red-500">*</span>
//             </label>
//             <select
//               name="category"
//               className="w-full border rounded-md px-3 py-2 text-black"
//               onChange={handleChange}
//             >
//               <option value="">Select Category</option>
//             </select>
//           </div>

//           {/* Select Sub-Category */}
//           <div>
//             <label className="block mb-1 font-medium text-black">
//               Select Sub-Category <span className="text-red-500">*</span>
//             </label>
//             <select
//               name="subCategory"
//               className="w-full border rounded-md px-3 py-2 text-black"
//               onChange={handleChange}
//             >
//               <option value="">Select Sub-Category</option>
//             </select>
//           </div>

//           {/* Pricing Type */}
//           <div>
//             <label className="block mb-1 font-medium text-black">
//               Pricing Type <span className="text-red-500">*</span>
//             </label>
//             <select
//               name="pricingType"
//               className="w-full border rounded-md px-3 py-2 text-black"
//               onChange={handleChange}
//             >
//               <option value="">Pricing Type</option>
//             </select>
//           </div>

//           {/* Price */}
//           <div>
//             <label className="block mb-1 font-medium text-black">
//               Price <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="number"
//               name="price"
//               placeholder="Price"
//               className="w-full border rounded-md px-3 py-2 text-black"
//               onChange={handleChange}
//             />
//           </div>

//           {/* Commission Type */}
//           <div>
//             <label className="block mb-1 font-medium text-black">
//               Commission type <span className="text-red-500">*</span>
//             </label>
//             <select
//               name="commissionType"
//               className="w-full border rounded-md px-3 py-2 text-black"
//               onChange={handleChange}
//             >
//               <option value="">Commission type</option>
//             </select>
//           </div>

//           {/* Commission Value */}
//           <div>
//             <label className="block mb-1 font-medium text-black">
//               Commission value <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="number"
//               name="commissionValue"
//               placeholder="Commission value"
//               className="w-full border rounded-md px-3 py-2 text-black"
//               onChange={handleChange}
//             />
//           </div>

//           {/* Discount */}
//           <div>
//             <label className="block mb-1 font-medium text-black">
//               Discount (%)
//             </label>
//             <input
//               type="number"
//               name="discount"
//               placeholder="Discount (%)"
//               className="w-full border rounded-md px-3 py-2 text-black"
//               onChange={handleChange}
//             />
//           </div>

//           {/* Status */}
//           <div>
//             <label className="block mb-1 font-medium text-black">
//               Status <span className="text-red-500">*</span>
//             </label>
//             <select
//               name="status"
//               className="w-full border rounded-md px-3 py-2 text-black"
//               value={form.status}
//               onChange={handleChange}
//             >
//               <option value="Active">Active</option>
//               <option value="Inactive">Inactive</option>
//             </select>
//           </div>
//         </div>

      
//         <div className="mt-6">
//           <label className="block mb-1 font-medium text-black">Description</label>
//           <textarea
//             name="description"
//             placeholder="Description"
//             rows={4}
//             className="w-full border rounded-md px-3 py-2 text-black"
//             onChange={handleChange}
//           />
//         </div>

        
//         <div className="flex justify-end gap-3 mt-6">
          
//           <button
//             type="button" 
//             onClick={() => navigate("/service-management/services-list")}
//             className="px-5 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//           >
//             Back
//           </button>

          
//           <button
//             type="submit"
//             className="bg-[#16423C] text-white px-6 py-2 rounded-md hover:bg-[#15392d] transition-colors"
//           >
//             Save
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
import { useState } from "react";

export default function AddService() {

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen bg-[#6A9C89] p-6 text-black">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-medium">
          Add New Service
        </h1>

        {/* Back Button Top */}
        <button 
          onClick={() => window.history.back()}
          className="bg-[#16423C] text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          &lt; BACK
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-[#E9EFEC] p-6 rounded-xl shadow-md">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div>
            <label className="block mb-1 font-medium">
              Service Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="serviceName"
              placeholder="Service Name"
              className="w-full border rounded-md px-3 py-2"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Select Category <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              className="w-full border rounded-md px-3 py-2"
              onChange={handleChange}
            >
              <option value="">Select Category</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Select Sub-Category <span className="text-red-500">*</span>
            </label>
            <select
              name="subCategory"
              className="w-full border rounded-md px-3 py-2"
              onChange={handleChange}
            >
              <option value="">Select Sub-Category</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Pricing Type <span className="text-red-500">*</span>
            </label>
            <select
              name="pricingType"
              className="w-full border rounded-md px-3 py-2"
              onChange={handleChange}
            >
              <option value="">Pricing Type</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Price <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="w-full border rounded-md px-3 py-2"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Commission type <span className="text-red-500">*</span>
            </label>
            <select
              name="commissionType"
              className="w-full border rounded-md px-3 py-2"
              onChange={handleChange}
            >
              <option value="">Commission type</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Commission value <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="commissionValue"
              placeholder="Commission value"
              className="w-full border rounded-md px-3 py-2"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Discount (%)
            </label>
            <input
              type="number"
              name="discount"
              placeholder="Discount (%)"
              className="w-full border rounded-md px-3 py-2"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Status <span className="text-red-500">*</span>
            </label>
            <select
              name="status"
              className="w-full border rounded-md px-3 py-2"
              value={form.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            placeholder="Description"
            rows={4}
            className="w-full border rounded-md px-3 py-2"
            onChange={handleChange}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          
          <button
            type="button"
            onClick={() => window.history.back()}
            className="px-5 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Back
          </button>

          <button
            type="submit"
            className="bg-[#16423C] text-white px-6 py-2 rounded-md hover:bg-[#15392d] transition-colors"
          >
            Save
          </button>
        </div>

      </form>
    </div>
  );
}