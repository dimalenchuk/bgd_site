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
                        <th scope="row">Понеділок</th>
                        <td>104 Карабин О.О. Теорія
                            ймовірностей та математична
                            статистика (Пр)</td>
                        <td>104 Косиєв О.А.
                            Інформаційна безпека
                            держави (Л)</td>
                        <td>224 Косиєв О.А.
                            Інформаційна безпека
                            держави (Сем)</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Tuesday</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Wednesday</th>
                        <td>Операційні системи (Лаб)
                            підгр. 1 210А Максимів О.П.
                            підгр. 2 210В
                            Сухомлінов Б.Ю.</td>
                        <td>Теорія ймовірностей та
                            математична статистика
                            (Лаб)
                            підгр. 1 304 Карабин О.О.
                            підгр. 2 304А Васильєва О.Е</td>
                        <td>322 Лотоцька Н.Я. Іноземна
                            мова (Пр)</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Thursday</th>
                        <td>104 Максимів О.П.
                            Проектування та захист WEB
                            додатків (Л)</td>
                        <td>Теорія інформації (Лаб)
                            підгр. 1 210А Лагун А.Е.
                            підгр. 2 210В Кухарська Н.П.</td>
                        <td>Фізична підготовка (Пр) Спортивний зал
                            Зб. група ЕК21, КБ21, КН21, ЦБ21, ЦБ22 Ковальчук А.М./ Антошків Ю.М./ Пашнюк В.М./ Кордіяка І.М.</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Friday</th>
                        <td>Проектування та захист WEB
                            додатків (Лаб)
                            підгр. 1 332 Максимів О.П.
                            підгр. 2 331 Самотий В.В.</td>
                        <td>Зб.група КБ21 15
                            Телегіна Г.В. Долікарняна
                            допомога (Пр)</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>

                </table>
            </div>

        )
    }
}

export default ScheduleTable;




