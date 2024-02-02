import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  container: {
    minWidth: 600,
  },
  title: {
    textAlign: 'center',
  },
  listItemText: {
    textAlign: 'center',
  },
});

const Transition = props => <Slide direction="up" {...props} />;

class Modal extends React.Component {
  static propTypes = {
    score: PropTypes.shape({
      total: PropTypes.number.isRequired,
      passed: PropTypes.bool.isRequired,
      correct: PropTypes.number.isRequired,
    }),
  };

  static defaultProps = {
    score: {
      total: 0,
      passed: false,
      correct: 0,
    },
  };

  render() {
    const { isOpen, onRetry, classes, score } = this.props;

    return (
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        classes={{ paper: classes.container }}
        aria-labelledby="score-dialog-slide-title"
        aria-describedby="score-dialog-slide-description"
      >
        <DialogTitle id="score-dialog-slide-title" className={classes.title}>
          {score.passed
            ? 'Congratulations, you passed! 🤓'
            : "You didn't pass, try again! 🤨"}
        </DialogTitle>
        <DialogContent>
          <List>
            <ListItem>
              <ListItemText
                className={classes.listItemText}
                primary={`Total questions: ${score.total}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                className={classes.listItemText}
                primary={`Answered correctly: ${score.correct}`}
              />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={onRetry} color="primary">
            Retry
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(Modal);
