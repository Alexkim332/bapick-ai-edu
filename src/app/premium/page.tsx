import { CheckCircle2, Lock } from "lucide-react";
import Link from "next/link";

export default function PremiumCourses() {
  return (
    <div className="flex flex-col">
      {/* Intro Section */}
      <section className="bg-primary text-white py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-primary-hover">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            프리미엄 밀착 케어 클래스
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            강의만 듣고 끝나는 것이 아닙니다. 
            당신의 비즈니스에 실제 성과가 날 때까지 멘토가 1주일간 밀착 동행합니다.
          </p>
        </div>
      </section>

      {/* Curriculum & Care Detail Section */}
      <section className="py-16 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl shadow-sm border border-border p-8 md:p-12">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-text-main">
              왜 '밀착 케어'가 필요한가요?
            </h2>
            <p className="mt-4 text-text-muted">
              많은 사람들이 강의를 수강하지만, 실무에 적용하는 데 어려움을 겪습니다. 
              bapick ai edu의 프리미엄 클래스는 실행과 결과에 초점을 맞춥니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold flex items-center text-text-main mb-4">
                <CheckCircle2 className="w-5 h-5 text-primary mr-2" />
                커리큘럼 요약
              </h3>
              <ul className="space-y-3 text-text-muted text-sm">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1일차:</span> 비즈니스 진단 및 자동화 설계
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3일차:</span> 맞춤형 AI 툴 연동 및 설정
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">5일차:</span> 자동화 파이프라인 테스트 및 최적화
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">7일차:</span> 최종 성과 점검 및 지속 방안 마련
                </li>
              </ul>
            </div>
            <div className="bg-background-light p-6 rounded-xl border border-border">
               <h3 className="text-lg font-bold flex items-center text-text-main mb-4">
                <Lock className="w-5 h-5 text-primary mr-2" />
                프리미엄 혜택
              </h3>
              <ul className="space-y-4 text-text-muted text-sm">
                <li>• 1:1 맞춤형 과제 피드백 파드 제공</li>
                <li>• 무제한 Q&A 채널(슬랙/디스코드) 접근권</li>
                <li>• 최신 AI 툴 프롬프트 라이브러리 프리패스</li>
              </ul>
            </div>
          </div>

          <div className="max-w-md mx-auto pt-8 border-t border-border mt-8">
            <div className="bg-white border border-border shadow-sm rounded-xl p-8 flex flex-col items-center">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-lg text-gray-400 line-through font-medium">₩ 220,000</span>
                <span className="bg-red-100 text-red-600 text-sm font-bold px-2.5 py-1 rounded-md tracking-wide">55% OFF</span>
              </div>
              <h3 className="text-4xl font-extrabold text-text-main mb-2">₩ 99,000</h3>
              <p className="text-sm text-text-muted mb-8 text-center">모든 프리미엄 혜택과 1주일 밀착 케어 포함</p>
              
              <Link 
                href="#" 
                className="inline-flex w-full items-center justify-center py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-primary hover:bg-primary-hover transition-colors shadow-sm"
              >
                1주일 밀착 케어 시작하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
