import z from "zod"

const registerPayloadScheme = z.object({
    email: z.string().email('Некорректный Email').nonempty('Email обязателен'),
    name: z.string().nonempty('Имя обязателено'),
    surname: z.string().nonempty('Фамилия обязательна'),
    password: z.string().nonempty('Пароль обязателен').min(8, 'Минимум 8 символов')
})

export type RegisterPayload = z.infer<typeof registerPayloadScheme>

export const registerInfoScheme = registerPayloadScheme
    .extend({
        passwordConfirmation: z.string().nonempty('Пароль обязателен').min(8, 'Минимум 8 символов'),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
        message: "Пароли не совпадают",
        path: ["passwordConfirmation"],
    })

export type RegisterInfo = z.infer<typeof registerInfoScheme>

export const loginInfoScheme = z.object({
    email: z.string().email('Некорректный Email').nonempty('Email обязателен'),
    password: z.string().nonempty('Пароль обязателен'),
})

export const profileDataScheme = z.object({
    favorites: z.array(z.string()),
    email: z.string(),
    name: z.string(),
    surname: z.string(),
})

// AuthData now: 
// email: ryanvoit000@gmail.com
// password: 123456789

export type LoginInfo = z.infer<typeof loginInfoScheme>
export type ProfileInfo = z.infer<typeof profileDataScheme>


