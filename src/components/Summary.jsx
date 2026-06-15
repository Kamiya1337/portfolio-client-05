import { portfolioData } from '../data/portfolioData';

const sections = [
  {
    number: '01',
    label: 'Kiến thức',
    title: 'Kiến thức & Kỹ năng đã đạt được',
    copy: `"Ban đầu, em nghĩ làm portfolio chỉ đơn giản là gom các bài đã làm rồi đưa lên một trang web cho đủ. Nhưng khi bắt tay vào làm thật, em mới nhận ra nếu chỉ để file lên thì sản phẩm nhìn khá rời rạc, người xem cũng khó thấy được quá trình học và sự thay đổi của bản thân qua từng bài.

Thông qua học phần này, em biết cách sắp xếp tài liệu có hệ thống hơn, đặt tên file rõ ràng hơn và chia nội dung theo từng bài, từng phần để dễ theo dõi. Em cũng hiểu thêm về việc tìm kiếm thông tin, chọn lọc nguồn và sử dụng AI trong học tập một cách có kiểm soát hơn. Trước đây em thường hỏi AI khá tùy hứng, nghĩ gì hỏi đó, nhưng sau phần học về prompt, em thấy nếu mình đưa đủ bối cảnh, yêu cầu và định dạng mong muốn thì kết quả nhận được sẽ sát hơn và dễ dùng hơn.

Việc làm portfolio dưới dạng website cũng giúp em luyện thêm cách trình bày một sản phẩm số. Em phải tự cân nhắc bố cục, chia nội dung, gắn link báo cáo và sắp xếp minh chứng sao cho người xem không bị rối khi đọc."`,
  },
  {
    number: '02',
    label: 'Thách thức',
    title: 'Khó khăn gặp phải',
    copy: 'Phần khó nhất với em không hẳn là viết từng báo cáo riêng lẻ, mà là ghép tất cả lại thành một sản phẩm hoàn chỉnh. Khi đưa lên web, em phải chỉnh khá nhiều thứ như bố cục, màu sắc, phần minh chứng, bảng rubric và cả cách hiển thị khi in hoặc xuất PDF. Trong quá trình làm, em có dùng AI để hỗ trợ một số phần như gợi ý giao diện, viết code và rà lại nội dung. Tuy vậy, em không bê nguyên kết quả AI tạo ra vào bài. Em vẫn phải tự chạy thử, kiểm tra lỗi, sửa những chỗ chưa đúng và thay các phần chung chung bằng thông tin thật trong quá trình làm của mình.',
  },
  {
    number: '03',
    label: 'Next Steps',
    title: 'Kế hoạch hoàn thiện',
    copy: 'Sau khi hoàn thành website, em sẽ kiểm tra lại toàn bộ các link báo cáo PDF để đảm bảo từng file mở đúng nội dung của từng bài. Với những bài không có sản phẩm riêng ngoài báo cáo, em sẽ ghi rõ rằng phần sản phẩm và minh chứng đã được trình bày trong file báo cáo, thay vì tạo thêm link hoặc thêm nội dung không có thật. Em cũng sẽ kiểm tra lại bản PDF xuất từ portfolio để chắc chắn khi nộp lên hệ thống thì nội dung không bị thiếu, lỗi font hoặc mất bố cục.',
  },
];

export default function Summary() {
  const { student } = portfolioData;
  return (
    <div className="min-h-screen bg-ivory">
      <header className="px-5 pb-16 pt-16 text-center sm:px-8 xl:px-16 xl:pt-24"><p className="editorial-label">05 Reflection</p><h1 className="mt-5 font-display text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.035em]">Tổng kết &amp; Suy ngẫm</h1><p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted-dark italic">Nhìn lại hành trình học tập, những khó khăn đã trải qua và cam kết hoàn thiện Portfolio một cách trung thực.</p></header>
      <main className="mx-auto max-w-5xl px-6 pb-28 sm:px-8">
        <div className="space-y-12">{sections.map((section) => <section key={section.number} className="grid gap-6 md:grid-cols-[80px_1fr]"><span className="font-display text-5xl font-semibold text-blush">{section.number}</span><div className="editorial-card p-7 sm:p-10"><p className="editorial-label">{section.label}</p><h2 className="mt-3 font-display text-3xl font-semibold">{section.title}</h2><p className="mt-7 whitespace-pre-line text-base leading-8 text-charcoal">{section.copy}</p></div></section>)}</div>
        <section className="mt-20 rounded-xl bg-obsidian p-8 text-white shadow-[0_18px_50px_rgba(42,28,28,0.16)] sm:p-12"><p className="dark-editorial-label">Academic Integrity</p><h2 className="mt-4 font-display text-3xl font-semibold">Cam kết Liêm chính Học thuật</h2><p className="mt-7 whitespace-pre-line text-base italic leading-8 text-white/75">{`Em, Nguyễn Minh Ngọc, cam kết rằng các báo cáo và nội dung trong portfolio này phản ánh đúng quá trình học tập và thực hành của bản thân. Trong quá trình làm, em có sử dụng AI như một công cụ hỗ trợ, chủ yếu để gợi ý cách trình bày, hỗ trợ sửa code và kiểm tra lại một số phần nội dung.

Với em, AI có thể giúp tiết kiệm thời gian và gợi ý hướng làm, nhưng không thể thay thế hoàn toàn việc tự học và tự làm bài. Em không tạo minh chứng giả, không ghi những sản phẩm không có thật và không cố tình trình bày sai quá trình thực hiện các bài tập của mình.

Em cảm ơn thầy cô đã dành thời gian xem portfolio này.`}</p><div className="mt-10 border-t border-border-dark pt-6"><p className="dark-editorial-label">Student</p><p className="mt-2 text-xl font-extrabold">{student.name}</p></div></section>
      </main>
    </div>
  );
}
