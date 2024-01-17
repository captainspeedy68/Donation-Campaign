// import { PieChart } from '@mui/x-charts';
// import React from 'react';
import { getStoredDonationIds } from '../../Utility/LocalStorage';
// import { Pie } from 'react-chartjs-2';
// import PieChartDonationas from '../PieChartDonationas/PieChartDonationas';
// import { getStoredDonationIds } from '../../Utility/LocalStorage';
// import { useEffect } from 'react';
// import { useLoaderData } from 'react-router-dom';
import Trial from '../Trial/Trial';

const Statistics = () => {
    const storedData = getStoredDonationIds();
    const data = (storedData.length * 100) / 12;
    return (
        <div >
            <div className="flex justify-center">
                <Trial data={data}></Trial>
            </div>
            <div className='md:flex justify-center'>
                <div className='flex m-10 items-center'>
                    <p>Your Donation</p>
                    <div className='w-28 h-3 bg-[#00C49F] ml-2'></div>
                </div>
                <div className='flex m-10 items-center'>
                    <p>Total Donation</p>
                    <div className='w-28 h-3 bg-[#FF4444] ml-2'></div>
                </div>
            </div>

        </div>
    );
};

export default Statistics;