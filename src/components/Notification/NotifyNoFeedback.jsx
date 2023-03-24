import { Component } from 'react';
import s from './NotifyNoFeedback.module.css';

class NotifyNoFeedback extends Component {
  static defaultProps = {
    message: '',
  };

  render() {
    return <h2 className={s.title}>{this.props.message}</h2>;
  }
}
export default NotifyNoFeedback;
