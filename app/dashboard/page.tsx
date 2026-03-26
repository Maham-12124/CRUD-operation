import { db } from "@/lib/db";
import TaskForm from "@/components/TaskForm";

export default async function DashboardPage() {
  // Database se tasks lena
  const { rows: tasks } = await db.query('SELECT * FROM tasks ORDER BY id DESC');

  return (
    <div className="min-h-screen bg-[#fdfaf7] text-[#3e2723] p-6 md:p-20 font-sans">
      <div className="max-w-2xl mx-auto space-y-10">
        
        {/* Header Section */}
        <header className="space-y-2 text-center">
          <h1 className="text-5xl font-serif italic tracking-tight">Minimalist Studio</h1>
          <p className="text-[#8d6e63] uppercase tracking-[0.2em] text-xs font-semibold">
            Manage your daily flow with elegance
          </p>
        </header>

        {/* Input Section - Sequence 1 */}
        <section className="bg-white/60 backdrop-blur-md p-8 rounded-[40px] border border-white shadow-sm transition-all hover:shadow-md">
          <TaskForm />
        </section>

        {/* Tasks List Section - Sequence 2 */}
        <section className="space-y-6">
          <h2 className="text-[10px] font-black uppercase tracking-widest text-[#d7ccc8] px-4">Recent Entries</h2>
          
          <div className="grid gap-4">
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <div key={task.id} className="group flex items-center justify-between bg-white p-6 rounded-3xl border border-[#f3ece7] hover:border-[#8d6e63] transition-all duration-500">
                  <div className="space-y-1">
                    <p className="text-lg font-medium opacity-90">{task.title}</p>
                    <div className="flex gap-2">
                      <span className="text-[9px] bg-[#f5f0eb] px-2 py-0.5 rounded-full font-bold">🌿 {task.category}</span>
                    </div>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 text-[#d7ccc8] hover:text-red-400 transition-all text-xl">✕</button>
                </div>
              ))
            ) : (
              <div className="border-2 border-dashed border-[#efe5de] rounded-[40px] p-20 text-center">
                <p className="text-[#c7b2a6] italic font-serif">Your diary is waiting for its first entry...</p>
              </div>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}