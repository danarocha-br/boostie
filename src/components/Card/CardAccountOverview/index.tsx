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
import { IDashboardProps } from '~/pages/Dashboard/IDashboardProps';

const CardAccountOverview: React.FC<IDashboardProps> = ({ isLoading }) => {
  const { barChart } = useAuth().investments;
  const displayInvestments = useDisplayInvestments().displayInvestment;

  const toggleDisplayInvestments = useDisplayInvestments()
    .toggleDisplayInvestments;

  const [investmentBalance] = useMemo(() => {
    const balance = barChart?.reduce(
      (acc, { capitalGain, dividends }) => capitalGain + dividends + acc,
      0,
    );

    return formatCurrency(balance).split(' ');
  }, [barChart]);

  const result = useMemo(() => {
    const total = barChart?.reduce(
      (acc, { capitalGain, dividends }) => capitalGain + dividends + acc,
      0,
    );

    const percent = total / 5984;
    return `${percent.toFixed(2)} %`;
  }, [barChart]);

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
          <TabPanel
            h="100%"
            flex="1"
            display="flex"
            flexDirection={['column', 'column', 'row']}
            mt={3}
          >
            <Flex flex={['1', '2']} order={[2, -1, -1, -1]}>
              <BarChart isLoading={isLoading} />
            </Flex>
            <Flex
              flex={['1', '1']}
              flexDirection="column"
              alignItems={['center', 'center', 'center', 'end']}
              ml={['', 10, 12]}
            >
              {!isLoading && displayInvestments ? (
                <Stat
                  value={investmentBalance}
                  result={result}
                  isVisible={displayInvestments}
                  loading={isLoading}
                />
              ) : (
                <Stat
                  currency="-"
                  value="---"
                  result="---"
                  type="increase"
                  isVisible={displayInvestments}
                  loading={isLoading}
                />
              )}
              <List display={['none', 'none', 'initial']} mt={8}>
                {Object.entries(STATEMENT_CHART_LEGEND).map(([key, value]) => (
                  <Legend key={key} title={key} color={value.color} />
                ))}
              </List>
            </Flex>
          </TabPanel>

          <TabPanel>
            <OverviewPercent isVisible={displayInvestments} data={barChart} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  );
};

export default CardAccountOverview;
