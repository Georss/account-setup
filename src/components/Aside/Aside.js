import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { profileData, errorForm } from '../../actions';
import ImageUpload from './ImageUpload/ImageUpload';
import ColorSelector from './ColorSelector/ColorSelector';
import Name from './FormComponents/Name';
import Description from './FormComponents/Description';
import JobTitle from './FormComponents/JobTitle';
import JobLevel from './FormComponents/JobLevel';
import Phone from './FormComponents/Phone';
import Address from './FormComponents/Address';
import ButtonSave from './FormComponents/ButtonSave';
import { jobTitleData, jobLevelData } from '../../Data/job';
import './Aside.css';

const maxChar = 'max 250 characters';

class Aside extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            jobTitle: jobTitleData[0],
            jobLevel: jobLevelData[0],
            phone: '',
            address: '',
        };
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    validate = () => {
        let nameError = false;
        let descriptionError = false;
        let phoneError = false;
        let addressError = false;

        if (!this.state.name) {
            nameError = true;
        }
        if (!this.state.description) {
            descriptionError = true;
        }
        if (!this.state.phone) {
            phoneError = true;
        }

        if (!this.state.address) {
            addressError = true;
        }
        if (nameError || descriptionError || phoneError || addressError) {
            this.props.formError(true);

            return false;
        }

        this.props.formError(false);

        return true;
    }

    onSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();

        if (isValid) {
            this.props.stateProfil(this.state);
        }
    };

    render() {
        return (
            <div className="Aside-BG">
                <div className="Aside-MR">
                    <h1 className="Account-setup">Account setup</h1>
                </div>
                <div className="Info-Account">
                    <div className="Profil-Image-Color">
                        <ImageUpload />
                        <ColorSelector />
                    </div>
                    <form onSubmit={this.onSubmit} id="info-form">
                        <div className="Name-Description Rectangle">
                            <Name
                                name={this.state.name}
                                change={this.change}
                            />
                            <Description
                                description={this.state.description}
                                change={this.change}
                                maxChar={maxChar}
                            />
                        </div>
                        <div className="Job-Info Rectangle">
                            <JobTitle
                                jobTitle={this.state.jobTitle}
                                change={this.change}
                                jobTitleData={jobTitleData}
                            />
                            <JobLevel
                                jobLevel={this.state.jobLevel}
                                change={this.change}
                                jobLevelData={jobLevelData}
                            />
                        </div>
                        <div className="Contact Rectangle">
                            <Phone
                                phone={this.state.phone}
                                change={this.change}
                            />
                            <Address
                                address={this.state.address}
                                change={this.change}
                                maxChar={maxChar}
                            />
                        </div>
                    </form>
                </div>
                <div className="Container-Button-Save">
                    <ButtonSave />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    stateProfil: props => dispatch(profileData(props)),

    formError: props => dispatch(errorForm(props)),
});

Aside.propTypes = {
    stateProfil: PropTypes.func.isRequired,
    formError: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Aside);
