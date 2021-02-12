import React, { useEffect } from 'react';
import {withRouter} from 'react-router-dom'
import { isAuth } from '../../actions/auth';

const Admin = (props, { children }) => {
    useEffect(() => {
        if (!isAuth()) {
            props.history.push(`/signin`);
        } else if (isAuth().role !== 1) {
            Router.push(`/`);
        }
    }, []);
    return <React.Fragment>{children}</React.Fragment>;
};

export default withRouter(Admin);