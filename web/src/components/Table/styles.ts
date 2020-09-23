import styled from '@emotion/styled/macro';
import { Flex } from '@chakra-ui/core';

import colors from '~/styles/colors';

export const TableContainer = styled(Flex)``;

export const TableHeaderContainer = styled(Flex)`
  div {
    justify-content: flex-end;
    margin-left: 10px;
    flex-basis: 20%;
    text-align: right;

    &:first-of-type {
      margin-left: 0px;
      flex-grow: 1;
      flex-basis: 30%;
      text-align: initial;
    }

    &:nth-of-type(2) {
      flex-basis: 15%;
    }
  }
`;

export const TableRowContainer = styled(Flex)``;

export const TableGroupRowContainer = styled(Flex)`
  margin-bottom: 5px;
  transition: background-color 0.25s ease-in;

  &:hover {
    background-color: ${colors.gray[50]};
  }

  div {
    justify-content: flex-end;
    align-items: center;
    height: 60px;
    align-items: center;
    flex-basis: 20%;
    margin-left: 10px;

    &:first-of-type {
      justify-content: flex-start;
      margin-left: 0px;
      text-align: initial;
      flex-grow: 1;
      flex-basis: 30%;
    }

    &:nth-of-type(2) {
      flex-basis: 15%;
    }

    &:last-child {
      padding-right: 10px;
    }

    p {
      margin-left: none;
    }
  }
`;

export const TableColContainer = styled(Flex)``;
