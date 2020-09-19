import React, { useState, useMemo } from 'react';
import {
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tab,
  PseudoBox,
  Icon,
  Flex,
  List,
} from '@chakra-ui/core';

import Card from '../index';
import Stat from '~/components/Labels/Stat';
import BarChart from './BarChart';
import Legend from '~/components/Legend';
import OverviewPercent from './OverviewPercent';

import { STATEMENT_CHART_LEGEND } from '~/constants';
import useAuth from '~/contexts/auth';

import { focus, unselected, selected, hover } from './styles';
import { formatCurrency } from '~/utils';

const CardAccountOverview: React.FC = () => {
  const [displayInvestment, setDisplayInvesment] = useState(true);

  const { investments } = useAuth().investments;

  function onDisplayInvesments() {
    setDisplayInvesment((prevState) => !prevState);
  }

  const [currency, investmentBalance] = useMemo(() => {
    const balance = investments?.reduce(
      (acc, { capitalGain, dividends }) => capitalGain + dividends + acc,
      0,
    );

    return formatCurrency(balance).split(' ');
  }, [investments]);

  const result = useMemo(() => {
    const total = investments?.reduce(
      (acc, { capitalGain, dividends }) => capitalGain + dividends + acc,
      0,
    );

    const percent = total / 5984;
    return `${percent.toFixed(2)} %`;
  }, [investments]);

  return (
    <Card>
      <PseudoBox
        position="absolute"
        right="5"
        top="5"
        onClick={onDisplayInvesments}
        cursor="pointer"
        transition="all .2s ease-in-out"
        _hover={{
          opacity: 0.6,
          transform: 'scale(1.1)',
        }}
      >
        {displayInvestment ? (
          <Icon name="show" color="gray.900" size="20px" />
        ) : (
          <Icon name="hide" color="gray.900" size="20px" />
        )}
      </PseudoBox>
      <Tabs variant="unstyled">
        <TabList>
          <Tab
            {...unselected}
            _selected={{
              ...selected,
            }}
            _focus={{
              ...focus,
            }}
            _hover={{ ...hover }}
          >
            <Icon name="barChart" size="18px" />
          </Tab>
          <Tab
            {...unselected}
            _selected={{
              ...selected,
            }}
            _focus={{
              ...focus,
            }}
            _hover={{ ...hover }}
          >
            <Icon name="percent" size="18px" />
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel h="100%" flex="1" display="flex" mt={3}>
            <Flex flex="2">
              <BarChart displayInvestment={displayInvestment} />
            </Flex>
            <Flex
              flex="1"
              flexDirection="column"
              alignItems="end"
              ml={[10, 10, 12]}
            >
              {displayInvestment ? (
                <Stat
                  currency={currency}
                  value={investmentBalance}
                  result={result}
                  type={Number(result) < 0 ? 'decrease' : 'increase'}
                  isVisible={displayInvestment}
                />
              ) : (
                <Stat
                  currency="-"
                  value="---"
                  result="---"
                  type="increase"
                  isVisible={displayInvestment}
                />
              )}
              <List mt={8}>
                {Object.entries(STATEMENT_CHART_LEGEND).map(([key, value]) => (
                  <Legend key={key} title={key} color={value.color} />
                ))}
              </List>
            </Flex>
          </TabPanel>

          <TabPanel>
            <OverviewPercent isVisible={displayInvestment} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  );
};

export default CardAccountOverview;
