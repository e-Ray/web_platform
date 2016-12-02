import React from 'react';
import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};
const MenuExampleIcons = () => (
  <div>
    <Paper style={style.paper}>
      <Menu>
        <MenuItem primaryText="Dashboard" leftIcon={<RemoveRedEye />}  checked linkButton={true} href="/dashboard"/>
        <MenuItem primaryText="Graph 1"  />
        <MenuItem primaryText="Graph 2" leftIcon={<RemoveRedEye />} />

        <MenuItem primaryText="Graph 3" leftIcon={<RemoveRedEye />} />
        <MenuItem primaryText="Graph 4" leftIcon={<RemoveRedEye />} />

        <MenuItem primaryText="Graph 5" leftIcon={<RemoveRedEye />} />
      </Menu>
    </Paper>
  </div>
);

export default MenuExampleIcons;
