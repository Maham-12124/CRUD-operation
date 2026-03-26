import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Aesthetic CRUD",
  description: "Built with Next.js and PostgreSQL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">
        {/* Aap yahan Navbar bhi add kar sakti hain jo har page pe dikhay ga */}
        {/* <nav className="p-5 bg-white border-b border-slate-200">
          <div className="max-w-2xl mx-auto font-bold text-xl text-indigo-600">
            TaskApp 🚀
          </div>
        </nav> */}
        
        {children}
      </body>
    </html>
  );
}