import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import AssignmentCard from './AssignmentCard';
import AssignmentDetail from './AssignmentDetail';

export default function ProjectsTab() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewData, setPreviewData] = useState({ isOpen: false, url: '', type: '' });
  const { projects } = portfolioData;

  const openPreview = (event, url, type) => {
    event.preventDefault();
    setPreviewData({ isOpen: true, url, type });
  };
  const closePreview = () => setPreviewData({ isOpen: false, url: '', type: '' });

  if (selectedProject) return <AssignmentDetail project={selectedProject} onBack={() => setSelectedProject(null)} previewData={previewData} onPreview={openPreview} onClosePreview={closePreview} />;

  return (
    <div className="bg-ivory">
      <header className="page-intro">
        <p className="editorial-label">Curated Portfolio Archive</p>
        <h1 className="page-title max-w-5xl">Applied learning, documented with care.</h1>
        <p className="page-copy">Sáu bài tập học phần được trình bày như một hồ sơ học thuật, giữ nguyên báo cáo, minh chứng và liên kết tài nguyên thực tế.</p>
      </header>
      <section className="mx-auto grid max-w-[1408px] grid-cols-1 gap-6 px-5 pb-24 sm:px-8 lg:grid-cols-2 xl:grid-cols-3 xl:px-16">
        {projects.map((project) => <AssignmentCard key={project.id} project={project} onSelect={setSelectedProject} />)}
      </section>
      <section className="border-t border-border-light bg-paper px-5 py-20 sm:px-8 xl:px-16">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-2 lg:items-center"><div><p className="editorial-label">Academic Standards</p><h2 className="mt-4 font-display text-4xl font-semibold">Evidence before decoration.</h2><p className="mt-6 max-w-xl text-base leading-8 text-muted-dark">Mỗi hồ sơ ưu tiên tính chính xác của nội dung, khả năng truy xuất tài nguyên và sự minh bạch trong quá trình thực hiện.</p></div><div className="rounded-xl bg-obsidian p-10 text-white"><p className="dark-editorial-label">Archive Scope</p><p className="mt-5 font-display text-7xl font-semibold">{String(projects.length).padStart(2, '0')}</p><p className="mt-2 text-sm text-white/65">documented assignments</p></div></div>
      </section>
    </div>
  );
}
