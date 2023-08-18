import {Outlet} from "react-router-dom";

import React from 'react';

function Layout(props) {
    return (
        <main>
            <Outlet></Outlet>
        </main>
    );
}

export default Layout;