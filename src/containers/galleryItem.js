import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedGallery, clearSelectedGallery} from '../actions';
import { bindActionCreators } from 'redux';


class Gallery extends Component {

    componentDidMount() {
        this.props.selectedGallery(this.props.match.params.id)
    }
    componentWillMount() {
        this.props.clearSelectedGallery();
    }

    
    renderSlider =(goo) =>{
        
        console.log(goo)
    }
    render() {
     
      
        return (
            
            <div className="slide-item-wrap">
        {this.renderSlider(this.props.gallery.selected)}
            </div>
        );
    }
}

function mapStateToProps(state) {
   
    return {
        gallery: state.gallery
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectedGallery, clearSelectedGallery
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);