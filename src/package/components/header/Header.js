/* eslint-disable no-underscore-dangle */
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import DesignSystem from '../../theme/design_system/designSystem';

const useStyles = DesignSystem.organisms.Header.HeaderOrganism();

const Header = (props) => {
  const { height, logo } = props;
  const classes = useStyles({ height });

  const headerRef = useRef(null);

  return (
    <React.Fragment>
      <AppBar ref={headerRef} position="relative" data-testid="header" elevation={0}>
        <div className={classes.mainNav}>
          <div className={classes.logoContainer}>
            <Link>{logo}</Link>
          </div>
        </div>
      </AppBar>
    </React.Fragment>
  );
};

Header.propTypes = {
  logo: PropTypes.node.isRequired,
  height: PropTypes.number,
};

Header.defaultProps = {
  height: 414,
};

export default withRouter(Header);
