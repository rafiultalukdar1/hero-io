import { Search } from 'lucide-react';
import React from 'react';
import { useLoaderData } from 'react-router';
import AppItems from '../AppItems/AppItems';

const Apps = () => {

    const apps = useLoaderData();

    return (
        <>
           <div className='py-[55px] md:py-[80px]'>
                <div className='container'>
                    <div className='text-center'>
                        <h2 className='text-[#001931] text-[32px] md:text-[40px] lg:text-[48px] font-[700]'>Our All Applications</h2>
                        <p className='text-[#627382] text-[16px] sm:text-[18px] md:text-[20px] font-normal pt-[8px] md:pt-[16px]'>Explore All Apps on the Market developed by us. We code for Millions</p>
                    </div>
                    <div className='py-[46px] pb-[22px] flex flex-col sm:flex-row justify-between items-center gap-[20px]'>
                        <h2 className='text-[#001931] text-[20px] md:text-[24px] font-[600]'>({apps.length}) Apps Found</h2>
                        <div class="border border-[#D2D2D2] rounded py-[10px] px-[16px] flex items-center gap-[10px]">
                            <Search />
                            <input type="text" placeholder="Search Apps" className='w-full outline-none text-[#627382] text-[16px] placeholder:text-[#627382]' />
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] mt-[40px]'>
                        {
                            apps.map(app => <AppItems key={app.id} app={app}></AppItems>)
                        }
                    </div>
                </div>
           </div>
        </>
    );
};

export default Apps;