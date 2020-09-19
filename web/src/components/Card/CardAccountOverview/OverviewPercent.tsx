import React from 'react';
import { Flex, Grid } from '@chakra-ui/core';

import LabelStat from '~/components/Labels/Stat/';
import { STATEMENT_PERCENT_DATA } from '~/constants';

type OverviewPercentProps = { isVisible: boolean };

const OverviewPercent: React.FC<OverviewPercentProps> = ({ isVisible }) => {
  return (
    <Flex as="section" flex="1" flexDirection="column" mt={8} pl={3}>
      <Grid templateColumns="repeat(3, 1fr)" gap={8} justifyItems="stretch">
        {Object.entries(STATEMENT_PERCENT_DATA).map(([key, value]) => (
          <LabelStat
            key={key}
            title={key}
            value={value.value}
            result={value.result}
            type={value.type}
            isVisible={isVisible}
            divider={value.divider}
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default OverviewPercent;
