import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import $ from 'jquery';
import {Headline} from './reusable-components.jsx';


var BodyButton = React.createClass({
    render: function(){
        return (
            <Link to="/signup" role="button" className='button-home'>
                JOIN US
            </Link>
        );
    }
});

var SectionIntro = React.createClass({
	render: function(){
		return (
			<div className='homepage-intro'>
                <p className="text-center text-grey">
                    FOOD DRIVR
                </p>
                <p className='text-center text-grey'>
                    Powering Donations
                </p>
                <p className='text-center text-grey'>
                    For
                </p>
				<Headline value="WASTE NOT FOOD TAXI"/>
				<p className='lead text-center text-grey'>
                    On a daily basis, businesess like catering facilities, restaurants, grocery stores, as well as individuals produce more food than what is necessary for them to meet their needs.
                    <br/>
                    <br/>
                    Organizations that utilize Food Drivr help deliver this excess to people in need.
                    <br/>
                    Join us and help end hunger.
				</p>
                <br/>
				<div className='text-center'>
					<BodyButton />
				</div>
			</div>
		);
	}
});

var SectionHowTo = React.createClass({
    render: function(){
        return (
            <div className='homepage-howto'>
                <Headline value="HOW IT WORKS"/>
                <div className='howtodiv'>
                    <p>DONATING</p>
                    <br/>
                    <p className="text-center">
                        After signing up, donors can enter in items they wish to donate to those in need. Once items are donated, a notification is sent out to all drivers of a pending donation.
                    </p>
                </div>
                <div className='howtodiv'>
                    <p>PICKUP</p>
                    <br/>
                    <p className="text-center">
                        Drivers receive notification of a pending donation and can choose to accept. Upon accepting, they will be given all of the information about the pending donation.
                    </p>
                </div>
                <div className='howtodiv'>
                    <p>DELIVERY</p>
                    <br/>
                    <p className="text-center">
                        After the pick up of a donation has been completed, drivers deliver the donation to the nearest pre-determined organization recipient.
                    </p>
                </div>
            </div>
        );
    }
});

var HomePage = React.createClass({
    render: function(){
        return (
            <div className='homepage'>
                    <SectionIntro />
                    <SectionHowTo />
            </div>
        );
    }
});

module.exports = HomePage;