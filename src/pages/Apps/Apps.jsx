import { Search } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { NavLink, useLoaderData } from 'react-router';
import AppItems from '../AppItems/AppItems';
import { FadeLoader } from 'react-spinners';

const Apps = () => {
    const apps = useLoaderData();
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchApps, setSearchApps] = useState(apps);

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => {
            const term = search.trim().toLowerCase();
            const filtered = term ? apps.filter(app => app.title && app.title.toLowerCase().includes(term)) : apps;
            setSearchApps(filtered);
            setLoading(false);
        }, 500);
        
        return () => clearTimeout(timeout);
    }, [search, apps]);

    return (
        <div className='py-[55px] md:py-[80px]'>
            <div className='container'>
                <div className='text-center'>
                    <h2 className='text-[#001931] text-[32px] md:text-[40px] lg:text-[48px] font-[700]'>
                        Our All Applications
                    </h2>
                    <p className='text-[#627382] text-[16px] sm:text-[18px] md:text-[20px] font-normal pt-[8px] md:pt-[16px]'>
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>

                <div className='py-[46px] pb-[22px] flex flex-col sm:flex-row justify-between items-center gap-[20px]'>
                    <h2 className='text-[#001931] text-[20px] md:text-[24px] font-[600]'>
                        ({searchApps.length}) Apps Found
                    </h2>
                    <div className="border border-[#D2D2D2] rounded py-[10px] px-[16px] flex items-center gap-[10px] w-full sm:w-[300px]">
                        <Search />
                        <input value={search} onChange={e => setSearch(e.target.value)} type="search" placeholder="Search Apps" className='w-full outline-none text-[#627382] text-[16px] placeholder:text-[#627382]' />
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {loading ? (
                        <div className="col-span-12 min-h-[120px] flex items-center justify-center">
                            <FadeLoader color='#632EE3' />
                        </div>
                    ) : searchApps.length > 0 ? (
                        searchApps.map(app => (
                            <AppItems key={app.id} app={app}></AppItems>
                        ))
                    ) : (
                        <div className='col-span-12 text-center'>
                            <h2 className='text-[#001931] text-center text-[32px] md:text-[40px] lg:text-[55px] font-[600] pt-[35px] md:pt-[50px] lg:pt-[70px]'>NO APPS FOUND!</h2>
                            <NavLink to='/'><button className='rounded-[4px] bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] py-[12px] px-[38px] text-[#FFF] text-[16px] font-[600] mt-[16px]'>Show All Apps</button></NavLink>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Apps;