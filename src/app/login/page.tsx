import { login } from './actions'
import Link from 'next/link'

export default async function Login({
  searchParams,
}: {
  searchParams: Promise<{ errorMessage?: string; message?: string }>
}) {
  const resolvedParams = await searchParams;

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-background-light min-h-[calc(100vh-4rem)]">
      <div className="w-full max-w-md bg-white rounded-2xl border border-border shadow-sm p-8">
        <h1 className="text-2xl font-bold text-center text-text-main mb-8">
          bapick ai edu 시작하기
        </h1>
        
        {resolvedParams?.errorMessage && (
          <div className="mb-6 p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-200">
            {resolvedParams.errorMessage}
          </div>
        )}
        {resolvedParams?.message && (
          <div className="mb-6 p-3 bg-blue-50 text-blue-600 text-sm rounded-md border border-blue-200">
            {resolvedParams.message}
          </div>
        )}
        
        <form className="space-y-6" action={login}>
          <div>
            <label className="block text-sm font-medium text-text-main mb-2">
              이메일
            </label>
            <input 
              name="email"
              type="email" 
              required
              className="w-full rounded-md border border-border px-3 py-2 outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-main mb-2">
              비밀번호
            </label>
            <input 
              name="password"
              type="password" 
              required
              className="w-full rounded-md border border-border px-3 py-2 outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
              placeholder="••••••••"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-hover focus:outline-none transition-colors"
          >
            로그인
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-text-muted">
          아직 계정이 없으신가요?{' '}
          <Link href="/signup" className="text-primary hover:underline font-medium">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
