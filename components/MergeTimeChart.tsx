'use client';

import { LineChart, Card } from '@tremor/react';

const mergeTimeData = [
  { month: 'Jan', 'Merge Time (days)': 4.5 },
  { month: 'Feb', 'Merge Time (days)': 3.8 },
  { month: 'Mar', 'Merge Time (days)': 2.5 },
  { month: 'Apr', 'Merge Time (days)': 2.2 },
  { month: 'May', 'Merge Time (days)': 1.9 },
  { month: 'Jun', 'Merge Time (days)': 1.7 },
];

export default function MergeTimeChart() {
  return (
    <div className="cycle-card">
      <h3>Merge Time Trends</h3>
      <div className="cycle-chart">
        <Card className="bg-transparent border-0 p-0">
          <LineChart
            data={mergeTimeData}
            index="month"
            categories={['Merge Time (days)']}
            colors={['blue']}
            className="h-48"
            showAnimation={true}
            animationDuration={1000}
          />
        </Card>
      </div>
    </div>
  );
}
