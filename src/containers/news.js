import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedNews, clearSelectedNews } from '../actions';
import { bindActionCreators } from 'redux';

import Counter from './likesCounter';


class News extends Component {

    componentDidMount() {
        this.props.selectedNews(this.props.match.params.id)
    }
    componentWillMount() {
        this.props.clearSelectedNews();
    }

    renderNews = ({ selected }) => {
        if (selected) {
            return selected.map((item) => {
                return (
                    <div key={item.id}>
                        <div className="tags">
                            <span>
                                <i className="fa fa-eye"></i>
                                {item.views}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up"></i>
                                {item.likes[0]}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-down"></i>
                                {item.likes[1]}
                            </span>

                        </div>
                        <div className="top">
                            <h2>{item.title}</h2>
                            <span>Article by: <strong>{item.author}</strong></span>
                        </div>
                        <img src={`/images/articles/${item.img}`} alt={item.img} />
                        <div className="body_news">
                            {item.body}
                            <div>
                                <Counter
                                    articleId={item.id}
                                    type="HANDLE_LIKES_ARTICLES"
                                    section="articles"
                                    likes={item.likes[0]}
                                    dislikes={item.likes[1]} />
                            </div>
                        </div>



                    </div>
                )
            })
        }
    }
    render() {
        return (
            <div className="news_container">
                {this.renderNews(this.props.articles)}
                article
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        articles: state.articles
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectedNews, clearSelectedNews
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(News);