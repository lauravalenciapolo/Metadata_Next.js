export interface DataUser {
    email:string
    id: number
    image: string
    last_name: string
    name: string
}
export interface Reactions {
    reaction: string
    user: number
}

export interface DataFeed {
    commentsCount: number
    habit_id: number
    habit_name: string
    id: number
    image_url: string
    inserted_at: string
    privacy_id: string
    reactions: Reactions[];
    text: string
    user: DataUser
    user_id: number
}
