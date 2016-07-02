import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';

const DefaultCheckbox = ({
  address,
  handleToggle
}) => (
  <span>
    <Checkbox
      defaultChecked={address.default}
      onCheck={handleToggle}
    />
  </span>
);

DefaultCheckbox.propTypes = {
  address: PropTypes.object.isRequired,
  handleToggle: PropTypes.func.isRequired
};

export default DefaultCheckbox;