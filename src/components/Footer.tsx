import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <Image
              src="/logo.png"
              alt="Bapick AI Edu Logo"
              width={200}
              height={48}
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>
          <p className="text-sm text-text-muted text-center md:text-left">
            당신의 비즈니스를 돕는 AI 자동화 교육 플랫폼
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end text-sm text-text-muted">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Bapick AI Edu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
