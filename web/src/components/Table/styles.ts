import styled from '@emotion/styled/macro';
import { Flex } from '@chakra-ui/core';

import colors from '~/styles/colors';

export const TableContainer = styled(Flex)``;

export const TableHeaderContainer = styled(Flex)`
  justify-content: space-between;

  div {
    justify-content: flex-end;
    flex-basis: 20%;
    text-align: right;

    &:first-of-type {
      flex-grow: 1;
      flex-basis: 25%;
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
  justify-content: space-between;
  position: relative;

  &:hover {
    background-color: ${colors.gray[50]};
  }

  @media (max-width: 992px) {
    flex-direction: column;
  }

  div {
    text-align: right;
    height: 60px;
    align-items: center;
    flex-basis: 20%;
    justify-content: flex-end;

    label {
      justify-content: flex-start;
      text-align: initial;
      flex-grow: 1;
      flex-basis: 30%;

      @media (max-width: 992px) {
        flex-basis: 0;
      }
    }

    &:nth-of-type(2) {
      flex-basis: 15%;

      @media (max-width: 992px) {
        flex-basis: 0;
      }
    }

    p {
      margin-left: none;
    }

    @media (max-width: 992px) {
      &:nth-of-type(4),
      &:nth-of-type(6),
      &:nth-of-type(7),
      &:nth-of-type(8),
      &:nth-of-type(9),
      &:nth-of-type(10) {
        display: none;
      }
      &:nth-of-type(2),
      &:nth-of-type(3),
      &:nth-of-type(5) {
        position: absolute;
      }

      &:nth-of-type(2) {
        top: 20px;
        right: 0px;
      }
      &:nth-of-type(3) {
        top: 20px;
        left: 87px;
      }
      &:nth-of-type(5) {
        top: -5px;
        right: 0px;
      }
    }
  }
`;

export const TableColContainer = styled(Flex)``;
