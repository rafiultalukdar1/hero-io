import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApps } from '../../Utilities/AddLocalStorage';
import Install from '../Install/Install';

const Installation = () => {
    const [short, setShort] = useState("");
    const [open, setOpen] = useState(false);
    const [installList, setInstallList] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const installedData = getStoredApps();
        const newInstalledData = installedData.map(id => parseInt(id));
        const installList = data.filter(newApp => newInstalledData.includes(newApp.id));
        setInstallList(installList);
    }, []);

    const handleShort = (type) => {
        setShort(type);
        setOpen(false);
    };

    const sortedList = [...installList].sort((a, b) => {
        const sizeA = parseFloat(a.size);
        const sizeB = parseFloat(b.size);

        if (short === "low") {
            return sizeA - sizeB;
        }
        else if (short === "high") {
            return sizeB - sizeA;
        }
        else {
            return 0;
        }
    });

    const getButtonText = () => {
        if (short === "low") return "Low to High";
        if (short === "high") return "High to Low";
        return "Sort By Size";
    };

    return (
        <div className='py-[55px] md:py-[80px]'>
            <div className='container'>
                <div className='text-center'>
                    <h2 className='text-[#001931] text-[32px] md:text-[40px] lg:text-[48px] font-[700]'>
                        Your Installed Apps
                    </h2>
                    <p className='text-[#627382] text-[16px] sm:text-[18px] md:text-[20px] font-normal pt-[8px] md:pt-[16px]'>
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>

                <div className='flex justify-between items-center mt-[30px] relative'>
                    <h2 className='text-[#001931] text-[24px] font-semibold'>
                        {sortedList.length} Apps Found
                    </h2>

                    <div className='relative'>
                        <button
                            onClick={() => setOpen(!open)}
                            className='text-[#627382] text-[16px] border border-[#D2D2D2] rounded-md px-4 py-2 bg-white hover:bg-gray-50 transition'
                        >
                            {getButtonText()}
                        </button>

                        {open && (
                            <ul className='absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md w-[160px] z-10'>
                                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => handleShort("low")}>
                                    Low to High
                                </li>
                                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => handleShort("high")}>
                                    High to Low
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
                <div className='pt-[22px] flex flex-col gap-[16px]'>
                    {
                        sortedList.map(install => (<Install key={install.id} install={install}></Install>))
                    }
                </div>
            </div>
        </div>
    );
};

export default Installation;
