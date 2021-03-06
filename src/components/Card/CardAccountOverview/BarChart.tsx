import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { Flex } from '@chakra-ui/core';

import colors from '~/styles/colors';
import useAuth from '~/contexts/auth';
import useDisplayInvestments from '~/contexts/displayInvestments';
import { generateInvestmentGrowth } from '~/utils';
import { IDashboardProps } from "~/pages/Dashboard/IDashboardProps";

const BarChart: React.FC<IDashboardProps> = ({isLoading}) => {
  const { barChart } = useAuth().investments;

  const displayInvestments = useDisplayInvestments().displayInvestment;

  const hiddenInvestments = generateInvestmentGrowth(false);

  return (
    <Flex h="190px" w="100%">
      <ResponsiveBar
        data={!isLoading && displayInvestments ? barChart : hiddenInvestments}
        keys={['currency', 'dividends', 'capitalGain']}
        indexBy="month"
        margin={{ top: 0, right: -20, bottom: 30, left: -15 }}
        padding={0.85}
        innerPadding={1.5}
        colors={({ id, data }) => data[`${id}Color`]}
        borderRadius={2.5}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 10,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 0,
        }}
        axisLeft={null}
        enableGridY={false}
        enableLabel={false}
        labelSkipWidth={10}
        labelSkipHeight={12}
        tooltipFormat={(value) =>
          `$ ${Number(value).toLocaleString('en-US', {
            minimumFractionDigits: 2,
          })} `
        }
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'right',
            direction: 'column',
            justify: false,
            translateX: 126,
            translateY: 21,
            itemsSpacing: 2,
            itemWidth: 96,
            itemHeight: 35,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        theme={{
          tooltip: {
            container: {
              background: colors.gray[50],
            },
          },
        }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </Flex>
  );
};

export default BarChart;
