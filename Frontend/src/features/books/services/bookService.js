import { supabase } from "../../../shared/lib/supabase";

// Supabase satırı (snake_case) -> uygulama içi obje (camelCase)
const toDomain = (row) => ({
    id: row.id,
    title: row.title,
    author: row.author,
    category: row.category,
    pageCount: row.page_count,
    coverImage: row.cover_image,
    coverColor: row.cover_color,
    isRead: row.is_read,
    userId: row.user_id,
    createdAt: row.created_at,
});

export const bookService = {

    //kitapları listeleme

    async getBooks(userId) {
        const { data, error } = await supabase
            .from("books")
            .select("*")
            .eq("user_id", userId)
            .order("created_at", { ascending: false });

        if (error) throw error;
        return data.map(toDomain);
    },
    //kitap ekleme
    async addBooks(bookData) {
        const { data, error } = await supabase
            .from("books")
            .insert([{
                title: bookData.title,
                author: bookData.author,
                category: bookData.category,
                page_count: bookData.pageCount,
                cover_image: bookData.coverImage,
                user_id: bookData.userId,
            }])
            .select().single();

        if (error) throw error;
        return toDomain(data);
    },

    async updateBook(id, updates) {
        const payload = {};
        if (updates.isRead !== undefined) payload.is_read = updates.isRead;
        if (updates.title !== undefined) payload.title = updates.title;
        if (updates.author !== undefined) payload.author = updates.author;
        if (updates.category !== undefined) payload.category = updates.category;
        if (updates.pageCount !== undefined) payload.page_count = updates.pageCount;
        if (updates.coverImage !== undefined) payload.cover_image = updates.coverImage;

        const { data, error } = await supabase
            .from("books")
            .update(payload)
            .eq("id", id)
            .select().single();

        if (error) throw error;

        return toDomain(data);
    },
    async deleteBooks(id) {
        const { data, error } = await supabase
            .from("books")
            .delete()
            .eq("id", id)
            .select().single();

        if (error) throw error;
        return toDomain(data);
    }


}
