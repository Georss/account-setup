const profileImage = (state = null, action) => {
    switch (action.type) {
        case 'UPLOAD_IMAGE':
            return state = action.props;
        default:
            return state;
    }
};

export default profileImage;
