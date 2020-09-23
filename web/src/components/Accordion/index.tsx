import React from 'react';
import {
  Accordion as AccordionWrapper,
  AccordionItem,
  Box,
  AccordionIcon,
  AccordionPanel,
  AccordionHeader,
} from '@chakra-ui/core';

interface IAccordionProps {
  title: string;
}

const Accordion: React.FC<IAccordionProps> = ({ children, title }) => {
  return (
    <AccordionWrapper defaultIndex={[0]} allowMultiple mb={5}>
      <AccordionItem borderTop="none" borderBottom="none">
        <AccordionHeader
          borderRadius="lg"
          border="1px solid transparent"
          _hover={{ backgroundColor: 'gray.50' }}
          _focus={{
            boxShadow: 'none',
            border: '1px dashed',
            borderColor: 'gray.300',
          }}
        >
          <Box flex="1" textAlign="left" fontSize="18px">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionHeader>
        <AccordionPanel pb={4} duration={500} animateOpacity>
          {children}
        </AccordionPanel>
      </AccordionItem>
    </AccordionWrapper>
  );
};

export default Accordion;
