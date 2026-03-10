import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function MyPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect('/login');
    }

    const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

    const paymentStatus = profile?.payment_status || 'none';
    const isPaid = profile?.is_paid === true;
    const depositorName = profile?.depositor_name || '';

    // Determine actual state
    let state = 'none';
    if (isPaid || paymentStatus === 'completed') {
        state = 'completed';
    } else if (paymentStatus === 'pending') {
        state = 'pending';
    }

    return (
        <div className="flex flex-col items-center justify-start py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 min-h-[calc(100vh-4rem)]">
            <div className="w-full max-w-3xl bg-gray-900 rounded-2xl border border-gray-800 shadow-xl overflow-hidden p-8 md:p-12">
                <h1 className="text-3xl font-extrabold text-white mb-8">마이페이지</h1>

                {state === 'none' && (
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 text-center flex flex-col items-center">
                        <h2 className="text-xl font-bold text-white mb-4">아직 신청한 챌린지가 없습니다.</h2>
                        <p className="text-gray-400 mb-8">
                            Bapick AI Edu의 특별한 챌린지를 통해 비즈니스 자동화를 시작해 보세요.
                        </p>
                        <Link
                            href="/premium"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-purple-600 hover:bg-purple-700 transition-colors shadow-lg hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                        >
                            챌린지 둘러보기
                        </Link>
                    </div>
                )}

                {state === 'pending' && (
                    <div className="bg-yellow-900/20 border border-yellow-600/50 rounded-xl p-8 text-center flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-yellow-500 mb-4">⏳ 입금 확인 중입니다</h2>
                        <p className="text-yellow-200 mb-6 text-lg">
                            입력하신 입금자명(<strong className="font-extrabold text-yellow-400">{depositorName}</strong>)으로 입금 내역을 확인하고 있습니다.<br />
                            확인이 완료되면 챌린지 수강이 가능합니다.
                        </p>
                        <div className="text-sm text-yellow-400 bg-yellow-900/30 p-4 rounded-lg border border-yellow-700/30 w-full max-w-md">
                            빠른 승인을 원하시면 우측 하단의 카카오톡으로 문의해 주세요.<br />
                            <Link href="https://open.kakao.com/o/gqj7Ebji" className="font-bold underline hover:text-yellow-300 mt-2 inline-block transition-colors">카카오톡 문의하기</Link>
                        </div>
                    </div>
                )}

                {state === 'completed' && (
                    <div className="bg-green-900/20 border border-green-600/50 rounded-xl p-8 text-center flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-green-400 mb-4">✅ 1기 챌린지 접수 완료!</h2>
                        <p className="text-green-200 mb-8 text-lg">
                            입금 확인이 완료되었습니다.<br />
                            지금 바로 시크릿 챌린지 룸에 입장해 보세요.
                        </p>
                        <Link
                            href="/challenge"
                            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-purple-600 hover:bg-purple-700 transition-colors shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]"
                        >
                            시크릿 챌린지 룸 입장하기
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
