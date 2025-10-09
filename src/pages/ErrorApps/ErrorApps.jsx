import React from 'react';
import errorImg from '../../assets/images/error-app.png'
import { NavLink } from 'react-router';

const ErrorApps = () => {
    return (
        <>
            <div className='py-[50px] md:py-[80px]'>
                <div className='container text-center'>
                    <img className='mx-auto' src={errorImg} alt="" />
                    <h2 className='text-[#001931] text-center text-[32px] md:text-[40px] lg:text-[48px] font-[600]'>OPPS!! APP NOT FOUND</h2>
                    <p className='text-[#627382] text-center text-[16px] sm:text-[18px] md:text-[20px]'>The App you are requesting is not found on our system.  please try another apps</p>
                    <NavLink to='/apps'><button className='rounded-[4px] bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] py-[12px] px-[38px] text-[#FFF] text-[16px] font-[600] mt-[16px]'>Go Back!</button></NavLink>
                </div>
           </div>
        </>
    );
};

export default ErrorApps;