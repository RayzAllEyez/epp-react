import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/authService';
import Logo from '../assets/login/logo-eperpus.png'
import Ilustration from '../assets/login/login-ilustration.svg'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleForm = async (event) => {
        event.preventDefault();
        try {
            await AuthService.login(username, password).then(
                () => {
                    setTimeout(100000)
                    navigate("/");
                    // window.location.reload();
                },
            );
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='flex items-center justify-evenly h-screen'>
            <div className='self-center md:6 sm:12 col-span-12 ml-11 mt-9'>
                <img className='m-auto' alt='logo' src={Logo} />
                <div className='flex flex-col text-left'>
                    <h1 className='w-85 h-38 font-bold not-italic text-[28px] font-nunito mt-[18px]'>Masuk</h1>
                    <p className='font-nunito text-[#A7B0BE]'>masuk ke akun ePerpus anda untuk mulai mengelola perpustakaan</p>
                </div>
                    <form onSubmit={handleForm}>
                        <div className='flex flex-col'>
                            <label className='mt-[40px] font-nunito not-italic font-bold text-lg text-[#091A33]'>Nama Pengguna / Email</label>
                            <input
                                className='w-[588px] h-14 p-4 rounded-lg box-border border font-nunito'
                                type="text"
                                value={username}
                                placeholder="example@gmail.com"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label className='mt-[32px] font-nunito not-italic font-bold text-lg text-[#091A33]'>Kata Sandi</label>
                            <input
                                className='w-[588px] h-14 p-4 rounded-lg box-border border font-nunito'
                                type="password"
                                placeholder="Kata Sandi Anda"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className='bg-[#327BB7] hover:bg-blue-700 text-white w-[588px] h-[56px] rounded-[10px] mt-[40px] font-nunito'>Masuk</button>
                    </form>
              
            </div>
            <div className='flex justify-end'>
                <img className='object-scale-down h-800 w-585' alt='login-ilustration' src={Ilustration} />
            </div>
        </div>
    )
}

export default Login;