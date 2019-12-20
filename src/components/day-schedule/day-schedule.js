import React, { Component} from 'react';
import './day-schedule.css'
class DaySchedule extends Component {
    render() {
        return (
            <div className="block_content">
                <h1>Розклад на сьогодні</h1>
                <table className="day_schedule">
                    <thead>
                    <tr>
                        <th scope="col">Friday</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Проектування та захист WEB
                            додатків (Лаб)
                            підгр. 1 332 Максимів О.П.
                            підгр. 2 331 Самотий В.В.</td>
                    </tr>
                    <tr>
                        <td>Зб.група КБ21 15
                            Телегіна Г.В. Долікарняна
                            допомога (Пр)</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DaySchedule;




