import React, { Component} from 'react';
import StudentService from "../../services/student-service";
import './news-list.css'
class NewsList extends Component {
    studentService = new StudentService();
    state = {
        newsList: null
    };
    componentDidMount() {
        this.studentService
            .getAllNews()
            .then((newsList)=> {
                this.setState({
                    newsList
                });
            });
    }

    renderItems(arr) {
        if(arr) {
            return arr.map(({id, news_name, news_content, news_date, news_author}) => {
                return (
                    <div className="block_inside" key={id}>
                        <h2 className="heading_news">{news_name}</h2>
                        <p className="text_news">{news_content}</p>
                        <div className="bottom_news">
                            <p className="author_news"><i className="fa fa-user-edit"></i>{news_author}</p>
                            <p className="date_news"><i className="fa fa-calendar-alt"></i>{news_date}</p>
                        </div>
                    </div>
                );
            });
        }
    }



    render() {
        const {newsList} = this.state;
        const visibleItems = this.renderItems(newsList);
        return (
            <div className="block_content">
                <h1>Новини</h1>
                {visibleItems}
            </div>
        )
    }
}

export default NewsList;




