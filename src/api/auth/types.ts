import z from "zod"

export const registerInfoScheme = z.object({
    email: z.string().email('Некорректный Email').nonempty('Email обязателен'),
    password: z.string().nonempty('Пароль обязателен').min(8, 'Минимум 8 символов'),
    name: z.string().nonempty('Имя обязателено'),
    surname: z.string().nonempty('Фамилия обязательна'),
})

export const loginInfoScheme = z.object({
    email: z.string().email('Некорректный Email').nonempty('Email обязателен'),
    password: z.string().nonempty('Пароль обязателен'),
})

export const profileDataScheme = z.object({
    favourites: z.array(z.string()),
    email: z.string(),
    name: z.string(),
    surname: z.string(),
})

// AuthData now: 
// email: ryanvoit000@gmail.com
// password: 123456789

export type RegisterInfo = z.infer<typeof registerInfoScheme>
export type LoginInfo = z.infer<typeof loginInfoScheme>
export type ProfileInfo = z.infer<typeof profileDataScheme>


