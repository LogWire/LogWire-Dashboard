import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ThemeConsumer } from '../Theme';

const logo = require('./../../images/logo.svg')
const smallLogo = require('./../../images/logo-small.svg')

const LogoThemed = ({ checkBackground, className, ...otherProps }) => (
    <ThemeConsumer>
    {
        ({ style, color }) => (
            <img
                src={ logo }
                className={ classNames('d-block', className) }
                alt="LogWire Logo"
                { ...otherProps }
            />
        )
    }
    </ThemeConsumer>
);

const SmallLogoThemed = ({ checkBackground, className, ...otherProps }) => (
    <ThemeConsumer>
    {
        ({ style, color }) => (
            <img
                src={ smallLogo }
                className={ classNames('d-block', className) }
                alt="Small LogWire Logo"
                { ...otherProps }
            />
        )
    }
    </ThemeConsumer>
);

LogoThemed.propTypes = {
    checkBackground: PropTypes.bool,
    className: PropTypes.string,
};

export { LogoThemed, SmallLogoThemed };
