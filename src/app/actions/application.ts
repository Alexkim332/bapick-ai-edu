'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function submitApplication(depositorName: string) {
    const supabase = await createClient()

    const { data: { user }, error: userError } = await supabase.auth.getUser()
    if (userError || !user) {
        return { error: '로그인이 필요합니다.' }
    }

    const { error } = await supabase
        .from('profiles')
        .update({
            payment_status: 'pending',
            depositor_name: depositorName
        })
        .eq('id', user.id)

    if (error) {
        return { error: error.message }
    }

    revalidatePath('/mypage')
    return { success: true }
}
