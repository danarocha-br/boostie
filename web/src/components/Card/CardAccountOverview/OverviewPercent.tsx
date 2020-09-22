import React, { useCallback } from 'react';
import { Flex, Grid } from '@chakra-ui/core';

import LabelStat from '../../Labels/Stat/';
import { formatCurrency } from '~/utils';
import { IGenerateInvestmentGrowth } from '~/utils/generateInvestmentsGrowth';

type OverviewPercentProps = {
  isVisible: boolean;
  data: IGenerateInvestmentGrowth[];
};

const OverviewPercent: React.FC<OverviewPercentProps> = ({
  isVisible,
  data,
}) => {
  const calculations = useCallback(() => {
    const net = data.reduce((acc, { capitalGain }) => capitalGain + acc, 0);
    const dividendsSum = data.reduce(
      (acc, { dividends }) => dividends - 1000 + acc,
      0,
    );
    const balance = data?.reduce(
      (acc, { capitalGain, dividends }) => capitalGain + dividends + acc,
      0,
    );
    const profit = balance - net;
    return {
      netCost: formatCurrency(net).split(' ')[0].toString(),
      dividends: formatCurrency(dividendsSum).split(' ')[0].toString(),
      marketValue: formatCurrency(balance).split(' ')[0].toString(),
      allProfit: formatCurrency(profit).split(' ')[0].toString(),
    };
  }, [data]);

  return (
    <Flex as="section" flex="1" flexDirection="column" mt={8} pl={3}>
      <Grid templateColumns="repeat(3, 1fr)" gap={8} justifyItems="stretch">
        <LabelStat
          key="1"
          title="net cost"
          value={calculations().netCost}
          isVisible={isVisible}
          divider
        />
        <LabelStat
          key="2"
          title="dividends"
          value={calculations().dividends}
          isVisible={isVisible}
          divider
        />
        <LabelStat
          key="3"
          title="Market Value"
          value={calculations().marketValue}
          isVisible={isVisible}
        />
        <LabelStat
          key="4"
          title="All Time Profit"
          value={calculations().allProfit}
          isVisible={isVisible}
          divider
        />
        <LabelStat
          key="5"
          title="Performance Today"
          value="-$ 120,67"
          result="-5.65 %"
          type="decrease"
          isVisible={isVisible}
          divider
        />
        <LabelStat
          key="6"
          title="Currency Gain"
          value="-$ 8,67"
          result="0.87 %"
          type="increase"
          isVisible={isVisible}
        />
      </Grid>
    </Flex>
  );
};

export default OverviewPercent;
