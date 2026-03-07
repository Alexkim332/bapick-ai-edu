import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()

  // 만약 Vercel 환경 변수가 아직 적용되지 않았거나 비어있다면, 사이트가 터지지 않게 무시하고 통과시킵니다.
  if (!supabaseUrl || !supabaseKey) {
    console.warn("Supabase URL or Key is missing in Edge Middleware.");
    return supabaseResponse;
  }

  try {
    const supabase = createServerClient(
      supabaseUrl,
      supabaseKey,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
            supabaseResponse = NextResponse.next({
              request,
            })
            cookiesToSet.forEach(({ name, value, options }) =>
              supabaseResponse.cookies.set(name, value, options)
            )
          },
        },
      }
    )

    const {
      data: { user },
    } = await supabase.auth.getUser()

    // Protect the premium routes. If not logged in and trying to access /premium/[...], redirect to login.
    if (
      !user &&
      typeof request.nextUrl.pathname === 'string' &&
      request.nextUrl.pathname.startsWith('/premium/')
    ) {
      const url = request.nextUrl.clone()
      url.pathname = '/login'
      return NextResponse.redirect(url)
    }

    return supabaseResponse
  } catch (error) {
    console.error("Middleware Supabase Error:", error);
    // 에러가 발생해도 사이트 접속이 차단되지 않도록 기본 응답을 반환합니다.
    return supabaseResponse
  }
}

