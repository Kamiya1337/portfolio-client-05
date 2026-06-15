import { X } from 'lucide-react';

export default function PreviewModal({ previewData, onClose }) {
  if (!previewData.isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/85 p-3 backdrop-blur-sm sm:p-6" role="dialog" aria-modal="true" aria-label="Xem trước minh chứng">
      <div className="flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-border-light bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-border-light bg-ivory px-5 py-4">
          <div><p className="editorial-label">Evidence Preview</p><h3 className="mt-1 font-display text-xl font-semibold">{previewData.type === 'pdf' ? 'Báo cáo PDF' : 'Ảnh minh chứng'}</h3></div>
          <div className="flex items-center gap-2"><a href={previewData.url} target="_blank" rel="noreferrer" className="button-secondary">Mở thẻ mới</a><button type="button" aria-label="Đóng xem trước" onClick={onClose} className="icon-button-dark"><X size={18} /></button></div>
        </div>
        <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-paper p-4">{previewData.type === 'pdf' ? <iframe src={previewData.url} title="PDF Preview" className="h-full w-full rounded-lg border-0 bg-white" /> : <img src={previewData.url} alt="Minh chứng" className="max-h-full max-w-full rounded-lg object-contain" />}</div>
      </div>
    </div>
  );
}
