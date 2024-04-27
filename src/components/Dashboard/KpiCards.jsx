// 'use client';
import { Card } from '@tremor/react';
import { useSelector } from 'react-redux';


const getTotals = (arr) => arr.reduce((acc, item) => acc + item.amount, 0);

export default function KpiCards() {
    const {sales,purchases} = useSelector(state=> state.stock)
    // const totalSales = sales?.reduce((acc,item)=>acc + item.amount,0)
    const totalSales = getTotals(sales)
    // console.log(totalSales)
    // const totalPurchases = purchases?.reduce((acc,item)=>acc + item.amount,0)
    const totalPurchases = getTotals(purchases)
    // console.log(totalPurchases)
    
    const data = [
        {
            name: 'Sales',
            value: `€ ${totalSales}`,
            // change: '+6.1%',
            // changeType: 'positive',
            color: "indigo"
        },
        {
            name: 'Cash',
            value: `€ ${totalSales - totalPurchases}`,
            // change: '+19.2%',
            // changeType: 'positive',
            color: "amber"
        },
        {
            name: 'Purchases',
            value: `€ ${totalPurchases}`,
            // change: '-1.2%',
            // changeType: 'negative',
            color: "fuchsia"
        },
    ];
    return (
        <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"

            >
                {data.map((item) => (
                    <Card key={item.name} decoration="top"
                    decorationColor={item.color}  

                     >
                        <p className="mb-2 text-tremor-default text-tremor-content light:text-dark-tremor-content-strong">
                            {item.name}
                        </p>
                        <p className="flex items-start justify-between">
                            <span className="text-tremor-metric font-semibold text-tremor-content-strong light:text-dark-tremor-content-strong">
                                {item.value}
                            </span>
                            {/* <span
                                className={classNames(
                                    item.changeType === 'positive'
                                        ? 'text-emerald-700 dark:text-emerald-500'
                                        : 'text-red-700 dark:text-red-500',
                                    'text-tremor-default font-medium',
                                )}
                            >
                                {item.change}
                            </span> */}
                        </p>
                    </Card>
                ))}
            </div>
        </>
    );
}