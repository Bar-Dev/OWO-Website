import React from 'react';
import styled from 'styled-components';
import { size } from 'polished';
import { generateProps } from 'styled-gen';

const LogoEl = styled.svg`
    ${size('auto')};

    fill: currentColor;

    ${generateProps};
`;

LogoEl.defaultProps = {
    primary: true,
    size: '45px 136px',
};

const Logo = props => (
    <LogoEl
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 403.7 133.9"
        {...props}
    >
        <path d="M20 114zm157.1-75.5l7.2 9.8h6.6V34.6h-4.1v9.7l-7.5-9.7h-6.5v13.6h4.3v-9.7zm30.7 6.2h-10.1v-2.4h8.9v-3h-8.9v-1.2h10.1v-3.6h-14.2v13.6h14.2v-3.4zm-54.5-3.3c0-3.8 3.1-6.8 6.8-6.8h4.2c3.8 0 6.8 3.1 6.8 6.8 0 3.8-3.1 6.8-6.8 6.8h-4.2c-3.8.1-6.8-3-6.8-6.8zm4.1 1.3c0 1.1.9 2 2 2h5.5c1.1 0 2-.9 2-2v-2.5c0-1.1-.9-2-2-2h-5.5c-1.1 0-2 .9-2 2v2.5zM72.3 69.1C88 61.7 104.2 54 107.3 52c.3-.2.6-.4.9-.5 3.2-1.8 6.2-4.1 8.7-6.8 3.3-3.9 5.3-8.7 5.9-13.7-1-1.5-2-3-3.1-4.4-.1 1.8-.5 3.6-1.1 5.3-.8 2.2-2 4.2-3.4 6.1-3.7 4.8-9.5 9-17.4 12.5-15.6 6.9-29.4 13.6-38.2 18-10.6 5.3-17.8 9.1-19.8 10.3-.3.2-.6.3-1 .6-5.1 2.6-9.8 6-13.9 10.1-6.1 6.5-8.7 13.8-7.6 21.7.9 1 1.8 1.9 2.7 2.8 0-4.1 1-8.1 2.7-11.8 1.6-3.3 3.8-6.3 6.4-8.9 4.2-4.1 9.1-7.5 14.3-10.2 3.7-2 16-7.8 28.9-14zm-44-6c3.7-2 15.9-7.8 28.8-13.9 15.7-7.4 31.9-15.1 35-17.1l.9-.5c2.9-1.7 5.6-3.7 8-6.1 3-3.2 5.1-7.2 6-11.5-5.6-4.3-11.9-7.6-18.6-9.9C77.3.2 65.2-.5 53.6 1.9c-4.3.8-8.5 2.1-12.5 3.8-11.9 5-22 13.4-29.2 24.1C7 37 3.6 45.1 1.8 53.6 0 62.6.1 71.9 2 80.9c.8 3.9 2 7.7 3.6 11.4.6-4 1.9-7.8 3.8-11.3 1.6-3.1 3.7-5.9 6.1-8.4 2.1-2.2 4.4-4.1 6.9-5.8 1.8-1.3 3.9-2.6 5.9-3.7zm278.3 21.4l10.5 15.4h-17.3L291.3 87h-3.2v12.9H273V54.6h22c8 0 13.1 2 16.3 5.2 2.7 2.7 4.1 6.1 4.1 10.7v.1c.1 6.6-3.3 11.2-8.8 13.9zm-6.2-12.9c0-2.9-2.3-4.3-5.8-4.3H288v8.9h6.5c3.6 0 5.8-1.6 5.8-4.4v-.2zm33.9-17h-15.1v45.3h36.4v-13h-21.3V54.6zm-208.7 6.7c-1.6 1.8-3.4 3.5-5.3 4.9-2.3 1.7-4.8 3.1-7.4 4.2-15.8 7-30.5 14.2-40.1 19C61.7 95 53 99.6 49.7 101.5c-.6.3-1.2.7-1.8 1-1.6.8-3.2 1.8-4.7 2.8-1.7 1.1-3.1 2.5-4.4 4.1-1.4 1.9-2.4 4.1-2.9 6.4-.7 3.2-.8 6.4-.4 9.7 5.8 3.1 12.1 5.4 18.6 6.7 9.7 1.9 19.7 1.6 29.3-.8 35.6-9.1 57.1-45.3 48-80.9-1.1 4-3.1 7.7-5.8 10.8zm277.6 15.5v.2c0 13.4-9.2 22.9-27.5 22.9h-16.8V54.6h17.3c18 0 27 8.9 27 22.2zm-15.3.4c0-6.5-4.5-9.4-11.4-9.4H374v18.9h2.5c6.9 0 11.4-2.8 11.4-9.4v-.1zM204.8 54.6l-6.4 21.7-7.3-21.9H178l-7.3 21.9-6.4-21.7h-15.8l14.8 45.6h13.2l8-22.5 8 22.5h13.2l14.8-45.6h-15.7zm64 22.5v.1c0 13.1-10.8 23.6-24.8 23.6s-24.6-10.3-24.6-23.5v-.1c0-13.1 10.8-23.6 24.8-23.6s24.6 10.4 24.6 23.5zm-15.3.1c0-5.4-3.7-10.2-9.5-10.2s-9.4 4.8-9.4 10.1v.1c0 5.4 3.7 10.2 9.5 10.2s9.4-4.8 9.4-10.1v-.1z"/>
    </LogoEl>
);

export default Logo;

