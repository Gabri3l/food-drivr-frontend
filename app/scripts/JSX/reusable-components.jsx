var Header = React.createClass({
<<<<<<< HEAD
    render: function(){
        return (
                <div className='header text-flex'>
                    <h3 className='text-grey'>
                        <a href="#">Food Taxi Logo</a>
                    </h3>
                    <Login />
                </div>
            );
    }
=======
	render: function(){
		return (
				<div className='header text-flex'>
					<h3 className='text-grey'>
						<a href="#">Food Taxi Logo</a>
					</h3>
					<Login />
				</div>
			);
	}
>>>>>>> gabriele-master
});

var Headline = React.createClass({
	render: function() {
		return (
			<h1 className='text-center'>{this.props.value}</h1>
		);
	}
});

var Login = React.createClass({
    render: function(){
        return (
                <h3 className='text-margin-left'>
                <a className='text-grey' href="#signin">Login</a>
                </h3>
            );
    }
});

var Footer = React.createClass({
    render: function(){
        return (
            <div className='footer'>
                <p>Made with ♥ by <a href='http://hacksmiths.io'>Team Hacksmiths</a></p>
            </div>
            );
    }
});