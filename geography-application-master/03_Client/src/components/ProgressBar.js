import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const ProgressBar = ({ classes }) => (
  <div className={classes.root}>
    <LinearProgress />
  </div>
);

export default withStyles(styles)(ProgressBar);
