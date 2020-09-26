import styled from '@emotion/styled/macro';
import { darken } from 'polished';
import { ListItem as ListItemChakra } from '@chakra-ui/core';

import colors from '../../styles/colors';

export const ListItem = styled(ListItemChakra)`
  a {
    display: flex;
    align-items: center;

    p {
      border-bottom: 2px solid ${colors.red[900]};
      border-radius: 2px;
      width: 0px;
    }

    p,
    svg {
      transition: all 0.25s ease-in-out;
      color: ${(props) =>
        props.disabled ? colors.gray[500] : colors.gray[900]};
    }

    &:hover {
      cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

      /* &:after {
        opacity: ${(props) => (props.disabled ? 1 : 0)};
      } */
    }

    &:hover,
    .active {
      p {
        color: ${(props) =>
          props.disabled ? colors.gray[500] : darken(0.4, colors.gray[900])};
        width: ${(props) =>
          props.disabled ? '0px !important' : '50px !important'};
      }
      svg {
        color: ${(props) =>
          props.disabled ? colors.gray[500] : darken(0.4, colors.gray[900])};
      }
    }
    &:disabled::after {
      content: 'PRO';
      font-size: 11px;
      color: white;
      font-weight: 600;
      background-color: ${colors.gray[900]};
      border-radius: 5px;
      padding: 2px 7px;
      position: relative;
      top: -2px;
      left: -10px;
      transition: all 0.25s ease-in-out;
      /* opacity: 0; */
    }
  }
`;
