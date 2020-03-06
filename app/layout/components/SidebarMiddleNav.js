import React from 'react';

import { SidebarMenu } from './../../components';

export const SidebarMiddleNav = () => (
    <SidebarMenu>
        <SidebarMenu.Item title="Home" icon={<i className="fa fa-fw fa-home"></i>} to='/' exact />
        {/*<SidebarMenu.Item title="Applications" icon={<i className="fa fa-fw fa-desktop"></i>} to='/applications' exact />*/}
        <SidebarMenu.Item title="SIEM" icon={<i className="fa fa-fw fa-user"></i>} >
            <SidebarMenu.Item title="User Reports" to='/siem/users' exact/>
        </SidebarMenu.Item>
    </SidebarMenu >
);
