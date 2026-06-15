import { BookOpen, CheckSquare, FileCheck, Home, Menu, MessageSquare, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { id: 'home', icon: Home, label: 'Overview' },
  { id: 'projects', icon: BookOpen, label: 'Assignments' },
  { id: 'evidence', icon: FileCheck, label: 'Evidence' },
  { id: 'rubric', icon: CheckSquare, label: 'Rubric' },
  { id: 'summary', icon: MessageSquare, label: 'Reflection' },
];

export default function Sidebar({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen }) {
  const { student } = portfolioData;
  const selectTab = (id) => {
    setActiveTab(id);
    setIsMobileOpen(false);
  };

  return (
    <>
      <header className="portfolio-mobile-header sticky top-0 z-[60] flex h-16 items-center justify-between border-b border-border-light bg-ivory/95 px-5 backdrop-blur md:hidden">
        <div>
          <p className="font-display text-base font-semibold">{student.name}</p>
          <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-muted-dark">Marketing & Communication</p>
        </div>
        <button type="button" aria-label={isMobileOpen ? 'Đóng menu' : 'Mở menu'} aria-expanded={isMobileOpen} onClick={() => setIsMobileOpen(!isMobileOpen)} className="icon-button-dark">
          {isMobileOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </header>

      <aside className={`portfolio-sidebar fixed inset-y-0 left-0 z-50 flex w-[min(280px,88vw)] flex-col border-r border-white/10 bg-obsidian text-white shadow-2xl transition-transform duration-200 md:w-sidebar md:translate-x-0 md:shadow-none ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="border-b border-white/10 px-6 py-7">
          <p className="font-display text-2xl font-semibold">Portfolio</p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-light">Academic Year {student.academicYear}</p>
          <div className="mt-9 space-y-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-light">
            <p className="text-ivory">{student.name}</p>
            <p>{student.major}</p>
            <p>{student.shortUniversity}</p>
          </div>
        </div>

        <nav className="flex-1 px-3 py-7" aria-label="Portfolio sections">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = item.id === activeTab;
            return (
              <button type="button" key={item.id} onClick={() => selectTab(item.id)} className={`group relative flex w-full items-center gap-3 rounded-lg px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.13em] transition-all ${isActive ? 'bg-white/5 text-peach shadow-[inset_0_0_22px_rgba(247,168,161,0.12),0_8px_24px_rgba(231,111,122,0.10)]' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}>
                {isActive && <span className="absolute -right-3 top-1/2 h-7 w-1 -translate-y-1/2 rounded-l-full bg-peach" />}
                <Icon size={17} strokeWidth={1.7} />
                <span>{String(index + 1).padStart(2, '0')} {item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="border-t border-white/10 px-6 py-6">
          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-light">Editorial Academic Archive</p>
        </div>
      </aside>

      {isMobileOpen && <button type="button" aria-label="Đóng menu" className="portfolio-mobile-overlay fixed inset-0 z-40 bg-black/60 md:hidden" onClick={() => setIsMobileOpen(false)} />}
    </>
  );
}
