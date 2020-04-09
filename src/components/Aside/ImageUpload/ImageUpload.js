import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { profileImage } from '../../../actions';
import blankProfile from '../../blank-profile-picture.png';

const ImageUpload = ({ image, getImage }) => {
    const Image = (e) => {
        if (e.target.files[0]) {
            const img = URL.createObjectURL(e.target.files[0]);

            getImage(img);
        }
    };

    let fileInputRef;

    return (
        <div className="Image-Upload">
            <img
                className="Account-Setup-Image"
                src={image || blankProfile}
                alt="Profil"
            />
            <div className="text-button-upload">
                <div className="container">
                    <h3>Profile image</h3>
                    <p>(JPG, PNG or GIF)</p>
                </div>
                <input
                    style={{ display: 'none' }}
                    type="file"
                    onChange={Image}
                    ref={(fileInput) => { fileInputRef = fileInput; }}
                />
                <div className="image-target" onClick={() => fileInputRef.click()}>
                    <div className="container uploade-image">
                        <div
                            className="Button-Upload"
                            style={{ backgroundColor: `${image ? '#1688ac' : ''}` }}
                        >
                            <h4 className="Upload">Uploade</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    image: state.profileImage,
});

const mapDispatchToProps = dispatch => ({

    getImage: props => dispatch(profileImage(props)),

});

ImageUpload.propTypes = {
    getImage: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload);
