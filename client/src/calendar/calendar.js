import React, {
  Component
} from 'react';
import './calendar.css';

class Calendar extends Component {
  render() {
    return ( 
      <a 
        href="https://calendly.com/coffeewithcraig/30min"
        className="CWC-Link"
        target="_blank"> <h1>Click here to schedule a coffee date.</h1>
      </a>
    )
  }
}
export default Calendar;