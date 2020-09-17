import React from 'react';
import { PseudoBox, Icon } from '@chakra-ui/core';
import { darken, transparentize } from 'polished';

import { ButtonThemes, ButtonSizes } from './ButtonTypes';

import colors from '../../styles/colors';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: string;
  size?: 'lg' | 'md' | 'sm' | undefined;
  theme?: 'transparent' | 'success' | 'primary';
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

      case ButtonThemes.TRANSPARENT:
        return 'transparent';

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
      border="1px solid transparent"
      px={size === 'lg' ? 5 : '12px'}
      rounded={size === 'lg' ? '15px' : '10px'}
      fontSize={size === 'lg' ? '18px' : '16px'}
      fontWeight="semibold"
      color={theme === 'transparent' ? 'gray.900' : 'white'}
      bg={renderTheme(theme)}
      transition="all 0.3s ease-in-out"
      onClick={onClick}
      _hover={{
        bg: theme === 'transparent' ? 'none' : darken(0.05, renderTheme(theme)),
        transform: 'scale(1.02)',
        border:
          theme === 'transparent'
            ? `1px solid #CBD5E0`
            : '1px solid transparent',
      }}
      _active={{
        bg: transparentize(0.13, renderTheme(theme)),
        transform: 'scale(0.9)',
      }}
      _focus={{
        border:
          theme === 'transparent'
            ? `1px dashed ${colors.gray[500]}`
            : '1px solid transparent',
        // boxShadow:
        //   theme === 'success'
        //     ? '0 0 1px 2px rgba(0, 170, 167, .75), 0 1px 1px rgba(0, 0, 0, .15)'
        //     : '0 0 1px 2px rgba(6, 36, 246, .75), 0 1px 1px rgba(0, 0, 0, .15)',
      }}
      _disabled={{ cursor: 'not-allowed', bg: 'gray.500', opacity: 0.7 }}
      disabled={disabled}
    >
      {variants === 'icon' && (
        <Icon
          name={icon}
          color={theme === 'transparent' ? 'gray.900' : 'white'}
          size={size === 'lg' ? '22px' : '20px'}
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
  theme: 'primary',
  icon: '',
};

export default Button;
