'use client';

import { DonutChart, Card } from '@tremor/react';

const aiHumanData = [
  { name: 'AI Reviews', value: 60, color: 'indigo' },
  { name: 'Human Reviews', value: 40, color: 'cyan' },
];

export default function AIHumanBalanceChart() {
  return (
    <div className="cycle-card">
      <h3>AI vs. Human Review Balance</h3>
      <div className="cycle-chart">
        <Card className="bg-transparent border-0 p-0">
          <DonutChart
            data={aiHumanData}
            category="value"
            index="name"
            colors={['indigo', 'cyan']}
            className="h-48"
            showLabel={false}
            showAnimation={true}
            animationDuration={1000}
          />
        </Card>
        <div className="cycle-legend">
          <span className="legend-item">
            <span className="dot" style={{backgroundColor: '#6366f1'}}></span> AI Reviews (60%)
          </span>
          <span className="legend-item">
            <span className="dot" style={{backgroundColor: '#06b6d4'}}></span> Human Reviews (40%)
          </span>
        </div>
      </div>
    </div>
  );
}
