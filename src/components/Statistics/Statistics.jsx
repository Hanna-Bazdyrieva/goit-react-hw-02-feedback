import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import clsx from 'clsx';

class Statistics extends Component {
  static dafaultProps = {
    stat: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
    total: 0,
    positiveRatio: 0,
  };

  static propTypes = {
    stat: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    positiveRatio: PropTypes.number.isRequired,
  };
  render() {
    const stats = Object.entries(this.props.stat);
    console.log('Statistics -> render -> stats:', stats);

    return (
      <div className={s.wrap}>
        <div className={s.statistics}>
          {stats.map(item => {
            return (
              <div className={clsx(s.statItem, s[item[0]])}>
                <span className={s.name}>{item[0]}: </span>
                <span className={s.number}>{item[1]}</span>
              </div>
            );
          })}
        </div>
        <div className={s.calculated}>
          <div className={s.total}>
            <span>Total Feedback:</span>
            <span className={s.number}>{this.props.total}</span>
          </div>
          <div className={s.ratio}>
            <span>Positive Ratio :</span>
            <span className={s.number}>{this.props.positiveRatio}%</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Statistics;
