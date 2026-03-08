import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '@/utils/supabase/server';
import { logout } from '@/app/login/actions';

export default async function Header() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <Image 
              src="/logo.jpg" 
              alt="Bapick AI Edu Logo" 
              width={200} 
              height={48} 
              className="h-10 md:h-12 w-auto object-contain" 
              priority
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/guidebook" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">
            무료 가이드북
          </Link>
          <Link href="/premium" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">
            챌린지 신청
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link 
                href="/mypage" 
                className="hidden sm:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors text-text-main hover:text-primary"
              >
                마이페이지
              </Link>
              <form action={logout}>
                <button 
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-text-main shadow-sm hover:bg-gray-200 transition-colors"
                >
                  로그아웃
                </button>
              </form>
            </>
          ) : (
            <>
              <Link 
                href="/login" 
                className="hidden sm:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors text-text-main hover:text-primary"
              >
                로그인
              </Link>
              <Link 
                href="/signup" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow hover:bg-primary-hover transition-colors"
              >
                회원가입
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
