import React, { Component } from 'react';
import { connect } from 'react-redux';
import { latestNews, otherNews, latestGallery, latestMusic} from '../actions';
import { bindActionCreators } from 'redux';


import LatestNews from '../components/home/Latest';
import OtherNews from '../components/home/otherNews';
import Gallery from '../components/home/gallery';
import Music from '../components/home/music';

class Home extends Component {
    componentDidMount() {
        this.props.latestNews();
        this.props.otherNews();
        this.props.latestGallery();
        this.props.latestMusic();

    }
    render() {


        return (
            <div>
                <LatestNews latest={this.props.articles.latest} />
                <OtherNews otherNews={this.props.articles.other} />
                <Gallery latestGallery={this.props.gallery.latestGallery}/>
                <Music latestMusic={this.props.music.latestMusic}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        articles: state.articles,
        gallery: state.gallery,
        music: state.music,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ latestNews, otherNews,latestGallery,latestMusic }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);