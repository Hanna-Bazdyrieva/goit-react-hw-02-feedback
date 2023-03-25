import { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Wrap, Button } from './FeedbackOptions.styled';
// const shortid = require('shortid');

class FeedbackOptions extends Component {
  static defaultProps = {
    options: [],
  };
  static propTypes = {
    options: PropTypes.array.isRequired,
  };

  render() {
    const buttons = this.props.options;
    return (
      <Wrap>
        {buttons.map(btn => {
          return (
            <Button
              key={shortid.generate()}
              type="button"
              value={btn}
              onClick={event => {
                this.props.onLeaveFeedback(event);
              }}
            >
              {btn}
            </Button>
          );
        })}
      </Wrap>
    );
  }
}
export default FeedbackOptions;
