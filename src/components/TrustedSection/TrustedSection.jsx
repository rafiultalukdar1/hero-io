import React from 'react';

const TrustedSection = () => {
    return (
        <>
           <div className='py-[55px] md:py-[80px] bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)]'>
                <div className='container'>
                    <h2 className='text-[#FFF] text-center text-[32px] md:text-[40px] lg:text-[48px] font-[700]'>Trusted by Millions, Built for You</h2>
                    <div className='pt-[40px] grid md:grid-cols-3 gap-[20px] gap-y-[30px]'>
                        <div className='flex flex-col gap-[8px] md:gap-[16px] text-center'>
                            <p className='text-[#FFF] text-[16px]'>Total Downloads</p>
                            <h1 className='text-[#FFF] text-[38px] sm:text-[42px] md:text-[50px] lg:text-[64px] font-[800]'>29.6M</h1>
                            <p className='text-[#FFF] text-[16px]'>21% more than last month</p>
                        </div>
                        <div className='flex flex-col gap-[8px] md:gap-[16px] text-center'>
                            <p className='text-[#FFF] text-[16px]'>Total Reviews</p>
                            <h1 className='text-[#FFF] text-[38px] sm:text-[42px] md:text-[50px] lg:text-[64px] font-[800]'>906K</h1>
                            <p className='text-[#FFF] text-[16px]'>46% more than last month</p>
                        </div>
                        <div className='flex flex-col gap-[8px] md:gap-[16px] text-center'>
                            <p className='text-[#FFF] text-[16px]'>Active Apps</p>
                            <h1 className='text-[#FFF] text-[38px] sm:text-[42px] md:text-[50px] lg:text-[64px] font-[800]'>132+</h1>
                            <p className='text-[#FFF] text-[16px]'>31 more will Launch</p>
                        </div>
                    </div>
                </div>
           </div>
        </>
    );
};

export default TrustedSection;