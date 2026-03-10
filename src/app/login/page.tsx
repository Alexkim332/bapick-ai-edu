'use client';

import { useState, Suspense, FormEvent } from 'react';
import { login, signup } from './actions';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function LoginFormContent() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [passwordError, setPasswordError] = useState('');
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get('errorMessage');
  const message = searchParams.get('message');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (activeTab === 'signup') {
      const formData = new FormData(e.currentTarget);
      const password = formData.get('password') as string;
      const passwordConfirm = formData.get('passwordConfirm') as string;

      if (password !== passwordConfirm) {
        e.preventDefault();
        setPasswordError('비밀번호가 일치하지 않습니다.');
      } else {
        setPasswordError('');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 min-h-[calc(100vh-4rem)]">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl border border-gray-800 shadow-xl overflow-hidden">

        {/* Tabs */}
        <div className="flex border-b border-gray-800">
          <button
            className={`flex-1 py-4 text-center text-sm font-bold transition-colors ${activeTab === 'login'
              ? 'bg-gray-900 text-purple-400 border-b-2 border-purple-500'
              : 'bg-gray-900/50 text-gray-500 hover:bg-gray-800'
              }`}
            onClick={() => setActiveTab('login')}
          >
            로그인
          </button>
          <button
            className={`flex-1 py-4 text-center text-sm font-bold transition-colors ${activeTab === 'signup'
              ? 'bg-gray-900 text-purple-400 border-b-2 border-purple-500'
              : 'bg-gray-900/50 text-gray-500 hover:bg-gray-800'
              }`}
            onClick={() => setActiveTab('signup')}
          >
            회원가입
          </button>
        </div>

        <div className="p-8">
          <h1 className="text-2xl font-bold text-center text-white mb-8">
            {activeTab === 'login' ? 'bapick ai edu 시작하기' : '회원으로 가입하세요'}
          </h1>

          {errorMessage && (
            <div className="mb-6 p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-200 text-center font-medium">
              🚨 {errorMessage}
            </div>
          )}
          {message && (
            <div className="mb-6 p-3 bg-blue-50 text-blue-600 text-sm rounded-md border border-blue-200 text-center font-medium">
              ✅ {message}
            </div>
          )}

          <form
            className="space-y-6"
            action={activeTab === 'login' ? login : signup}
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                이메일
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-white outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm transition-shadow placeholder-gray-600"
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                비밀번호
              </label>
              <input
                name="password"
                type="password"
                required
                className="w-full rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-white outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm transition-shadow placeholder-gray-600"
                placeholder="••••••••"
              />
            </div>

            {activeTab === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  비밀번호 확인
                </label>
                <input
                  name="passwordConfirm"
                  type="password"
                  required
                  className="w-full rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-white outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm transition-shadow placeholder-gray-600"
                  placeholder="••••••••"
                />
                {passwordError && (
                  <p className="mt-2 text-sm text-red-400 font-medium">
                    {passwordError}
                  </p>
                )}
              </div>
            )}

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200"
            >
              {activeTab === 'login' ? '로그인' : '회원가입'}
            </button>
          </form>

          {activeTab === 'login' && (
            <div className="mt-6 text-center text-sm text-gray-400">
              아직 계정이 없으신가요?{' '}
              <button
                type="button"
                onClick={() => setActiveTab('signup')}
                className="text-purple-400 hover:text-purple-300 hover:underline font-medium focus:outline-none transition-colors"
              >
                회원가입
              </button>
            </div>
          )}
          {activeTab === 'signup' && (
            <div className="mt-6 text-center text-sm text-gray-400">
              이미 계정이 있으신가요?{' '}
              <button
                type="button"
                onClick={() => setActiveTab('login')}
                className="text-purple-400 hover:text-purple-300 hover:underline font-medium focus:outline-none transition-colors"
              >
                로그인
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <Suspense fallback={<div className="flex justify-center py-20 min-h-screen">Loading...</div>}>
      <LoginFormContent />
    </Suspense>
  );
}

