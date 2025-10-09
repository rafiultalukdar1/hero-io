import React from 'react';
import download from '../../assets/images/download.png'
import star from '../../assets/images/star.png'
import { Link } from 'react-router';


const HomeApps = ({singleApps}) => {

    const {image, title, downloads, ratingAvg, id} = singleApps;

    return (
        <>
        <Link to={`/appsDetails/${id}`}>
            <div className='rounded-[8px] bg-[#FFF] shadow-[0_10px_20px_-12px_rgba(0,0,0,0.10)] p-[16px]'>
                <img className='h-[310px] w-[100%] object-cover rounded-[6px]' src={image} alt="" />
                <h4 className='text-[#001931] text-[20px] font-[500] py-[16px]'>{title}</h4>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-[8px] py-[6px] px-[10px] rounded-[4px] bg-[#F1F5E8]'>
                        <img src={download} alt="" />
                        <span className='text-[#00D390] text-[15px] font-[500]'>{downloads} M</span>
                    </div>
                    <div className='flex items-center gap-[8px] py-[6px] px-[10px] rounded-[4px] bg-[#FFF0E1]'>
                        <img src={star} alt="" />
                        <span className='text-[#FF8811] text-[16px] font-[500]'>{ratingAvg}</span>
                    </div>
                </div>
            </div>
        </Link>
        </>
    );
};

export default HomeApps;