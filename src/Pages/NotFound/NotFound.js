import React from 'react';
import { NavLink } from 'react-router-dom';

const pageHeight = {
    'height': '80vh'
}

const NotFound = () => {
    return (
        <div className="text-center pt-5" style={pageHeight}>
            <h2 className="py-5">Opps! Page Not Found !</h2>
            <NavLink to="/home"><button className="p-2 btn btn-warning">Back To Home</button></NavLink>
        </div>
    );
};

export default NotFound;