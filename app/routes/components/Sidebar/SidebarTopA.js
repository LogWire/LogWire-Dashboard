import React from 'react';
import faker from 'faker/locale/en_US';
import { Link } from 'react-router-dom';

import { 
    Sidebar,
    UncontrolledButtonDropdown,
    Avatar,
    AvatarAddOn,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from './../../../components';

import { SmallLogoThemed } from '../LogoThemed/LogoThemed';

const SidebarTopA = () => (
    <React.Fragment>
        { /* START: Sidebar Default */ }
        <Sidebar.HideSlim>
            <Sidebar.Section className="pt-0">
            </Sidebar.Section>
        </Sidebar.HideSlim>
        { /* END: Sidebar Default */ }

        { /* START: Sidebar Slim */ }
        <Sidebar.ShowSlim>
            <Sidebar.Section>
                <Link to="/" className="sidebar__brand">
                    <SmallLogoThemed checkBackground />
                </Link>
            </Sidebar.Section>
        </Sidebar.ShowSlim>
        { /* END: Sidebar Slim */ }
    </React.Fragment>
)

export { SidebarTopA };
