import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import { errorForm } from '../../../actions';

const ErrorButton = ({ closeBox, formError }) => {
    const remove = () => {
        closeBox(false);
    };

    if (formError) {
        setTimeout(() => {
            closeBox(false);
        }, 5000);
    }

    return (
        <div
            className={`Error-BG ${formError ? '' : 'Error-DP'}`}
        >
            <h5 className="Error-Text">All fields are required</h5>
            <div className="Icon-Close">
                <CloseIcon style={{ color: '#ffffff' }} onClick={remove} />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    formError: state.errorForm,
});

const mapDispatchToProps = dispatch => ({
    closeBox: (props) => {
        dispatch(errorForm(props));
    },

});

ErrorButton.propTypes = {
    closeBox: PropTypes.func.isRequired,
    formError: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorButton);
