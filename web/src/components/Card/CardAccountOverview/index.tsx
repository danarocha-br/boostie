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
} from '@chakra-ui/core';

import Card from '../index';
import Stat from '../../Labels/Stat';

const selected = {
  fontSize: 'sm',
  color: 'gray.900',
  bg: 'transparent',
  border: '1px solid',
  borderColor: 'gray.900',
  borderRadius: '5px',
  py: '2px',
  width: '20px',
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
  const [isVisible, setVisibility] = useState(false);

  return (
    <Card>
      <PseudoBox
        position="absolute"
        right="4"
        top="5"
        onClick={() => setVisibility((prevState) => !prevState)}
        cursor="pointer"
        transition="all .2s ease-in-out"
        _hover={{
          opacity: 0.6,
          transform: 'scale(1.1)',
        }}
      >
        {isVisible ? (
          <Icon name="show" color="gray.900" size="18px" />
        ) : (
          <Icon name="hide" color="gray.900" size="18px" />
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
            1d
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
            1m
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
            1y
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel h="100%" w="100%" display="flex" mt={3}>
            <Flex flex="2">graph</Flex>
            <Flex flex="1">
              <Stat currency="$" value={894.35} result="34%" type="increase" />
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  );
};

export default CardAccountOverview;
