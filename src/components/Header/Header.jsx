import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import logoImg from '../../assets/images/nav-logo.png'
import { Github, TextAlignJustify, X } from 'lucide-react';

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={`absolute top-0 w-[290px] h-full bg-[#fff] shadow-[6px_0_6px_rgba(0,0,0,0.1)] flex flex-col gap-[35px] duration-500 z-[9999]  ${open ? 'left-0' : 'left-[-290px]'}`}>
                <div className='py-[25px] px-[15px] border-b border-[#E9E9E9]'>
                    <img className='max-w-[110px] cursor-pointer' src={logoImg} alt="" />
                </div>
                <div>
                    <nav className='nav-bar flex flex-col gap-[12px] px-[15px]'>
                        <NavLink className='text-[rgba(0,0,0,0.90)] text-[16px] font-[500]' to='/'>Home</NavLink>
                        <NavLink className='text-[rgba(0,0,0,0.90)] text-[16px] font-[500]' to='/apps'>Apps</NavLink>
                        <NavLink className='text-[rgba(0,0,0,0.90)] text-[16px] font-[500]' to='/installation'>Installation</NavLink>
                    </nav>
                </div>
                <div>
                    <Link target='_blank' to='https://github.com/rafiultalukdar1'><button className='flex items-center gap-[10px] text-[#FFF] text-[16px] font-[600] rounded-[4px] bg-[linear-gradient(125deg,_#632EE3_5.68%,_#9F62F2_88.38%)] px-[30px] py-[10px] mx-[15px]'><Github size={18} /><span>Contribute</span></button></Link>
                </div>
            </div>
            
            <div className='py-[25px] border-b border-[#E9E9E9] bg-[#fff]'>
                <div className='container flex justify-between items-center'>
                    <div>
                        <NavLink to='/'><img src={logoImg} alt="" /></NavLink>
                    </div>
                    <div className='nav-bar items-center gap-[32px] hidden md:flex'>
                        <NavLink className='text-[rgba(0,0,0,0.90)] text-[16px] font-[500]' to='/'>Home</NavLink>
                        <NavLink className='text-[rgba(0,0,0,0.90)] text-[16px] font-[500]' to='/apps'>Apps</NavLink>
                        <NavLink className='text-[rgba(0,0,0,0.90)] text-[16px] font-[500]' to='/installation'>Installation</NavLink>
                    </div>
                    <div className='hidden md:block'>
                        <Link target='_blank' to='https://github.com/rafiultalukdar1'><button className='flex items-center gap-[10px] text-[#FFF] text-[16px] font-[600] rounded-[4px] bg-[linear-gradient(125deg,_#632EE3_5.68%,_#9F62F2_88.38%)] px-[16px] py-[10px]'><Github size={18} /><span>Contribute</span></button></Link>
                    </div>
                    <div className='md:hidden'>
                        <span className='cursor-pointer' onClick={() => setOpen(!open)}>{open ? <X /> : <TextAlignJustify />}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;