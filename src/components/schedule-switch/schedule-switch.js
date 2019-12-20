import React, { Component} from 'react';
import './schedule-switch.css'

class ScheduleSwitch extends Component {
    render() {
        return (
            <div className="header_schedule">
                <p className="schedule_date"></p>
                <div className="schedule_week">
                    <i className="arrows fa fa-arrow-left"></i>
                    <p>16.12.19 - 20.12.19</p>
                    <i className="arrows fa fa-arrow-right"></i>
                </div>
            </div>
        )
    }
}

export default ScheduleSwitch;




