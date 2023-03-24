import { Component } from 'react';
import Section from 'components/Section/Section';
import Container from '../Container/Container';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import NotifyNoFeedback from 'components/Notification/NotifyNoFeedback';
import Statistics from '../Statistics/Statistics';
import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const currentButtonValue = event.target.value;
    this.setState(prevState => {
      return {
        ...prevState,
        [currentButtonValue]: prevState[currentButtonValue] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const statValues = Object.values(this.state);
    return statValues.reduce((prevValue, item) => {
      return (prevValue += item);
    }, 0);
  };
  countPositiveRatio = () => {
    const total = this.countTotalFeedback();
    const good = this.state.good;
    return Math.round((good / total) * 100);
  };

  render() {
    const buttonNames = Object.keys(this.state);
    return (
      <Container>
        <Section title="Please leave your feedback">
          <div className={s.wrap}>
            <FeedbackOptions
              options={buttonNames}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </div>
          {this.countTotalFeedback() === 0 && (
            <NotifyNoFeedback message="There is no feedback so far" />
          )}
        </Section>
        {this.countTotalFeedback() !== 0 && (
          <Section title="Feedback Statistics">
            <Statistics
              stat={this.state}
              total={this.countTotalFeedback()}
              positiveRatio={this.countPositiveRatio()}
            />
          </Section>
        )}
      </Container>
    );
  }
}
export default App;
