import React, { Component} from 'react';
import './schedule-table.css'

class ScheduleTable extends Component {
    render() {
        return (
            <div>
                <table className="schedule">
                    <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">1<br/>9:15-10:35</th>
                        <th scope="col">2<br/>10:50-12:10</th>
                        <th scope="col">3<br/>12:25-13:45</th>
                        <th scope="col">4<br/>14:15-15:35</th>
                        <th scope="col">5<br/>15:40-17:00</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Monday</th>
                        <td>Пара</td>
                        <td>Пара</td>
                        <td>Пара</td>
                        <td>Пара</td>
                        <td>Пара</td>
                    </tr>
                    <tr>
                        <th scope="row">Tuesday</th>
                        <td>Пара</td>
                        <td>Пара</td>
                        <td>Пара</td>
                        <td>Пара</td>
                        <td>Пара</td>
                    </tr>
                    <tr>
                        <th scope="row">Wednesday</th>
                        <td>Пара</td>
                        <td>Пара</td>
                        <td>Пара</td>
                        <td>Пара</td>
                        <td>Пара</td>
                    </tr>
                    <tr>
                        <th scope="row">Thursday</th>
                        <td>Пара</td>
                        <td>Пара</td>
                        <td>Пара</td>
                        <td>Пара</td>
                        <td>Пара</td>
                    </tr>
                    <tr>
                        <th scope="row">Friday</th>
                        <td>Пара</td>
                        <td>Пара</td>
                        <td>Пара</td>
                        <td>Пара</td>
                        <td>Пара</td>
                    </tr>
                    </tbody>

                </table>
            </div>

        )
    }
}

export default ScheduleTable;




