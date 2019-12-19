import React, { Component} from 'react';
import './schedule-page.css'
import ScheduleTable from "../schedule-table";
import ScheduleSwitch from "../schedule-switch";

class SchedulePage extends Component {
    render() {
        return (
            <div className="schedule_content">
                <ScheduleSwitch />
                <ScheduleTable />
            </div>
        )
    }
}

export default SchedulePage;




