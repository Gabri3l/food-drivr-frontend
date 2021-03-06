import React from 'react';
import AppStoreIcon from '../Reusable/AppStoreIcon.jsx';
import Arrow from './Arrow.jsx';
import Headline from '../Reusable/Headline.jsx';
import BodyButton from './BodyButton.jsx';
import DriverDescription from './DriverDescription.jsx';
import DonorDescription from './DonorDescription.jsx';

class SectionBecomeA extends React.Component {
  constructor() {
    super();
    this.state = {
      userType: 'Driver',
      description: ''
    };
    this.onSubmitDriver = this.onSubmitDriver.bind(this);
    this.onSubmitVolunteer = this.onSubmitVolunteer.bind(this);
  }

  onSubmitDriver() {
    this.setState({ userType: 'Driver' });
  }

  onSubmitVolunteer() {
    this.setState({ userType: 'Donor' });
  }

  render() {
    return (
      <section className="become-a bg-grey-dark__gradient">
        <Arrow
          direction="Left"
          onClick={this.state.userType === 'Driver' ?
            this.onSubmitVolunteer
          :
            this.onSubmitDriver
          }
        />
        <section className="become-a__content text-white">
          <Headline
            value={`Become a ${this.state.userType}`}
            className="become-a__title"
          />
            {this.state.userType === 'Driver' ?
              <DriverDescription />
            :
              <DonorDescription />
            }
          <BodyButton />
        </section>
        <AppStoreIcon className="become-a__appstore-icon" />
        <div className="become-a__app-sample" />
        <Arrow
          direction="Right"
          onClick={this.state.userType === 'Driver' ?
            this.onSubmitVolunteer
          :
            this.onSubmitDriver}
        />
      </section>
    );
  }
}

export default SectionBecomeA;
