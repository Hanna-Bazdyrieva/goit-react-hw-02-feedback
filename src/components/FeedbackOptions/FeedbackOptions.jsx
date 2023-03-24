import { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './FeedbackOptions.module.css';
import clsx from 'clsx';
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
      <>
        {buttons.map(btn => {
          // console.log(
          //   'FeedbackOptions -> render -> shortid.generate():',
          //   shortid.generate()
          // );

          return (
            <>
              <button
                key={shortid.generate()}
                className={clsx(s.button, s[btn])}
                type="button"
                value={btn}
                onClick={event => {
                  this.props.onLeaveFeedback(event);
                }}
              >
                {btn}
              </button>
            </>
          );
        })}
      </>
    );
  }
}
export default FeedbackOptions;
