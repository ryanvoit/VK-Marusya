import Image from "next/image"
import { Icon } from "@/components/Common/Icon/Icon"
import { AuthForm } from "../AuthForm/AuthForm"

export const AuthComponent = () => {
    return (
        <div className="auth" id="auth">
            <Image src={'/marusya-black.svg'} alt={'marusya-black'} width={157} height={35} className="auth__img" />
            <AuthForm />
            <a href="#" className="auth__exit" aria-label="Закрыть">
                <Icon role="cross" />
            </a>
        </div>
    )
}