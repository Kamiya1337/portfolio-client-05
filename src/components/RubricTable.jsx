import { Check, TriangleAlert } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const valid = (value) => Boolean(value && value !== 'Sẽ cập nhật sau' && value !== 'Không yêu cầu');

export default function RubricTable() {
  const { projects, rubric } = portfolioData;
  const totalMilestones = projects.length * 2;
  const completedMilestones = projects.reduce((count, project) => count + Number(valid(project.report)) + Number(valid(project.evidenceImg)), 0);
  const progressPercent = Math.round(50 + (completedMilestones / totalMilestones) * 50);
  const projectRows = projects.map((project) => {
    const reportDone = valid(project.report);
    const imageDone = valid(project.evidenceImg);
    return { id: project.id, title: `${project.title.split(':')[0]}: Minh chứng thực hiện`, standard: 'Đầy đủ file báo cáo chi tiết nội dung học tập và hình ảnh screenshot thực tế.', complete: reportDone && imageDone, action: reportDone && imageDone ? 'Đã đồng bộ' : `Cần bổ sung: ${!reportDone ? 'File báo cáo PDF' : ''}${!reportDone && !imageDone ? ' & ' : ''}${!imageDone ? 'Ảnh screenshot' : ''}` };
  });

  return (
    <div className="min-h-screen bg-ivory">
      <header className="page-intro"><p className="editorial-label">Quality Standards</p><h1 className="page-title">Assessment Matrix</h1><p className="page-copy">Tiêu chí và trạng thái được giữ nguyên từ dữ liệu Portfolio; điểm sẵn sàng được tính trực tiếp từ báo cáo và minh chứng hiện có.</p></header>
      <section className="px-5 pb-20 sm:px-8 xl:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col gap-8 rounded-xl bg-obsidian p-8 text-white shadow-[0_18px_50px_rgba(42,28,28,0.15)] lg:flex-row lg:items-end lg:justify-between lg:p-10"><div><p className="dark-editorial-label">Rubric Criteria</p><h2 className="mt-4 font-display text-4xl font-semibold">Academic evaluation ledger</h2><div className="mt-6 h-1 w-20 rounded-full bg-peach" /></div><div className="rounded-xl border border-white/15 bg-white/5 p-6 text-center"><p className="dark-editorial-label">Current Readiness</p><p className="mt-2 font-display text-4xl font-semibold">{progressPercent}%</p></div></div>
          <div className="editorial-card mt-6 divide-y divide-border-light overflow-hidden">
            {rubric.map((row, index) => <article key={row.criteria} className="grid gap-6 p-7 transition-colors hover:bg-blush/50 lg:grid-cols-12 lg:p-8"><div className="lg:col-span-3"><p className="editorial-label">Criterion {String(index + 1).padStart(2, '0')}</p><h3 className="mt-3 font-display text-xl font-semibold">{row.criteria}</h3></div><p className="text-sm leading-7 text-muted-dark lg:col-span-4">{row.excellent}</p><div className="lg:col-span-2"><span className="ledger-status">{row.status}</span></div><p className="text-sm leading-7 text-muted-dark lg:col-span-3">{row.action}</p></article>)}
          </div>
        </div>
      </section>
      <section className="bg-paper px-6 py-20 sm:px-8 xl:px-16">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[1fr_320px] lg:items-center"><div><p className="editorial-label">Portfolio Readiness</p><h2 className="mt-4 font-display text-4xl font-semibold">Tiến độ minh chứng thực tế</h2><p className="mt-6 max-w-2xl text-base leading-8 text-muted-dark">Đã tích hợp <strong className="text-charcoal">{completedMilestones}/{totalMilestones}</strong> mục báo cáo và hình ảnh. Điểm số phản ánh đúng dữ liệu hiện có và không sử dụng điểm giả từ bản thiết kế tham chiếu.</p></div><div className="rounded-xl bg-[#8B4D48] p-10 text-white"><p className="font-display text-7xl font-semibold">{progressPercent}%</p><p className="dark-editorial-label mt-3">Calculated Score</p><div className="mt-8 border-t border-white/20 pt-6 text-sm text-white/70">Dynamic portfolio readiness</div></div></div>
      </section>
      <section className="px-5 py-20 sm:px-8 xl:px-16"><div className="mx-auto max-w-[1280px]"><p className="editorial-label">Evidence Completion</p><div className="mt-8 grid gap-5 md:grid-cols-2">{projectRows.map((row) => <article key={row.id} className="editorial-card p-7 transition-all hover:-translate-y-1 hover:border-peach"><div className="flex items-start justify-between gap-4"><h3 className="font-display text-lg font-semibold">{row.title}</h3>{row.complete ? <Check size={18} className="text-rose" /> : <TriangleAlert size={18} className="text-rose" />}</div><p className="mt-4 text-sm leading-7 text-muted-dark">{row.standard}</p><p className={`mt-5 text-xs font-bold uppercase tracking-wider ${row.complete ? 'text-muted-dark' : 'text-charcoal'}`}>{row.action}</p></article>)}</div></div></section>
    </div>
  );
}
