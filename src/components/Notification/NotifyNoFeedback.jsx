import { Component } from 'react';
import NotifyHeader from './NotifyNoFeedback.styled';

class NotifyNoFeedback extends Component {
  static defaultProps = {
    message: '',
  };

  render() {
    return <NotifyHeader>{this.props.message}</NotifyHeader>;
  }
}
export default NotifyNoFeedback;
