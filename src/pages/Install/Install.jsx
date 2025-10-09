import React from 'react';
import downloadImg from '../../assets/images/download.png';
import starImg from '../../assets/images/star.png';

const Install = ({install, handleRemove}) => {

    const {image, title, downloads, ratingAvg, size, id} = install;

    return (
        <>
            <div className='rounded-[4px] bg-[#FFFFFF] p-[16px] flex flex-col sm:flex-row gap-[16px] items-center justify-between'>
                <div className='flex items-center gap-[16px]'>
                    <img className='w-[80px] h-[80px] object-cover rounded-[8px]' src={image} alt="" />
                    <div>
                        <h4 className='text-[#001931] text-[20px] font-medium'>{title}</h4>
                        <div className='flex items-center gap-[16px]'>
                            <p className='flex items-center gap-[4px]'><img src={downloadImg} alt="" /><span className='text-[#00D390] text-[15px] font-medium'>{downloads} M</span></p>
                            <p className='flex items-center gap-[4px]'><img src={starImg} alt="" /><span className='text-[#F81] text-[15px] font-medium'>{ratingAvg}</span></p>
                            <p className='text-[#627382] text-[16px]'>{size} MB</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleRemove(id)} className='text-[#FFF] text-[16px] md:text-[20px] font-[600] rounded-[4px] bg-[#00D390] px-[20px] py-[10px]'>Uninstall</button>
                </div>
            </div>
        </>
    );
};

export default Install;