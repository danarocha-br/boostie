import React, { useState } from 'react';
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
import Stat from '../../Labels/Stat';
import BarChart from './BarChart';
import Legend from '../../Legend';
import OverviewPercent from './OverviewPercent';

import { STATEMENT_CHART_LEGEND } from '../../../constants';

const selected = {
  fontSize: 'sm',
  color: 'gray.900',
  bg: 'transparent',
  border: '1px solid',
  borderColor: 'gray.900',
  borderRadius: '5px',
  py: '3px',
  px: '6px',
  justifyContent: 'center',
  marginRight: 2,
};

const unselected = {
  ...selected,
  borderColor: 'transparent',
};

const focus = {
  boxShadow: 'none',
};

const CardAccountOverview: React.FC = () => {
  const [displayStatement, setDisplayStatement] = useState(true);

  function onDisplayStatement() {
    setDisplayStatement((prevState) => !prevState);
  }

  return (
    <Card>
      <PseudoBox
        position="absolute"
        right="5"
        top="5"
        onClick={onDisplayStatement}
        cursor="pointer"
        transition="all .2s ease-in-out"
        _hover={{
          opacity: 0.6,
          transform: 'scale(1.1)',
        }}
      >
        {displayStatement ? (
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
          >
            <Icon name="percent" size="18px" />
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel h="100%" flex="1" display="flex" mt={3}>
            <Flex flex="2">
              <BarChart />
            </Flex>
            <Flex flex="1" flexDirection="column" alignItems="center">
              {displayStatement ? (
                <Stat
                  currency="$"
                  value={894.35}
                  result="34%"
                  type="increase"
                  isVisible={displayStatement}
                />
              ) : (
                <Stat
                  currency="-"
                  value="---"
                  result="---"
                  type="increase"
                  isVisible={displayStatement}
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
            <OverviewPercent isVisible={displayStatement} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  );
};

export default CardAccountOverview;
