import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FadeLoader } from 'react-spinners';

const Root = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, [location]);

    return (
        <div>
            <Header></Header>
            <div>
                {loading && (
                    <div className='fixed inset-0 flex items-center justify-center bg-[#ffffff] z-333 h-full'>
                        <FadeLoader color="#632EE3" />
                    </div>
                )}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;