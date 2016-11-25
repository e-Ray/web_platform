import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class Dashboard extends Component {

	render(){
		const{ className, ...props } =this.props;
		return (
			<div className={classnames('Dashboard', className)} {...props}>
				<h1>
					Dashboard
				</h1>
			</div>
		);
	}
}