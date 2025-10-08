import React, { useEffect, useState } from 'react';
import HomeApps from '../HomeApps/HomeApps';
import { NavLink } from 'react-router';

const TrendingApps = () => {

    const [apps, setApps] = useState([]);

    useEffect(() => {
        fetch('appsData.json')
            .then(res => res.json())
            .then(data => {
                setApps(data);
            })
    }, [])

    return (
        <>
            <div className='pt-[50px] md:pt-[80px]'>
                <div className='container'>
                    <h2 className='text-[#001931] text-center text-[32px] md:text-[40px] lg:text-[48px] font-[700]'>Trending Apps</h2>
                    <p className='text-[#627382] text-center text-[16px] md:text-[18px] lg:text-[20px] font-[400] md:pt-[16px]'>Explore All Trending Apps on the Market developed by us</p>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] mt-[40px]'>
                        {
                            apps.slice(0, 8).map(singleApps => <HomeApps key={singleApps.id} singleApps={singleApps}></HomeApps>)
                        }
                    </div>
                    <div className='text-center pt-[50px]'>
                        <NavLink to='/apps'><button className='rounded-[4px] bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] py-[12px] px-[36px] text-[#FFF] text-[16px] font-[600]'>Show All</button></NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrendingApps;