import React from 'react';
import { ResponsivePie, PieDatum } from '@nivo/pie';

export interface IPieChartProps {
  data: PieDatum[];
}

const PieChart: React.FC<IPieChartProps> = ({ data }) => {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 12, right: 12, bottom: 12, left: 12 }}
      innerRadius={0.9}
      colors={({ color }) => `${color}`}
      enableRadialLabels={false}
      radialLabelsSkipAngle={10}
      radialLabelsTextXOffset={0}
      radialLabelsLinkDiagonalLength={16}
      radialLabelsLinkHorizontalLength={24}
      radialLabelsLinkStrokeWidth={0}
      radialLabelsLinkColor={{ from: 'color' }}
      enableSlicesLabels={false}
      slicesLabelsSkipAngle={0}
      animate={true}
      motionStiffness={100}
      motionDamping={15}
      tooltipFormat={(value) =>
        `$ ${Number(value).toLocaleString('en-US', {
          minimumFractionDigits: 2,
        })}`
      }
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          translateY: 56,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;
