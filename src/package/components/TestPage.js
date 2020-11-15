import React from 'react';
import { Logo } from '../assets/svg/index';
import CustomButton from '../components/CustomButton';
import Header from '../components/header/Header';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  main: {
    margin: 20,
  },
});

const TestPage = () => {
  const classes = useStyle();

  return (
    <React.Fragment>
      <Header logo={<Logo />} />
      THIS IS A SIMPLIFIED VERSION OF THE TEST APPLICATION, NOT THE SAME THAT YOU CAN SEE ON MY VIDEO ON YOUTUBE!
      <div className={classes.main}>
        <CustomButton variant="contained" color="primary">
          Call to action
        </CustomButton>
      </div>
    </React.Fragment>
  );
};

export default TestPage;
