import React from 'react';
import googlePlay from '../../assets/images/google-play.png'
import appStore from '../../assets/images/apps-store.png'
import { Link } from 'react-router';
import bannerImg from '../../assets/images/banner-img.png'

const Banner = () => {
    return (
        <>
           <div className='container'>
                <h2 className='text-[34px] sm:text-[44px] md:text-[58px] lg:text-[72px] text-[#001931] text-center font-[700]'>We Build<br /> <span className='bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent font-[900]'>Productive</span> Apps</h2>
                <p className='text-[#627382] text-center text-[16px] sm:text-[18px] md:text-[20px] py-[8px] md:py-[16px]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br className='hidden lg:block' /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='py-[20px] sm:py-[40px] lg:py-[55px] flex flex-col sm:flex-row items-center gap-[16px] gap-y-[12px] justify-center'>
                    <Link target='_blank' to='https://play.google.com/store/games?hl=en&pli=1'><button className='flex items-center gap-[10px] py-[12px] px-[24px] rounded-[4px] border border-[#D2D2D2]'><img className='w-[30px] h-[30px] object-cover' src={googlePlay} alt="" /><span className='text-[#001931] text-[18px] md:text-[20px] font-[600]'>Google Play</span></button></Link>
                    <Link target='_blank' to='https://www.apple.com/app-store/'><button className='flex items-center gap-[10px] py-[12px] px-[24px] rounded-[4px] border border-[#D2D2D2]'><img className='w-[30px] h-[30px] object-cover' src={appStore} alt="" /><span className='text-[#001931] text-[18px] md:text-[20px] font-[600]'>App Store</span></button></Link>
                </div>
                <div>
                    <img className='mx-auto' src={bannerImg} alt="" />
                </div>
           </div>
        </>
    );
};

export default Banner;