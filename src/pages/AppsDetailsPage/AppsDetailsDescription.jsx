import React from 'react';

const AppsDetailsDescription = ({description}) => {
    return (
        <>
            <div className='pt-[40px]'>
                <h4 className='text-[#001931] text-2xl font-semibold pb-[12px] md:pb-[24px]'>Description</h4>
                <p className='text-[#627382] text-[16px] sm:text-[18px] md:text-[20px] font-normal'>{description}</p>
            </div>
        </>
    );
};

export default AppsDetailsDescription;