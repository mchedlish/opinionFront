import React, { useEffect } from 'react';
import {withRouter} from 'react-router-dom'

import { isAuth } from '../../actions/auth';

const Private = (props, { children }) => {
    useEffect(() => {
        if (!isAuth()) {
            props.history.push(`/signin`);
        }
    }, []);
    return <React.Fragment>{children}</React.Fragment>;
};

export default withRouter(Private);