import React, { Component } from 'react';
import './calendar.css';
import Styled from '../../node_modules/styled-components';

const CalendarStyle = Styled.div`
  width: 100%;
  height: 650px;
`;

class Calendar extends Component {

  render() {
    return (
      <CalendarStyle className="calendly-inline-widget" frameBorder="0" data-url="https://calendly.com/coffeewithcraig/30min">
      
      </CalendarStyle>
    );
  }
}
export default Calendar;