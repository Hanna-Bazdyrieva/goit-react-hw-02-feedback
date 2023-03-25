import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Wrap,
  StatDiv,
  StatItem,
  StatType,
  StatNumber,
  StatAnalitics,
  AnaliticsType,
} from './Statistics.styled';

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
    // console.log('Statistics -> render -> stats:', stats);

    return (
      <Wrap>
        <StatDiv>
          {stats.map(item => {
            return (
              <StatItem key={item[0]} value={item[0]}>
                <StatType>{item[0]}: </StatType>
                <StatNumber>{item[1]}</StatNumber>
              </StatItem>
            );
          })}
        </StatDiv>
        <StatDiv>
          <StatAnalitics>
            <AnaliticsType>Total Feedback:</AnaliticsType>
            <StatNumber>{this.props.total}</StatNumber>
          </StatAnalitics>
          <StatAnalitics>
            <AnaliticsType>Positive Ratio :</AnaliticsType>
            <StatNumber>{this.props.positiveRatio}%</StatNumber>
          </StatAnalitics>
        </StatDiv>
      </Wrap>
    );
  }
}
export default Statistics;
