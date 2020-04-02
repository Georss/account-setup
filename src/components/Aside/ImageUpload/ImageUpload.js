import React, {Component} from 'react';
import { connect } from 'react-redux';
import { profileImage }from '../../../actions';
import blankProfile from '../../blank-profile-picture.png';

class ImageUpload extends Component {
    constructor() {
        super();

        this.getImage = this.getImage.bind(this);
    
        }
    getImage = e => {
        if (e.target.files[0]) {
            const image = URL.createObjectURL(e.target.files[0]);

            this.props.getImage(image);
        }
    };

    render(){
    return (
        <div className="Image-Upload">
            <img className="Account-Setup-Image" src={this.props.image ? this.props.image : blankProfile} alt="Profil" />
            <div className="text-button-upload">
                <div className="container">
                    <h3>Profile image</h3>
                    <p>(JPG, PNG or GIF)</p>
                </div>
                <input
                    style={{ display: 'none' }}
                    type="file"
                    onChange={this.getImage}
                    ref={fileInput => this.fileInput = fileInput}
                />
                <div className="image-target" onClick={() => this.fileInput.click()}>
                    <div className="container uploade-image">
                        <div 
                        className="Button-Upload" 
                        style={{backgroundColor: `${this.props.image ? '#1688ac' : ''}`}}>
                            <h4 className="Upload">Uploade</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
}

const mapStateToProps = state => ({
    image: state.profileImage,
});

const mapDispatchToProps = dispatch => ({

    getImage: props => dispatch(profileImage(props)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload);
