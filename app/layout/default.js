import React from 'react';
import PropTypes from 'prop-types';

import {
    Layout,
    ThemeSelector,
    ThemeProvider,
    PageConfigConsumer,
} from './../components';

import './../styles/bootstrap.scss';
import './../styles/main.scss';
import './../styles/plugins/plugins.scss';
import './../styles/plugins/plugins.css';

import { DefaultSidebar } from './../layout/components/DefaultSidebar';

const favIcons = [
    { rel: 'icon', type: 'image/x-icon', href: require('./../images/favicons/favicon.ico') },

    { rel: 'apple-touch-icon', sizes: '180x180', href: require('./../images/favicons/apple-touch-icon.png') },

    { rel: 'icon', type: 'image/png', sizes: '32x32', href: require('./../images/favicons/favicon-32x32.png') },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: require('./../images/favicons/favicon-16x16.png') }
];

class AppLayout extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }

    render() {
        const { children } = this.props;
        
        return (
            <ThemeProvider initialStyle="light" initialColor="primary">
                <Layout sidebarSlim favIcons={ favIcons }>
                    { /* -------- Sidebar ------------*/ }
                    <Layout.Sidebar>
                        <DefaultSidebar />
                    </Layout.Sidebar>

                    { /* -------- Content ------------*/ }
                    <Layout.Content>
                        { children }
                    </Layout.Content>

                </Layout>
            </ThemeProvider>
        );
    }
}

export default AppLayout;
