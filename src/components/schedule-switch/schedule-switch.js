import React, { Component} from 'react';
import './schedule-switch.css'

class ScheduleSwitch extends Component {
    render() {
        return (
            <div className="header_schedule">
                <p className="schedule_date">Day, date</p>
                <p className="schedule_week"><i className="far fa-arrow-alt-circle-left"></i>04.01-04.01<i className="far fa-arrow-alt-circle-right"></i></p>
            </div>
        )
    }
}

export default ScheduleSwitch;




