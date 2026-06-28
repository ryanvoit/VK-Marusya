import Image from "next/image"
import './formLogin.css'

export const FormLogin = () => {
    // <input type="email" id="email" placeholder="Email" className="custom-input__field"/>
                  //   <Image src={'/email.svg'} alt="email" width={24} height={24} />
    return (
            <form className="auth__form">
                <div className="custom-input">
                    <input type="email" id="email" placeholder="Email" className="custom-input__field"/>
                    <Image src={'/email.svg'} alt='email' width={24} height={24} className="custom-input__image" />
                </div>
                <div className="custom-input">
                    <input type="password" id="password" placeholder="Password" className="custom-input__field"/>
                    <Image src={'/pasword.svg'} alt='pasword' width={24} height={24} className="custom-input__image" />
                </div>
            </form>
    )
}