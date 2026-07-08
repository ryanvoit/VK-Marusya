import { CustomInput } from "../../Common/CustomInput/CustomInput"
import { FC } from "react"
import { useMutation } from "@tanstack/react-query"
import { fetchRegister } from "@/api/auth/fetches"
import { client } from "@/api/client"
import { useForm } from "react-hook-form"
import { RegisterInfo, registerInfoScheme } from "@/api/auth/types"
import { zodResolver } from "@hookform/resolvers/zod"

export interface FormRegisterProps {
    stateChangeFn: () => void,
    stateSuccessChangeFn: () => void
}

export const FormRegister: FC<FormRegisterProps> = ({ stateChangeFn, stateSuccessChangeFn }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterInfo>({
        resolver: zodResolver(registerInfoScheme)
    })

    const registerMutation = useMutation(
        {
            mutationFn: fetchRegister,
            onSuccess: () => {
                stateSuccessChangeFn()
            }
        },
        client
    )

    return (
        <form className="auth__form" onSubmit={handleSubmit((data) => { registerMutation.mutate(data) })}>
            <div className="auth__fields">
                <CustomInput role='email' btnType='email' id='email' placeholder="Email" {...register("email")} errorMessage={errors.email && errors.email.message}/>
                <CustomInput role='user' btnType='text' id='user-name' placeholder='Name' {...register("name")} errorMessage={errors.name && errors.name.message}/>
                <CustomInput role='user' btnType='text' id='user-lastname' placeholder='Last name' {...register("surname")} errorMessage={errors.surname && errors.surname.message}/>
                <CustomInput role='password' btnType='password' id='password' placeholder="Password" {...register("password")} errorMessage={errors.password && errors.password.message}/>
            </div>
            <button className="auth__btn" type="submit" disabled={registerMutation.isPending}>Создать аккаунт</button>
            {registerMutation.error && <span className="auth__error">{registerMutation.error.message}</span>}
            <button className="auth__btn auth__btn--link" type="button" onClick={stateChangeFn}>У меня есть пароль</button>
        </form>
    )
}