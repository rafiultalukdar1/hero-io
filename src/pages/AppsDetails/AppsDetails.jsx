// import React from 'react';
// import { useLoaderData, useParams } from 'react-router';
// import AppsDetailsHeader from '../AppsDetailsPage/AppsDetailsHeader';
// import AppsDetailsCharts from '../AppsDetailsPage/AppsDetailsCharts';
// import AppsDetailsDescription from '../AppsDetailsPage/AppsDetailsDescription';
// import ErrorApps from '../ErrorApps/ErrorApps';

// const AppsDetails = () => {

//     const { id } = useParams();
//     const newId = parseInt(id);
//     const data = useLoaderData();
//     const singleApps = data.find(app => app.id === newId);

//     if (!singleApps) {
//         return <ErrorApps />;
//     }

//     return (
//         <>
//             <div className='py-[55px] md:py-[80px]'>
//                 <div className='container'>
//                     <AppsDetailsHeader singleApps={singleApps}></AppsDetailsHeader>
//                     <AppsDetailsCharts newWatings={singleApps.ratings}></AppsDetailsCharts>
//                     <AppsDetailsDescription description={singleApps.description}></AppsDetailsDescription>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AppsDetails;








import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import AppsDetailsHeader from '../AppsDetailsPage/AppsDetailsHeader';
import AppsDetailsCharts from '../AppsDetailsPage/AppsDetailsCharts';
import AppsDetailsDescription from '../AppsDetailsPage/AppsDetailsDescription';
import ErrorApps from '../ErrorApps/ErrorApps';

const AppsDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const newId = Number(id);
    if (isNaN(newId)) {
        return <ErrorApps />;
    }

    const singleApp = data.find(app => app.id === newId);

    if (!singleApp) {
        return <ErrorApps />;
    }

    return (
        <div className='py-[55px] md:py-[80px]'>
            <div className='container'>
                <AppsDetailsHeader singleApps={singleApp} />
                <AppsDetailsCharts newWatings={singleApp.ratings} />
                <AppsDetailsDescription description={singleApp.description} />
            </div>
        </div>
    );
};

export default AppsDetails;
