'use client';

import { BarChart, Card } from '@tremor/react';

const reviewerData = [
  { reviewer: 'Reviewer A', load: 25 },
  { reviewer: 'Reviewer B', load: 35 },
  { reviewer: 'Reviewer C', load: 20 },
  { reviewer: 'Reviewer D', load: 20 },
];

export default function ReviewerLoadChart() {
  return (
    <div className="cycle-card">
      <h3>Reviewer Load</h3>
      <div className="cycle-chart">
        <Card className="bg-transparent border-0 p-0">
          <BarChart
            data={reviewerData}
            index="reviewer"
            categories={['load']}
            colors={['green']}
            className="h-48"
            showAnimation={true}
            animationDuration={1000}
          />
        </Card>
      </div>
    </div>
  );
}
