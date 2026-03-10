"use client";

import { CheckCircle2, Lock } from "lucide-react";
import Link from "next/link";
import ChallengeModalButton from "@/components/ChallengeModalButton";

export default function PremiumCourses() {

  return (
    <div className="flex flex-col relative w-full bg-gray-950 min-h-screen">
      {/* Intro Section - Dark Theme */}
      <section className="relative text-white py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-gray-800 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none z-0"></div>

        <div className="mx-auto max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            프리미엄 밀착 케어 클래스
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            강의만 듣고 끝나는 것이 아닙니다.
            당신의 비즈니스에 실제 성과가 날 때까지 멘토가 1주일간 밀착 동행합니다.
          </p>
        </div>
      </section>

      {/* Curriculum & Care Detail Section */}
      <section className="py-16 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="bg-gray-900 rounded-3xl shadow-xl border border-gray-800 p-8 md:p-12">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-white">
              왜 '밀착 케어'가 필요한가요?
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              많은 사람들이 강의를 수강하지만, 실무에 적용하는 데 어려움을 겪습니다.
              bapick ai edu의 프리미엄 클래스는 실행과 결과에 초점을 맞춥니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold flex items-center text-white mb-6">
                <CheckCircle2 className="w-5 h-5 text-purple-500 mr-2" />
                커리큘럼 요약
              </h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start">
                  <span className="font-bold text-gray-300 mr-2">1일차:</span> 비즈니스 진단 및 자동화 설계
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-gray-300 mr-2">3일차:</span> 맞춤형 AI 툴 연동 및 설정
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-gray-300 mr-2">5일차:</span> 자동화 파이프라인 테스트 및 최적화
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-gray-300 mr-2">7일차:</span> 최종 성과 점검 및 지속 방안 마련
                </li>
              </ul>
            </div>
            <div className="bg-black/40 p-6 rounded-2xl border border-gray-800">
              <h3 className="text-lg font-bold flex items-center text-white mb-4">
                <Lock className="w-5 h-5 text-purple-500 mr-2" />
                프리미엄 혜택
              </h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-center"><span className="text-purple-500 mr-2">•</span> 1:1 맞춤형 과제 피드백 파드 제공</li>
                <li className="flex items-center"><span className="text-purple-500 mr-2">•</span> 무제한 Q&A 채널(슬랙/디스코드) 접근권</li>
                <li className="flex items-center"><span className="text-purple-500 mr-2">•</span> 최신 AI 툴 프롬프트 라이브러리 프리패스</li>
              </ul>
            </div>
          </div>

          <div className="max-w-md mx-auto pt-8 border-t border-gray-800 mt-8 relative">
            <div className="bg-gray-900 border border-purple-500/20 shadow-[0_0_30px_rgba(147,51,234,0.1)] rounded-3xl p-8 flex flex-col items-center relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500"></div>

              <div className="flex items-center space-x-3 mb-2 mt-2">
                <span className="text-lg text-gray-500 line-through font-medium">299,000원</span>
                <span className="bg-red-500/10 text-red-400 border border-red-500/20 text-sm font-bold px-2.5 py-1 rounded-md tracking-wide">67% OFF</span>
              </div>
              <h3 className="text-4xl font-black text-white mb-2 tracking-tight">
                99,000<span className="text-lg font-medium text-gray-400 ml-1">원</span>
              </h3>
              <p className="text-sm text-gray-400 mb-8 text-center">모든 프리미엄 혜택과 1주일 밀착 케어 포함</p>

              <ChallengeModalButton
                className="inline-flex w-full items-center justify-center py-4 border border-transparent text-lg font-bold rounded-2xl text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] transition-all duration-300 transform active:scale-95"
              >
                1주일 밀착 케어 시작하기
              </ChallengeModalButton>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
