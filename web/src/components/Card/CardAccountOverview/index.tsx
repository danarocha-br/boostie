import React, { useMemo } from 'react';
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
import useDisplayInvestments from '~/contexts/displayInvestments';

import { focus, unselected, selected, hover } from './styles';
import { formatCurrency } from '~/utils';

const CardAccountOverview: React.FC = () => {
  const { investments } = useAuth().investments;
  const displayInvestments = useDisplayInvestments().displayInvestment;
  const toggleDisplayInvestments = useDisplayInvestments()
    .toggleDisplayInvestments;

  const [investmentBalance] = useMemo(() => {
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
        onClick={toggleDisplayInvestments}
        cursor="pointer"
        transition="all .2s ease-in-out"
        _hover={{
          opacity: 0.6,
          transform: 'scale(1.1)',
        }}
      >
        {displayInvestments ? (
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
              <BarChart />
            </Flex>
            <Flex
              flex="1"
              flexDirection="column"
              alignItems="end"
              ml={[10, 10, 12]}
            >
              {displayInvestments ? (
                <Stat
                  value={investmentBalance}
                  result={result}
                  isVisible={displayInvestments}
                />
              ) : (
                <Stat
                  currency="-"
                  value="---"
                  result="---"
                  type="increase"
                  isVisible={displayInvestments}
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
            <OverviewPercent isVisible={displayInvestments} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  );
};

export default CardAccountOverview;
