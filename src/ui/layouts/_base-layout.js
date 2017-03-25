import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBarMenu from '../components/generic/_bar';

injectTapEventPlugin();


const BaseLayout = ({ children }) => (
  <div>

    <AppBarMenu />
    {children}

    <div>I am the footer</div>
  </div>
);
BaseLayout.propTypes = {
  children: React.PropTypes.string.isRequired,
};
export default BaseLayout;
