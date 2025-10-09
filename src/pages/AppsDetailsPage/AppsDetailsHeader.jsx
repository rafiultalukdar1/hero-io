import React, { useEffect, useState } from 'react';
import downloadImg from '../../assets/images/apps-download.png';
import starImg from '../../assets/images/apps-star.png';
import likeImg from '../../assets/images/apps-like.png';
import { addStored, getStoredApps } from '../../Utilities/AddLocalStorage';

const AppsDetailsHeader = ({singleApps}) => {

    const {image, title, companyName, downloads, size, ratingAvg, reviews, id} = singleApps;

    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const installedApps = getStoredApps();
        if (installedApps.includes(id)) {
            setClicked(true);
        }
    }, [id]);

    const handleInstallApps = (id) => {
        addStored(id);
        setClicked(true)
    }

    return (
        <>
            <div className='grid grid-cols-12 items-center lg:gap-[40px] gap-y-[30px]'>
                <div className='col-span-12 lg:col-span-5 xl:col-span-3'>
                    <img className='w-[350px] h-[350px] object-cover rounded-[4px] mx-auto' src={image} alt="" />
                </div>
                <div className='col-span-12 lg:col-span-7 xl:col-span-9 flex flex-col gap-[30px]'>
                    <div>
                        <h2 className='text-[#001931] text-[32px] font-[700]'>{title}</h2>
                        <p className='text-[#627382] text-[20px]'>Developed by <span className='bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent font-[600]'>{companyName}</span></p>
                    </div>
                    <div>
                        <span className='bg-[#00193144] h-[1px] w-full block'></span>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-[25px] sm:gap-[50px] md:gap-[80px]'>
                        <div>
                            <img src={downloadImg} alt="" />
                            <p className='text-[#001931] text-[16px] pt-[8px]'>Downloads</p>
                            <h4 className='text-[#001931] text-[30px] md:text-[38px] font-[800]'>{downloads} M</h4>
                        </div>
                        <div>
                            <img src={starImg} alt="" />
                            <p className='text-[#001931] text-[16px] pt-[8px]'>Average Ratings</p>
                            <h4 className='text-[#001931] text-[30px] md:text-[38px] font-[800]'>{ratingAvg}</h4>
                        </div>
                        <div>
                            <img src={likeImg} alt="" />
                            <p className='text-[#001931] text-[16px] pt-[8px]'>Total Reviews</p>
                            <h4 className='text-[#001931] text-[30px] md:text-[38px] font-[800]'>{reviews}</h4>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => handleInstallApps(id)} className={`text-[16px] md:text-[20px] font-[600] rounded-[4px] px-[20px] py-[10px] ${clicked ? 'bg-[#DDDDDD] text-[#000] cursor-not-allowed' : 'bg-[#00D390] hover:bg-[#00c280] text-[#FFF]'}`}>{clicked ? "Installed" : `Install Now (${size} MB)`}</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppsDetailsHeader;