import React from 'react';
import Banner from '../../components/Banner/Banner';
import TrustedSection from '../../components/TrustedSection/TrustedSection';
import TrendingApps from '../TrendingApps/TrendingApps';

const HomePage = () => {
    return (
        <>
            <div className='py-[50px] md:py-[80px]'>
                <Banner></Banner>
                <TrustedSection></TrustedSection>
                <TrendingApps></TrendingApps>
            </div>
        </>
    );
};

export default HomePage;