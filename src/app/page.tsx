import Link from "next/link";
import { BookOpen, Calendar, MessageCircleQuestion, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-white py-16 md:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Hero Text */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center rounded-full border border-border bg-background-light px-3 py-1 text-sm font-medium text-text-muted">
              온라인 교육 플랫폼
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-main leading-tight tracking-tight">
              당신의 비즈니스를 돕는 <br className="hidden md:block" />
              <span className="text-primary">AI 자동화</span>, <br className="hidden lg:block" />
              밀착 케어로 확실하게.
            </h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto md:mx-0">
              단순한 강의 수강이 아닙니다. 일주일 동안 매일 제공되는 학습 자료와 영상을 보고 챌린지 과제를 수행하며, 비개발자도 웹사이트를 직접 개발할 수 있는 실무 능력을 완벽하게 갖추게 해드립니다.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/premium"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-primary hover:bg-primary-hover shadow-sm transition-colors"
              >
                챌린지 커리큘럼 보기
              </Link>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="flex-1 w-full max-w-md mx-auto md:mx-0">
            <div className="p-8 border border-border rounded-2xl shadow-lg bg-white flex flex-col items-center select-none hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              {/* Optional background decoration */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-blue-50 opacity-50 blur-2xl"></div>
              
              <h3 className="text-xl font-bold text-text-main mb-2 relative z-10 text-center">AI 자동화 설계자 1주일 밀착 챌린지</h3>
              <p className="text-sm text-primary font-semibold mb-6 relative z-10">1기 챌린저 모집 중! 특별 할인가</p>
              
              <div className="flex items-center space-x-3 mb-2 relative z-10">
                <span className="text-lg text-gray-400 line-through font-medium">299,000원</span>
                <span className="text-sm font-bold px-2.5 py-1 bg-red-100 text-red-600 rounded-md tracking-wide">67%</span>
              </div>
              
              <div className="text-4xl font-extrabold text-text-main mb-6 flex items-baseline relative z-10">
                99,000<span className="text-lg font-medium text-text-muted ml-1">원</span>
              </div>
              
              <ul className="text-sm text-text-muted mb-8 space-y-4 w-full px-2 relative z-10">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-lg">✅</span> 
                  <span className="font-medium text-text-main">체계적인 1주일 학습자료 & 영상 제공</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-lg">✅</span> 
                  <span className="font-medium text-text-main">챌린지 과제 밀착 피드백</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-lg">✅</span> 
                  <span className="font-medium text-text-main">비밀 카톡방 초대 & 밀착 멘토링</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-lg">✅</span> 
                  <span className="font-medium text-text-main">비개발자도 웹사이트 개발 완수</span>
                </li>
              </ul>

              <Link 
                href="/premium"
                className="w-full inline-flex items-center justify-center py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-primary hover:bg-primary-hover shadow-md transition-colors relative z-10"
              >
                챌린지 신청하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-background-light py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
              Bapick AI Edu 챌린지만의 특별함
            </h2>
            <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
              오직 성과를 위한 3가지 확실한 교육 철학을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-primary mb-6">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">1주일 단기 완성 로드맵</h3>
              <p className="text-text-muted leading-relaxed">
                기초부터 실무 적용까지 단계별 자료와 영상으로 구성된 일주일 로드맵을 통해 단기간에 마스터할 수 있습니다.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-primary mb-6">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">챌린지 과제 & 꼼꼼한 피드백</h3>
              <p className="text-text-muted leading-relaxed">
                단순한 시청을 넘어, 직접 적용해보는 매일의 챌린지 과제와 멘토의 꼼꼼한 피드백으로 실력을 끌어 올립니다.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-primary mb-6">
                <MessageCircleQuestion className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">비밀 카톡방 초대 & 밀착 멘토링</h3>
              <p className="text-text-muted leading-relaxed">
                막히는 부분이 있다면 비밀 카톡방에서 언제든 질문하세요. 멘토가 직접 빠르고 명확한 답변과 밀착 멘토링을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
