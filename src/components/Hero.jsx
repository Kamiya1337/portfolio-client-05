import { ArrowRight, FileCheck2 } from 'lucide-react';

export default function Hero({ student, setActiveTab }) {
  return (
    <section className="overflow-hidden px-5 pb-20 pt-12 sm:px-8 md:pt-16 xl:px-16 xl:pb-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="min-w-0 lg:col-span-8">
            <p className="editorial-label mb-5">Overview / Tổng quan</p>
            <h1 className="max-w-4xl break-words font-display text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[0.98] tracking-[-0.035em] text-charcoal">
              English Language &amp;<br />Culture Learning Portfolio
            </h1>
            <div className="mt-8 max-w-3xl rounded-xl bg-obsidian p-7 text-white shadow-[0_18px_50px_rgba(42,28,28,0.16)] sm:p-9">
              <p className="font-display text-lg font-semibold leading-relaxed sm:text-2xl">Portfolio môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={() => setActiveTab('projects')} className="button-light">Mục bài tập <ArrowRight size={16} /></button>
                <button type="button" onClick={() => setActiveTab('evidence')} className="button-dark-outline">Minh chứng <FileCheck2 size={16} /></button>
              </div>
            </div>
          </div>

          <aside className="editorial-card min-w-0 max-w-full p-5 lg:col-span-4 lg:mt-8">
            <img
              src="/avatar-dinh-thai-son.jpg"
              alt="Nguyễn Minh Ngọc portfolio owner"
              className="aspect-[4/5] w-full max-w-full rounded-lg object-cover object-center"
            />
            <p className="editorial-label mt-8">Portfolio Owner</p>
            <h2 className="mt-2 font-display text-3xl font-semibold leading-tight">{student.name}</h2>
            <dl className="mt-8 space-y-6">
              <div><dt className="editorial-label">Major</dt><dd className="mt-2 text-sm font-bold leading-6">{student.major}</dd></div>
              <div><dt className="editorial-label">Institution</dt><dd className="mt-2 text-sm font-bold">{student.shortUniversity}</dd><dd className="mt-1 text-xs leading-5 text-muted-dark">{student.university}</dd></div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
