import React from 'react';
import { Icon } from '@chakra-ui/core';
import { motion } from 'framer-motion';

interface IButtonGooeyProps {
  id: string;
  toggle: (event: React.MouseEvent<any, MouseEvent>) => void;
  onTransactionClick: (event: React.MouseEvent<any, MouseEvent>) => void;
  onWalletClick: (event: React.MouseEvent<any, MouseEvent>) => void;
}

const Path = () => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
  />
);

const ButtonGooey: React.FC<IButtonGooeyProps> = ({
  id,
  onTransactionClick,
  onWalletClick,
  toggle,
}) => {
  return (
    <button onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
        // variants={{
        //   closed: { d: 'M 4 4.5 L 20' },
        //   open: { d: 'M 3 16.5 L 17 2.5' },
        // }}
        />
        <Path
        // d="M 2 9.423 L 20 9.423"
        // variants={{
        //   closed: { opacity: 1 },
        //   open: { opacity: 0 },
        // }}
        // transition={{ duration: 0.1 }}
        />
        <Path
        // variants={{
        //   closed: { d: 'M 2 16.346 L 20 16.346' },
        //   open: { d: 'M 3 2.5 L 17 16.346' },
        // }}
        />
      </svg>
    </button>
  );
};

export default ButtonGooey;
