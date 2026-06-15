import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import HomeTab from './components/HomeTab';
import ProjectsTab from './components/ProjectsTab';
import EvidenceTable from './components/EvidenceTable';
import RubricTable from './components/RubricTable';
import Summary from './components/Summary';
import { portfolioData } from './data/portfolioData';

const tabTitles = {
  home: 'Overview / Tổng quan',
  projects: 'Assignments / Bài tập & Dự án',
  evidence: 'Evidence / Minh chứng',
  rubric: 'Rubric / Tiêu chí',
  summary: 'Reflection / Tổng kết',
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeTab setActiveTab={setActiveTab} />;
      case 'projects': return <ProjectsTab />;
      case 'evidence': return <EvidenceTable />;
      case 'rubric': return <RubricTable />;
      case 'summary': return <Summary />;
      default: return <HomeTab setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="portfolio-app min-h-screen bg-ivory text-charcoal md:flex">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />
      <div className="portfolio-main flex w-full min-w-0 max-w-full flex-1 flex-col overflow-x-hidden md:ml-sidebar md:w-auto">
        <header className="portfolio-topbar sticky top-0 z-30 hidden h-[72px] items-center justify-between border-b border-border-light bg-ivory/90 px-8 backdrop-blur-md md:flex xl:px-16">
          <div><p className="font-display text-xl font-semibold">Portfolio Index</p><p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-dark">{tabTitles[activeTab]}</p></div>
          <span className="editorial-label">Academic Year {portfolioData.student.academicYear}</span>
        </header>
        <main className="flex-1">{renderContent()}</main>
        <footer className="site-footer border-t border-border-light bg-paper px-6 py-7 sm:px-8 xl:px-16"><div className="mx-auto flex max-w-[1280px] flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div><p className="editorial-label">Editorial Academic Archive</p><p className="mt-1 text-sm text-muted-dark">{portfolioData.student.name} · {portfolioData.student.shortUniversity}</p></div><p className="text-xs text-muted-dark">Academic Year {portfolioData.student.academicYear}</p></div></footer>
      </div>
    </div>
  );
}
