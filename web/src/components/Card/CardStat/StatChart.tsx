import React from 'react';
import { Flex } from '@chakra-ui/core';
import { ResponsiveBump } from '@nivo/bump';

import { PORTFOLIO_CHART_DATA } from '~/constants';

const StatChart: React.FC = () => {
  return (
    <Flex h={60} flex="1">
      <ResponsiveBump
        data={PORTFOLIO_CHART_DATA}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        xPadding={0.55}
        xOuterPadding={0.35}
        colors={'#111'}
        startLabelPadding={0}
        endLabelPadding={30}
        pointSize={0}
        inactivePointSize={0}
        pointColor={'#111'}
        pointBorderWidth={5}
        activePointBorderWidth={3}
        pointBorderColor={'#111'}
        enableGridX={false}
        enableGridY={false}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
      />
    </Flex>
  );
};

export default StatChart;
