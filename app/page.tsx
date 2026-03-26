// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-white to-slate-100">
//       <div className="text-center">
//         <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">
//           Welcome to My <span className="text-indigo-600">CRUD</span>
//         </h1>
//         <p className="text-slate-500 text-lg mb-8 max-w-md mx-auto">
//           Week 6-8 Practice: Next.js App Router, Server Actions, and PostgreSQL.
//         </p>
        
//         {/* Button to go to Dashboard */}
//         <Link 
//           href="/dashboard" 
//           className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold shadow-xl transition-all hover:scale-105 active:scale-95"
//         >
//           Go to Dashboard →
//         </Link>
//       </div>
//     </main>
//   );
// }

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfaf7] flex flex-col items-center justify-center p-6 font-sans">
      {/* Top Logo/Brand */}
      {/* <div className="absolute top-10 flex items-center gap-2">
        <span className="text-xl font-bold tracking-tighter text-[#3e2723]">TaskApp 🚀</span>
      </div> */}

      <div className="max-w-2xl text-center space-y-8">
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-serif italic text-[#3e2723] tracking-tight">
            Welcome to My <span className="text-[#8d6e63]">CRUD</span>
          </h1>
          <p className="text-[#a1887f] uppercase tracking-[0.3em] text-xs font-bold">
            Week 6-8 Practice: Next.js App Router & PostgreSQL
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-6">
          <Link 
            href="/dashboard" 
            className="group relative inline-flex items-center gap-3 bg-[#3e2723] text-[#fdfaf7] px-10 py-4 rounded-full text-lg font-medium hover:bg-[#5d4037] transition-all duration-300 shadow-xl shadow-brown-200/20"
          >
            Go to Dashboard
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 text-[10px] text-[#d7ccc8] uppercase tracking-widest font-semibold">
        Designed with Elegance • 2026
      </div>
    </main>
  );
}