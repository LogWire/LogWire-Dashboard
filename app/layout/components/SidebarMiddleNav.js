import React from 'react';

import { SidebarMenu } from './../../components';

export const SidebarMiddleNav = () => (
    <SidebarMenu>
        <SidebarMenu.Item title="Home" icon={<i className="fa fa-fw fa-home"></i>} to='/' exact />
    </SidebarMenu >
);
