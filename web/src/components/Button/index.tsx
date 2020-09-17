import React from 'react';
import { PseudoBox, Icon } from '@chakra-ui/core';
import { darken, transparentize } from 'polished';

import { ButtonThemes, ButtonSizes } from './ButtonTypes';

import colors from '../../styles/colors';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: string;
  size?: 'lg' | 'md' | 'sm' | undefined;
  theme?: string;
  variants?: 'icon' | 'block';
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  label,
  icon,
  size,
  variants,
  onClick,
  theme,
  disabled,
}) => {
  // button sizes
  function renderSizes(size: string | undefined) {
    switch (size) {
      case ButtonSizes.LARGE:
        return '60px';

      case ButtonSizes.SMALL:
        return '30px';

      default:
        return '45px';
    }
  }
  // button theme
  function renderTheme(theme: string | undefined) {
    switch (theme) {
      case ButtonThemes.SUCCESS:
        return colors.green[900];

      default:
        return colors.gray[900];
    }
  }

  return (
    <PseudoBox
      as="button"
      height={renderSizes(size)}
      lineHeight="1.2"
      outline="none"
      transition="all 0.3s ease-in-out"
      border="transparent"
      px={size === 'lg' ? 5 : 4}
      rounded={size === 'lg' ? '15px' : '10px'}
      fontSize={size === 'lg' ? '18px' : '16px'}
      fontWeight="semibold"
      bg={renderTheme(theme)}
      color="white"
      onClick={onClick}
      _hover={{
        bg: darken(0.05, renderTheme(theme)),
        transform: 'scale(1.02)',
      }}
      _active={{
        bg: transparentize(0.13, renderTheme(theme)),
        transform: 'scale(0.9)',
      }}
      _focus={{
        boxShadow:
          theme === 'success'
            ? '0 0 1px 2px rgba(0, 170, 167, .75), 0 1px 1px rgba(0, 0, 0, .15)'
            : '0 0 1px 2px rgba(6, 36, 246, .75), 0 1px 1px rgba(0, 0, 0, .15)',
      }}
      _disabled={{ cursor: 'not-allowed', bg: 'gray.500', opacity: 0.7 }}
      disabled={disabled}
    >
      {variants === 'icon' && (
        <Icon
          name={icon}
          color="white"
          size={size === 'lg' ? '22px' : '14px'}
        ></Icon>
      )}
      {variants === 'block' && label}
    </PseudoBox>
  );
};

Button.defaultProps = {
  variants: 'icon',
  label: '',
  disabled: false,
  size: 'md',
  theme: ButtonThemes.PRIMARY,
  icon: '',
};

export default Button;
