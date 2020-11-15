import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import DesignSystem from '../theme/design_system/designSystem';
import clsx from 'clsx';

const useStyles = DesignSystem.atoms.ButtonAtom();

const CustomButton = ({ children, className, variant, color }) => {
  const classes = useStyles({ variant, color });

  return (
    <Button className={clsx(className, classes.button)} variant={variant} color={color}>
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
};

CustomButton.defaultProps = {
  className: undefined,
  type: 'button',
  variant: 'contained',
};

export default CustomButton;
