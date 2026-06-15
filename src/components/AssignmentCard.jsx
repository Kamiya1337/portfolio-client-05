import { ArrowRight, ExternalLink, FileText, Image as ImageIcon } from 'lucide-react';

const isAvailable = (value) => Boolean(value && value !== 'Sẽ cập nhật sau' && value !== 'Không yêu cầu');

export default function AssignmentCard({ project, onSelect }) {
  return (
    <article className="reveal hover-lift group flex min-h-[540px] flex-col overflow-hidden rounded-xl border border-border-light bg-white shadow-[0_12px_32px_rgba(247,168,161,0.08)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-paper">
        {isAvailable(project.evidenceImg) ? <img src={project.evidenceImg} alt={`Minh chứng ${project.title}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /> : <div className="flex h-full items-center justify-center text-muted-dark"><ImageIcon size={30} /></div>}
        <span className="dark-label-box absolute left-4 top-4">Assignment {String(project.id).padStart(2, '0')}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-blush px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-rose">{project.chapter}</span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-dark">{project.status}</span>
      </div>
      <h2 className="mt-6 font-display text-2xl font-semibold leading-8 transition-colors group-hover:text-rose">{project.title}</h2>
      <p className="mt-4 text-sm leading-7 text-muted-dark">{project.shortDesc}</p>
      <div className="mt-5 flex flex-wrap gap-2">{project.skills?.slice(0, 3).map((skill) => <span key={skill} className="rounded-full bg-paper px-3 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-muted-dark">{skill}</span>)}</div>
      <div className="mt-auto grid grid-cols-2 gap-2 pt-7">
        {isAvailable(project.report) ? <a href={project.report} target="_blank" rel="noreferrer" className="card-resource-link"><FileText size={13} /> Report</a> : <span className="card-resource-link opacity-50">Report pending</span>}
        {isAvailable(project.driveLink) ? <a href={project.driveLink} target="_blank" rel="noreferrer" className="card-resource-link"><ExternalLink size={13} /> Drive</a> : <span className="card-resource-link opacity-50">Drive pending</span>}
      </div>
      <button type="button" onClick={() => onSelect(project)} className="button-primary mt-3 w-full">View Case Study <ArrowRight size={16} /></button>
      </div>
    </article>
  );
}
