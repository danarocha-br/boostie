import React from 'react';
import { Flex } from '@chakra-ui/core';
import { ResponsiveLine, Serie } from '@nivo/line';

import colors from '~/styles/colors';

interface IStatChart {
  data: Serie[];
}

const StatChart: React.FC<IStatChart> = ({ data }) => {
  return (
    <Flex h={60} flex="1">
      <ResponsiveLine
        data={data}
        margin={{ top: 5, right: 50, bottom: 10, left: 0 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        curve="basis"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        colors={colors.green[900]}
        enablePoints={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        enablePointLabel={true}
        pointLabel="y"
        pointLabelYOffset={-12}
        areaOpacity={0.15}
        useMesh={true}
        legends={[]}
        yFormat={(value) =>
          `$ ${Number(value).toLocaleString('en-US', {
            minimumFractionDigits: 2,
          })} `
        }
      />
    </Flex>
  );
};

export default StatChart;
