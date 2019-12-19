
export default class StudentService {

    _apiBase = 'http://127.0.0.1:8000';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':'Bearer ' + localStorage.getItem('token'),
                }
            });

        if (!res.ok) {
            console.log(res);
            if (res.status===401) {
                localStorage.removeItem('token')
            }
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status} ${res}`)
        }
        return await res.json();
    }



    getAllStudents = async() => {
        const res = await this.getResource(`/students/`);
        return res.map(this._transformStudent);
    };
    getStudent = async(id) =>  {
        const student = await this.getResource(`/students/${id}`);
        return this._transformStudent(student);
    };

    getAllNews = async() => {
        const res = await this.getResource(`/news/`);
        return res.map(this._transformNews);
    };
    getNews = async(id) =>  {
        const news = await this.getResource(`/news/${id}`);
        return this._transformNews(news);
    };


    getCurrentUser = async() => {
        const res = await fetch(`${this._apiBase}/core/current_user`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic '+btoa('username:password'),
                }
            });
        if (res.status===401) {
            localStorage.removeItem('token')
        }
        return await res.json();
    };

    _transformStudent = (student) => {
        return {
            id: student.id,
            first_name: student.first_name,
            last_name: student.last_name,
            e_mail: student.e_mail,
            phone_number: student.phone_number,
            group_id: student.group_id
        }
    };
    _transformNews = (news) => {
        return {
            id: news.id,
            news_name: news.news_name,
            news_content: news.news_content,
            news_author: news.news_author,
            news_date: news.news_date
        }
    }
}