import { supabase } from "../../../shared/lib/supabase";

// Supabase satırı (snake_case) -> uygulama içi obje (camelCase)
const toDomain = (row) => ({
    id: row.id,
    bookId: row.book_id,
    pagesRead: row.pages_read,
    userId: row.user_id,
    createdAt: row.created_at,
});

export const readingLogService = {
    async getLogs(userId) {
        const { data, error } = await supabase
            .from("reading_logs")
            .select("*")
            .eq("user_id", userId)
            .order("created_at", { ascending: false });

        if (error) throw error;
        return data.map(toDomain);
    },

    async addLog({ userId, bookId, pagesRead }) {
        const { data, error } = await supabase
            .from("reading_logs")
            .insert([{ user_id: userId, book_id: bookId, pages_read: pagesRead }])
            .select().single();

        if (error) throw error;
        return toDomain(data);
    },

    async deleteLog(id) {
        const { data, error } = await supabase
            .from("reading_logs")
            .delete()
            .eq("id", id)
            .select();

        if (error) throw error;
        // RLS izin vermediğinde Supabase hata değil, 0 satır döner - bunu da hataya çeviriyoruz
        if (!data || data.length === 0) {
            throw new Error("Kayıt silinemedi. Yetkiniz olmayabilir.");
        }
    },
};
