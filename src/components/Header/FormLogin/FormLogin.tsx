import { CustomInput } from "../../Common/CustomInput/CustomInput"
import { FC } from "react"
import { useMutation } from "@tanstack/react-query"
import { fetchLogin } from "@/api/auth/fetches"
import { client } from "@/api/client"
import { useForm } from "react-hook-form"
import { LoginInfo, loginInfoScheme } from "@/api/auth/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"

export interface FormLoginProps {
    stateChangeFn: () => void
}

export const FormLogin: FC<FormLoginProps> = ({ stateChangeFn }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginInfo>({
        resolver: zodResolver(loginInfoScheme)
    })

    const router = useRouter()

    const loginMutation = useMutation(
        {
            mutationFn: fetchLogin,
            onSuccess: async () => {
                await client.invalidateQueries({ queryKey: ['profile'] }),
                router.push('#')
            }
        },
        client
    )

    return (
        <form className="auth__form" noValidate={true} onSubmit={handleSubmit((data) => { loginMutation.mutate(data) })}>
            <div className="auth__fields">
                <CustomInput role='email' btnType='email' id='email' placeholder="Email" {...register("email")} errorMessage={errors.email && errors.email.message} />
                <CustomInput role='password' btnType='password' id='password' placeholder="Password" {...register("password")} errorMessage={errors.password && errors.password.message} />
            </div>
            <button className="auth__btn" type="submit" disabled={loginMutation.isPending}>Войти</button>
            {loginMutation.error && <span className="auth__error">{loginMutation.error.message}</span>}
            <button className="auth__btn auth__btn--link" type="button" onClick={stateChangeFn}>Регистрация</button>
        </form>
    )
}