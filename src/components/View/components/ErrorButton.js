import React, { Component } from 'react';
import { connect } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import { errorForm } from '../../../actions';

class ErrorButton extends Component {
    remove = () => {
        this.props.closeBox(false);
    }

    render() {
        
        if (this.props.formError) {
            setTimeout(() => {
                this.props.closeBox(false);
            }, 5000);
        }
        
        return (
            <div
                className={`Error-BG ${this.props.formError ? '' : 'Error-DP'}`}
            >
                <h5 className="Error-Text">All fields are required</h5>
                <div className="Icon-Close">
                    <CloseIcon style={{ color: '#ffffff' }} onClick={this.remove} />
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    formError: state.errorForm,
});

const mapDispatchToProps = dispatch => ({
    closeBox: (props) => {
        dispatch(errorForm(props));
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorButton);
