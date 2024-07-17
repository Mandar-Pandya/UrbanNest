import { createClient } from "@supabase/supabase-js"

export const uploadAvatar = async(image:File) => {
    const supabaseurl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabasekey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    const supabase =  createClient(supabaseurl,supabasekey)

    const data = await supabase.storage.from('avatar').upload(`${image?.name}_${Date.now()}`,image);

    console.log(data)

    const urlData = await supabase.storage.from('avatar').getPublicUrl(data?.data?.path!)

    return urlData?.data?.publicUrl

}