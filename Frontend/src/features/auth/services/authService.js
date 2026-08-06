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
                    full_name: name,
                },
            },
        });

        if (error) {
            throw error;
        }

        return data; // Profil trigger ile otomatik oluşturulur
    },

    // Email OTP doğrulama
    async verifyEmailOtp(email, token) {
        const { data, error } = await supabase.auth.verifyOtp({
            email,
            token,
            type: 'signup',
        });
        if (error) throw error;
        return data;
    },

    // OTP kodunu tekrar gönder
    async resendOtp(email) {
        const { data, error } = await supabase.auth.resend({
            type: 'signup',
            email,
        });
        if (error) throw error;
        return data;
    },


    //çıkış yapma
    async signOut() {
        const { error } = await supabase.auth.signOut();
        if (error) {
            throw error;
        }
    },

    //aktif kullanıcıyı alma
    async getCurrentUser() {
        const { data: { user }, error } = await supabase.auth.getUser();
        if (error) {
            throw error;
        }
        return user; //kullanıcı giriş yaptıysa kullanıcı nesnesini döner
    },

    //şifre güncelleme
    async updatePassword(newPassword) {
        const { data, error } = await supabase.auth.updateUser({
            password: newPassword
        });
        if (error) {
            throw error;
        }
        return data;
    },
    //şifre sıfırlama
    //şifre sıfırlama
    async resetPassword(email) {
        const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: "bookshelf://reset-password",
        });
        if (error) throw error;
        return data;
    },
    async onAuthStateChange(callback) {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            callback(session, event);
        });
        return subscription;
    },

    //session token 
    async getSession() {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        return session;
    },

    //şifre sıfırlama code doğrulama
    async verifyRecoveryOtp(email, token) {
        const { data, error } = await supabase.auth.verifyOtp({
            email,
            token,
            type: "recovery"
        })
        if (error) throw error;
        return data;
    },

    // Kullanıcının user_metadata alanını (mevcut verilerle birleştirerek) günceller
    async updateUserMetadata(metadata) {
        const currentUser = await this.getCurrentUser();
        const { data, error } = await supabase.auth.updateUser({
            data: { ...currentUser?.user_metadata, ...metadata },
        });
        if (error) throw error;
        return data.user;
    },
};