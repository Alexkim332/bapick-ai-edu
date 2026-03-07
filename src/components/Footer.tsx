export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-bold text-primary">bapick ai edu</span>
          <p className="text-sm text-text-muted text-center md:text-left">
            당신의 비즈니스를 돕는 AI 자동화 교육 플랫폼
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2 text-sm text-text-muted">
          <p>문의: support@bapick.com</p>
          <p className="text-xs mt-2">
            &copy; {new Date().getFullYear()} bapick ai edu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
