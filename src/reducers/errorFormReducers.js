const errorForm = (state = false, action) => {
    switch (action.type) {
        case 'ERROR_FORM':
            return action.props;
        default:
            return state;
    }
};

export default errorForm;
