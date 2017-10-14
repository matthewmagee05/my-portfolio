import React from 'react';

class ExampleWorkModal extends React.Component {
	render() {
		let example = this.props.example;
		let modalClass = this.props.open ? 'modal--open' : 'modal--closed';

		return (
			<div className={'background--skyBlue ' + modalClass}>
				<span className="color--cloud modal__closeButton">
					<i className="fa fa-window-close-o" onClick={this.props.closeModal} />
				</span>
				<img alt={example.image.desc} className="modal__image" src={example.image.src} />
				<div className="color--cloud modal__text">
					<h2 className="modal__title">
						{example.title}
					</h2>
					<a className="color--skyBlue modal__link" href={example.href}>
						Check it out
					</a>
					<p className="modal__description">
						{example.desc}
					</p>
					<h4>Technologies Used:</h4>
					<ul>
						{example.techUsed.map((data, index) => {
							return <TechnologyLogo imageSrc={data} key={index} />;
						})}
					</ul>
				</div>

			</div>
		);
	}
}

class TechnologyLogo extends React.Component {
	render() {
		return (
			<li className="modal__techUsed">
				<img src={this.props.imageSrc} />
			</li>
		);
	}
}

export default ExampleWorkModal;
export { TechnologyLogo };
