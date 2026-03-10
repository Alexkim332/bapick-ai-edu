import Link from "next/link";
import { BookOpen, Calendar, MessageCircleQuestion, ArrowRight, CheckCircle2 } from "lucide-react";
import ChallengeModalButton from "@/components/ChallengeModalButton";
import FAQItem from "@/components/FAQItem";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-slate-950 py-16 md:py-24 border-b border-gray-800 relative overflow-hidden">
        {/* Abstract shapes - Dark Theme */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 lg:gap-16 relative z-10 w-full">
          {/* Hero Text */}
          <div className="flex-1 space-y-6 text-center md:text-left animate-fade-in-up w-full">
            <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-purple-300 shadow-sm mb-2">
              🚀 가장 확실한 AI 교육 풀스택 챌린지
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              당신의 비즈니스를 돕는 <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">AI 자동화</span>, <br className="hidden lg:block" />
              밀착 케어로 확실하게.
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto md:mx-0 font-medium leading-relaxed">
              단순한 강의 수강이 아닙니다. 일주일 동안 매일 제공되는 학습 자료와 영상을 보고 챌린지 과제를 수행하며, 비개발자도 웹사이트를 직접 개발할 수 있는 실무 능력을 완벽하게 갖추게 해드립니다.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/premium"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-2xl text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                챌린지 커리큘럼 보기
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            {/* Stats Glassmorphism Bar */}
            <div className="mt-12 pt-8 border-t border-gray-800/50 w-full animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-4 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 shadow-xl">
                <div className="flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-black text-purple-400 mb-1">15명</span>
                  <span className="text-xs text-gray-300 font-medium">소수정예 밀착</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center border-l-0 lg:border-l border-gray-800/50">
                  <span className="text-3xl font-black text-purple-400 mb-1">1주일</span>
                  <span className="text-xs text-gray-300 font-medium">단기 완성</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center border-t sm:border-t-0 lg:border-l border-gray-800/50 pt-6 sm:pt-0">
                  <span className="text-3xl font-black text-purple-400 mb-1">100%</span>
                  <span className="text-xs text-gray-300 font-medium">실무 및 배포</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center border-t sm:border-t-0 lg:border-l border-gray-800/50 pt-6 sm:pt-0">
                  <span className="text-3xl font-black text-purple-400 mb-1">0원</span>
                  <span className="text-xs text-gray-300 font-medium">웹사이트 유지비</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="flex-1 w-full max-w-md mx-auto md:mx-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="p-8 glassmorphism rounded-3xl flex flex-col items-center select-none hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
              {/* Optional background decoration */}
              <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>

              <div className="inline-block px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold rounded-full mb-4 shadow-sm relative z-10">BEST SELLER 🔥</div>

              <h3 className="text-2xl font-black text-slate-900 mb-2 relative z-10 text-center tracking-tight">AI 자동화 설계자 밀착 챌린지</h3>
              <p className="text-sm text-indigo-600 font-bold mb-8 relative z-10">1기 챌린저 모집 중! 특별 할인가</p>

              <div className="flex items-center space-x-3 mb-2 relative z-10">
                <span className="text-lg text-slate-400 line-through font-semibold">299,000원</span>
                <span className="text-sm font-extrabold px-3 py-1 bg-red-100 text-red-600 rounded-lg tracking-wide shadow-sm">67% OFF</span>
              </div>

              <div className="text-5xl font-black text-slate-900 mb-8 flex items-baseline relative z-10 tracking-tighter">
                99,000<span className="text-xl font-bold text-slate-500 ml-1">원</span>
              </div>

              <ul className="text-sm text-slate-700 mb-8 space-y-4 w-full px-2 relative z-10">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5"><CheckCircle2 className="w-4 h-4 text-green-600" /></div>
                  <span className="font-semibold text-slate-800">체계적인 1주일 학습자료 & 영상 제공</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5"><CheckCircle2 className="w-4 h-4 text-green-600" /></div>
                  <span className="font-semibold text-slate-800">챌린지 과제 밀착 피드백</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5"><CheckCircle2 className="w-4 h-4 text-green-600" /></div>
                  <span className="font-semibold text-slate-800">비밀 카톡방 초대 & 밀착 멘토링</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5"><CheckCircle2 className="w-4 h-4 text-green-600" /></div>
                  <span className="font-semibold text-slate-800">비개발자도 웹사이트 개발 완수</span>
                </li>
              </ul>

              <ChallengeModalButton
                className="w-full inline-flex items-center justify-center py-4 border border-transparent text-lg font-bold rounded-2xl text-white bg-slate-900 hover:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform active:scale-95 relative z-10 overflow-hidden group/btn"
              >
                <span className="relative z-10">챌린지 신청하기</span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
              </ChallengeModalButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Bapick AI Edu 챌린지만의 특별함
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              오직 성과를 위한 3가지 확실한 교육 철학을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Feature 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1주일 단기 완성 로드맵</h3>
              <p className="text-slate-600 leading-relaxed">
                기초부터 실무 적용까지 단계별 자료와 영상으로 구성된 일주일 로드맵을 통해 단기간에 마스터할 수 있습니다.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">챌린지 과제 & 꼼꼼한 피드백</h3>
              <p className="text-slate-600 leading-relaxed">
                단순한 시청을 넘어, 직접 적용해보는 매일의 챌린지 과제와 멘토의 꼼꼼한 피드백으로 실력을 끌어 올립니다.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <MessageCircleQuestion className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">비밀 카톡방 초대 & 밀착 멘토링</h3>
              <p className="text-slate-600 leading-relaxed">
                막히는 부분이 있다면 비밀 카톡방에서 언제든 질문하세요. 멘토가 직접 빠르고 명확한 답변과 밀착 멘토링을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Pain Points & Value Proposition */}
      <section className="w-full bg-white py-20 md:py-24 border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6 tracking-tight">
            진짜 &apos;바이브 코딩&apos;이 무엇인지, 이론-실습-배포까지 한 번에!
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            AI 코딩, 말로만 듣고 아직 시작 못 하셨나요? 지금 아래와 같은 고민을 하고 계시다면 주목해 주세요.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start space-x-4 hover:bg-red-50 hover:border-red-100 transition-colors duration-300 group">
              <span className="text-red-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"><CheckCircle2 className="w-6 h-6" /></span>
              <p className="text-slate-700 font-medium">개발의 &apos;개&apos;자도 모르는데 웹사이트를 만들 수 있을까?</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start space-x-4 hover:bg-red-50 hover:border-red-100 transition-colors duration-300 group">
              <span className="text-red-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"><CheckCircle2 className="w-6 h-6" /></span>
              <p className="text-slate-700 font-medium">강의는 많이 들었는데, 막상 내 서비스는 하나도 없어요…</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start space-x-4 hover:bg-red-50 hover:border-red-100 transition-colors duration-300 group">
              <span className="text-red-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"><CheckCircle2 className="w-6 h-6" /></span>
              <p className="text-slate-700 font-medium">혼자 영상을 보려니 자꾸 미루게 되고 의욕이 안 납니다ㅠㅠ</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start space-x-4 hover:bg-red-50 hover:border-red-100 transition-colors duration-300 group">
              <span className="text-red-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"><CheckCircle2 className="w-6 h-6" /></span>
              <p className="text-slate-700 font-medium">코딩 없이 텍스트만 쳐서 홈페이지를 배포하고 싶어요!</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
            <p className="text-xl font-bold text-slate-900 leading-relaxed relative z-10">
              <span className="text-blue-700">강의만 듣고 끝나는 뻔한 교육이 아닙니다.</span><br />
              딱 5일, 매일 쏟아지는 미션과 주말 밀착 케어로 직원 한 명 없이 <span className="text-blue-700 bg-blue-100/50 px-2 py-0.5 rounded-lg inline-block mt-2 font-black">&apos;진짜 내 웹사이트&apos;</span>를 완성합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Curriculum Timeline */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl mb-16">
            1기 전용 1주일 단기 완성 로드맵 🗓️
          </h2>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
            {/* Day 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 font-bold text-lg">
                1
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-blue-100 text-primary text-xs font-bold px-2.5 py-1 rounded-md">1일차</span>
                  <h3 className="font-bold text-gray-900 text-lg">AI 기획 및 개발 환경 초기 세팅</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">코딩 전 필수! 토큰 비용을 아끼는 프롬프트 기획법 및 시크릿 AI 에이전트 툴 세팅</p>
              </div>
            </div>

            {/* Day 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 font-bold text-lg">
                2
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-blue-100 text-primary text-xs font-bold px-2.5 py-1 rounded-md">2일차</span>
                  <h3 className="font-bold text-gray-900 text-lg">바이브 코딩 실전! 프론트엔드 UI 구축</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">자연어로 명령하여 웹사이트 겉모습 뚝딱 만들고 내 PC에서 미리보기</p>
              </div>
            </div>

            {/* Day 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 font-bold text-lg">
                3
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-blue-100 text-primary text-xs font-bold px-2.5 py-1 rounded-md">3일차</span>
                  <h3 className="font-bold text-gray-900 text-lg">개발자들의 비밀 무기, 저장소 구축</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">전 세계 개발자들의 놀이터 &apos;깃허브(GitHub)&apos; 가입 및 내 웹사이트 코드 안전하게 업로드하기</p>
              </div>
            </div>

            {/* Day 4 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 font-bold text-lg">
                4
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-blue-100 text-primary text-xs font-bold px-2.5 py-1 rounded-md">4일차</span>
                  <h3 className="font-bold text-gray-900 text-lg">내 웹사이트를 전 세계에 배포하기</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">비용 0원! Vercel 클라우드 호스팅을 이용해 실제 인터넷 URL로 라이브 연결하기</p>
              </div>
            </div>

            {/* Day 5 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 font-bold text-lg">
                5
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-blue-100 text-primary text-xs font-bold px-2.5 py-1 rounded-md">5일차</span>
                  <h3 className="font-bold text-gray-900 text-lg">최종 프로젝트 완성 및 제출 챌린지</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">완성된 나만의 웹사이트 URL 인증 및 AI 에이전트 매니저 활용 꿀팁</p>
              </div>
            </div>

            {/* Weekend */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-gray-800 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 font-bold text-sm">
                주말
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-gray-800 border border-gray-700 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-gray-700 text-white text-xs font-bold px-2.5 py-1 rounded-md">토/일</span>
                  <h3 className="font-bold text-white text-lg">복습 및 비밀 카톡방 집중 Q&A</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">막혔던 부분 완벽 해결! 챌린지 이후 나홀로 수익화 파이프라인 구축을 위한 방향성 제시</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Final CTA & Benefits */}
      <section className="w-full bg-gradient-to-br from-slate-900 to-indigo-950 py-20 md:py-28 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <h2 className="text-3xl font-black text-white sm:text-5xl mb-12 leading-tight tracking-tight">
            비개발자도 일주일이면 충분합니다.<br />지금 바로 1기에 합류하세요.
          </h2>

          <div className="glassmorphism !bg-white/10 !border-white/20 rounded-3xl shadow-2xl p-8 md:p-12 mx-auto relative overflow-hidden backdrop-blur-xl group">
            {/* Top gradient bar */}
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"></div>

            <div className="mb-10 space-y-5">
              <div className="inline-flex items-center rounded-full border border-red-400/30 bg-red-500/10 px-5 py-2 text-sm font-bold text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                🚨 참여 인원 : 선착순 딱 15명
              </div>
              <div className="text-slate-200 font-medium bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                <span className="block text-blue-300 font-bold mb-2 text-lg drop-shadow-sm">💡 수강생 특별 혜택</span>
                <p className="text-white tracking-tight">비밀 카톡방 밀착 멘토링 &amp; 평생 소장 실습 가이드 제공</p>
              </div>
            </div>

            <div className="mb-10">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <span className="text-xl text-slate-400 line-through font-semibold">299,000원</span>
                <span className="text-sm font-black px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full tracking-wide">67% 할인</span>
              </div>
              <div className="text-5xl md:text-7xl font-black text-white flex items-baseline justify-center tracking-tighter drop-shadow-lg">
                99,000<span className="text-xl md:text-2xl font-bold text-slate-300 ml-2">원</span>
              </div>
            </div>

            <ChallengeModalButton
              className="w-full max-w-md mx-auto flex items-center justify-center py-5 border border-transparent text-xl font-bold rounded-2xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 group/btn overflow-hidden relative"
            >
              <span className="relative z-10">1기 챌린지 신청하기 (99,000원)</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
            </ChallengeModalButton>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-gray-950 py-20 md:py-24 border-t border-gray-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-black text-white sm:text-4xl tracking-tight">자주 묻는 질문</h2>
            <p className="mt-4 text-gray-400">결제 전 가장 많이 물어보시는 질문들을 모았습니다.</p>
          </div>

          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <FAQItem
              question="진짜 코딩을 한 번도 안 해본 비개발자도 가능한가요?"
              answer="네, 완벽하게 가능합니다! 복잡한 프로그래밍 언어를 외우는 것이 아니라, 일상적인 언어로 AI에게 명령을 내리는 '바이브 코딩'을 배우기 때문에 타자만 칠 줄 아시면 누구나 웹사이트를 만들 수 있습니다."
            />
            <FAQItem
              question="이 챌린지가 끝나면 정말 혼자서도 웹사이트를 만들 수 있나요?"
              answer="당연합니다. 5일간의 실습을 통해 기획, 프론트엔드, 백엔드, 배포까지 전 과정을 직접 경험하시게 됩니다. 챌린지 종료 후에는 배운 툴과 노하우를 활용해 혼자서도 다양한 수익화 웹사이트를 무한대로 찍어내실 수 있습니다."
            />
            <FAQItem
              question="하루에 시간을 얼마나 투자해야 하나요?"
              answer="개인차는 있지만, 제공되는 VOD 시청 후 당일 미션을 수행하는 데 하루 평균 1~2시간 정도면 충분합니다."
            />
            <FAQItem
              question="환불 규정은 어떻게 되나요?"
              answer={
                <span>
                  본 챌린지는 핵심 노하우와 VOD 자료가 즉시 제공되는 정보성 콘텐츠의 특성상, <strong className="text-red-400">결제 완료 후에는 어떠한 경우에도 환불이 불가</strong>합니다. 신중하게 고민하신 후 신청해 주시기 바랍니다.
                </span>
              }
            />
          </div>
        </div>
      </section>

      {/* Contact Card Section */}
      <section className="w-full bg-gray-950 pb-20 md:pb-28 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-5xl bg-[#111] rounded-[2rem] p-10 md:p-14 relative overflow-hidden shadow-2xl border border-gray-800/50">
          {/* Subtle purple gradient blob background */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-600/30 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4">
              <p className="text-gray-400 text-sm font-medium tracking-wide">
                결제나 챌린지 진행에 대해 더 궁금한 점이 있으신가요?
              </p>
              <h3 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
                1:1 카카오톡 문의하기
              </h3>
            </div>

            <div>
              <a
                href="https://open.kakao.com/o/gqj7Ebji"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-purple-400 hover:text-purple-300 font-semibold rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
              >
                오픈채팅방 바로가기
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

