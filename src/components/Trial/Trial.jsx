// import { LineChart, Line } from 'recharts';
// import { PureComponent } from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';
// import Donation from '../Donation/Donation';


const Trial = ({ data }) => {
    // const data1 = [
    //     { name: 'Group A', value: 400 },
    //     { name: 'Group B', value: 300 },
    //     { name: 'Group C', value: 300 },
    //     { name: 'Group D', value: 200 },
    //     { name: 'Group E', value: 278 },
    //     { name: 'Group F', value: 189 },
    // ];
    const originalData = data;
    const updatedData = originalData;
    const totalLeft = 100 - data;

    const data2 = [
        { name: 'Group A', value: totalLeft },
        { name: 'Group B', value: updatedData },
    ];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };
    

    return (
        <div>
            <PieChart width={400} height={400}>
                <Pie dataKey="value" data={data2} cx="50%" cy="50%" outerRadius={150} labelLine={false} label={renderCustomizedLabel} fill="#8884d8">
                    {data2.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? '#FF4444' : '#00C49F'}><Label value={`${entry.name}: ${entry.value}`} /></Cell>
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
};

export default Trial;