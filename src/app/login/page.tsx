'use client';

import { useState, Suspense } from 'react';
import { login, signup } from './actions';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function LoginFormContent() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get('errorMessage');
  const message = searchParams.get('message');

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-background-light min-h-[calc(100vh-4rem)]">
      <div className="w-full max-w-md bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
        
        {/* Tabs */}
        <div className="flex border-b border-border">
          <button
            className={`flex-1 py-4 text-center text-sm font-bold transition-colors ${
              activeTab === 'login' 
                ? 'bg-white text-primary border-b-2 border-primary' 
                : 'bg-gray-50 text-text-muted hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('login')}
          >
            로그인
          </button>
          <button
            className={`flex-1 py-4 text-center text-sm font-bold transition-colors ${
              activeTab === 'signup' 
                ? 'bg-white text-primary border-b-2 border-primary' 
                : 'bg-gray-50 text-text-muted hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('signup')}
          >
            회원가입
          </button>
        </div>

        <div className="p-8">
          <h1 className="text-2xl font-bold text-center text-text-main mb-8">
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
          
          <form className="space-y-6" action={activeTab === 'login' ? login : signup}>
            <div>
              <label className="block text-sm font-medium text-text-main mb-2">
                이메일
              </label>
              <input 
                name="email"
                type="email" 
                required
                className="w-full rounded-md border border-border px-3 py-2 outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-shadow"
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
                className="w-full rounded-md border border-border px-3 py-2 outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-shadow"
                placeholder="••••••••"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
            >
              {activeTab === 'login' ? '로그인' : '회원가입'}
            </button>
          </form>

          {activeTab === 'login' && (
            <div className="mt-6 text-center text-sm text-text-muted">
              아직 계정이 없으신가요?{' '}
              <button 
                type="button"
                onClick={() => setActiveTab('signup')}
                className="text-primary hover:underline font-medium focus:outline-none"
              >
                회원가입
              </button>
            </div>
          )}
          {activeTab === 'signup' && (
            <div className="mt-6 text-center text-sm text-text-muted">
              이미 계정이 있으신가요?{' '}
              <button 
                type="button"
                onClick={() => setActiveTab('login')}
                className="text-primary hover:underline font-medium focus:outline-none"
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

