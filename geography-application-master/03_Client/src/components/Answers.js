import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 2,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class Answers extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.arrayOf(PropTypes.string),
    value: PropTypes.number,
  };

  static defaultProps = {
    items: [],
    value: null,
  };

  handleChange = event => {
    this.props.onSelect(Number(event.target.value));
  };

  render() {
    const { classes, items, value } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            aria-label="answers"
            name="answers"
            className={classes.group}
            value={value}
            onChange={this.handleChange}
          >
            {items.map((item, idx) => (
              <FormControlLabel
                key={item}
                value={String(idx)}
                control={<Radio />}
                label={item}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(Answers);
