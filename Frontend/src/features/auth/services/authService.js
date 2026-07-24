import { supabase } from "../../../shared/lib/supabase";

export const authService = {
    // Giriş Yapma
    async signInWithPassword(email, password) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            throw error;
        }
        return data;
    },

    // Kayıt Olma
    async signUp(name, email, password) {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: name, // Ekstra bilgileri 'options.data' içine koyuyoruz!
                },
            },
        });

        if (error) {
            throw error;
        }
        return data;
    },
};