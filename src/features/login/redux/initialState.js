const initialState = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') !=null,
    errorMessage: '',
    successMessage: '',
    user: {},
    idToken: localStorage.getItem('id_token')
};

export default initialState;
