import React, { Component} from 'react';
import './news-page.css'
import DaySchedule from "../day-schedule/day-schedule";
import NewsList from "../news-list";
class NewsPage extends Component {
    render() {
        return (
            <div className="main_content">
                <NewsList />
                <DaySchedule />
            </div>
        )
    }
}

export default NewsPage;




