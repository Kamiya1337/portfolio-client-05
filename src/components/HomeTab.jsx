import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Hero from './Hero';

const modules = [
  { number: '01', title: 'Coursework', copy: 'Assignments and applied academic work.', tab: 'projects' },
  { number: '02', title: 'Evidence', copy: 'Reports, media, and linked learning artifacts.', tab: 'evidence' },
  { number: '03', title: 'Rubric', copy: 'Evaluation criteria and portfolio readiness.', tab: 'rubric' },
  { number: '04', title: 'Reflection', copy: 'Personal insight, challenges, and next steps.', tab: 'summary' },
];

export default function HomeTab({ setActiveTab }) {
  const { student } = portfolioData;
  return (
    <div className="bg-ivory">
      <Hero student={student} setActiveTab={setActiveTab} />
      <section className="px-5 pb-20 sm:px-8 xl:px-16 xl:pb-24">
        <div className="editorial-card mx-auto grid max-w-[1280px] gap-8 bg-paper px-7 py-10 md:grid-cols-12 md:gap-10 md:px-10 md:py-12">
          <div className="md:col-span-4">
            <p className="editorial-label">ĐỊNH VỊ CÁ NHÂN</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-charcoal sm:text-5xl">Digital Catalyst</h2>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-muted-dark">Data-driven Thinking × Digital Creativity</p>
          </div>
          <div className="border-t border-border-light pt-7 md:col-span-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <p className="max-w-3xl text-base leading-8 text-charcoal">Là một Marketer tương lai, em định vị mình là một &quot;Digital Catalyst&quot; - người thúc đẩy sự thay đổi thông qua dữ liệu và sáng tạo kỹ thuật số. Bản sắc của em nằm ở điểm giao thoa giữa Tư duy Phân tích Dữ liệu (Data-driven) và Sức sáng tạo Không giới hạn (Digital Creativity). Em biến những con số khô khan thành thông điệp chạm đến cảm xúc, và dùng công nghệ làm đòn bẩy để tối ưu hóa trải nghiệm khách hàng, biến những ý tưởng táo bạo thành kết quả kinh doanh thực tế.</p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-charcoal">Portfolio này không chỉ là tập hợp các bài tập bộ môn Công nghệ số và AI, mà còn là cuốn nhật ký ghi lại hành trình em khám phá, làm chủ công nghệ và từng bước chuyển hóa lý thuyết thành những sản phẩm mang tới cho công chúng.</p>
          </div>
        </div>
      </section>
      <section className="border-t border-border-light px-5 py-20 sm:px-8 xl:px-16 xl:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7"><p className="editorial-label">Portfolio Navigation</p><h2 className="mt-4 font-display text-5xl font-semibold sm:text-6xl">Module Explorer</h2></div>
            <p className="max-w-md text-sm leading-7 text-muted-dark lg:col-span-5 lg:justify-self-end">Navigate the academic journey through coursework, supporting evidence, assessment criteria, and reflection.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {modules.map((item, index) => (
              <button type="button" key={item.number} onClick={() => setActiveTab(item.tab)} className={`group min-h-72 rounded-xl border border-border-light bg-white p-7 text-left shadow-[0_12px_32px_rgba(247,168,161,0.06)] transition-all hover:-translate-y-1 hover:border-peach hover:shadow-[0_16px_36px_rgba(247,168,161,0.16)] ${index > 1 ? 'xl:translate-y-6' : ''}`}>
                <span className="font-display text-6xl font-semibold text-blush">{item.number}</span>
                <div className="mt-16 flex items-start justify-between gap-4"><div><h3 className="font-display text-2xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-dark">{item.copy}</p></div><ArrowUpRight size={17} className="mt-1 text-rose transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 pb-24 pt-8 sm:px-8 xl:px-16 xl:pb-28 xl:pt-14">
        <div className="mx-auto flex min-h-80 max-w-[1280px] items-center justify-center rounded-[1.5rem] bg-[#8B4D48] p-10 text-center text-white shadow-[0_20px_50px_rgba(139,77,72,0.18)]">
          <div><p className="dark-editorial-label">Academic Framework</p><p className="mt-6 max-w-4xl font-display text-3xl font-semibold leading-tight sm:text-5xl">Strategy becomes credible when it is documented, reviewed, and reflected upon.</p><div className="mx-auto mt-8 h-1 w-10 rounded-full bg-peach" /></div>
        </div>
      </section>
    </div>
  );
}
