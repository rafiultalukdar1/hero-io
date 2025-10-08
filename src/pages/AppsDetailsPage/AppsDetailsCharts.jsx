import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const StarRatingChart = ({ newWatings }) => {
  return (
    <>
        <div className='py-[40px] mt-[40px] border-t border-b border-[#0019314b]'>
            <h2 className='text-[#001931] text-[24px] font-semibold pb-[24px]'>Ratings</h2>
            <div>
                <ResponsiveContainer width="100%" height={260}>
                <BarChart
                    data={newWatings}
                    layout="vertical"
                    margin={{ top: 5, bottom: 5 }}
                    >
                    <XAxis type="number" axisLine={false} tickLine={false} />
                    <YAxis type="category" dataKey="name" reversed axisLine={false} tickLine={false} />
                    <Tooltip cursor={false} />
                    <Bar dataKey="count" fill="#FF8811" barSize={32} isAnimationActive={false} />
                </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    </>
  );
};

export default StarRatingChart;
