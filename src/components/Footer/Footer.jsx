import React from 'react';
import footerLogo from '../../assets/images/footer-logo.png'
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <>
            <div className='bg-[#001931]'>
                <div className='container'>
                    <div className='py-[35px] grid grid-cols-12 gap-[20px] gap-y-[30px] border-b border-[#e5e7eb91]'>
                        <div className='col-span-12 sm:col-span-6 lg:col-span-4'>
                            <img src={footerLogo} alt="" />
                            <p className='font-[18px] text-[#fff] pt-[20px]'>Your go-to hub for exploring, discovering,<br /> and downloading top-notch mobile apps.</p>
                        </div>
                        <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                            <h4 className='footer-head'>Quick Links</h4>
                            <ul className='flex flex-col gap-[12px]'>
                                <li className='text-[#fff] text-[16px]'>Home</li>
                                <li className='text-[#fff] text-[16px]'>Apps</li>
                                <li className='text-[#fff] text-[16px]'>Installation</li>
                            </ul>
                        </div>
                        <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                            <h4 className='footer-head'>Support</h4>
                            <ul className='flex flex-col gap-[12px]'>
                                <li className='text-[#fff] text-[16px]'>Help Center</li>
                                <li className='text-[#fff] text-[16px]'>Privacy Policy</li>
                                <li className='text-[#fff] text-[16px]'>Terms of Service</li>
                            </ul>
                        </div>
                        <div className='col-span-12 sm:col-span-6 lg:col-span-4'>
                            <h4 className='footer-head'>Contact Us</h4>
                            <ul className='flex flex-col gap-[12px]'>
                                <li className='text-[#fff] text-[16px] flex items-center gap-[8px]'><Mail size={18} />support@heroio.com</li>
                                <li className='text-[#fff] text-[16px] flex items-center gap-[8px]'><Phone size={18} />+1 (416) xxx xxxx</li>
                                <li className='text-[#fff] text-[16px] flex items-center gap-[8px]'><MapPin size={18} />Toronto, ON, Canada</li>
                            </ul>
                        </div>
                    </div>
                    <div className='py-[25px] text-center'>
                        <p className='text-[#FAFAFA] text-[16px]'>Copyright © 2025 - All right reserved</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;