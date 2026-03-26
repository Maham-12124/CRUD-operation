// export default function TaskForm() {
//   return (
//     <form className="flex flex-col gap-6">
//       <input 
//         type="text" 
//         placeholder="Enter your task or thought..." 
//         className="w-full bg-transparent border-b border-[#efe5de] py-3 outline-none focus:border-[#3e2723] transition-colors text-xl font-serif italic"
//       />
      
//       <div className="flex gap-4">
//         <select className="flex-1 bg-[#f9f5f2] p-3 rounded-2xl text-sm outline-none border border-transparent focus:border-[#efe5de]">
//           <option>🌿 Personal</option>
//           <option>💼 Work</option>
//         </select>
        
//         <button className="bg-[#3e2723] text-[#fdfaf7] px-10 py-3 rounded-2xl font-bold hover:bg-[#5d4037] transition-all shadow-lg shadow-brown-200/20">
//           Save Task
//         </button>
//       </div>
//     </form>
//   );
// }

import { addTask } from "@/actions/taskActions";

export default function TaskForm() {
  return (
    // Sirf yahan action={addTask} aur inputs mein name="" add karna hai
    <form action={addTask} className="flex flex-col gap-6">
      <input 
        name="title" // Ye name zaroori hai
        type="text" 
        placeholder="Enter your task or thought..." 
        className="w-full bg-transparent border-b border-[#efe5de] py-3 outline-none focus:border-[#3e2723] transition-colors text-xl font-serif italic"
        required
      />
      
      <div className="flex gap-4">
        <select name="category" className="flex-1 bg-[#f9f5f2] p-3 rounded-2xl text-sm outline-none">
          <option value="Personal">🌿 Personal</option>
          <option value="Work">💼 Work</option>
        </select>
        
        <button type="submit" className="bg-[#3e2723] text-[#fdfaf7] px-10 py-3 rounded-2xl font-bold">
          Save Task
        </button>
      </div>
    </form>
  );
}