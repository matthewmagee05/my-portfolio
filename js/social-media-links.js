import React from 'react';

class SocialMediaWrapper extends React.Component {
	render() {
		return (
			<ul className="section--social">
				{this.props.socialMedia.map((data, index) => {
					return <SocialMediaLink data={data} key={index} />;
				})}
			</ul>
		);
	}
}

class SocialMediaLink extends React.Component {
	render() {
		let data = this.props.data;
		return (
			<li className="socialWrapper">
				<a className="color--skyBlue social" title={data.title} target="_blank" href={data.href}>
					<i className={data.icon} />
				</a>
			</li>
		);
	}
}

export default SocialMediaWrapper;
export { SocialMediaLink };
