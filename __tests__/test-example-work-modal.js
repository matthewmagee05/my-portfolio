import React from 'react';
import { shallow, configure } from 'enzyme';
import Enzyme from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const myExample = {
	title: 'Work Example',
	href: 'https://example.com',
	desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam perspiciatis necessitatibus laboriosam recusandae. Eveniet eum, odio consequatur, deserunt vel asperiores. Atque, molestiae obcaecati quibusdam ex repellendus quas beatae doloremque ratione?',
	image: {
		desc: 'example screenshot of a project involving code',
		src: 'images/example1.png',
		comment: ''
	}
};

describe('ExampleWorkModal component', () => {
	let component = shallow(<ExampleWorkModal example={myExample} open={false} />);
	let openComponent = shallow(<ExampleWorkModal example={myExample} open={true} />);
	let anchors = component.find('a');

	it("Should contain a single 'a' element", () => {
		expect(anchors.length).toEqual(1);
	});

	it('Should link to our project', () => {
		expect(anchors.getElement().props.href).toEqual(myExample.href);
	});

	it('Should have the modal class set correctly', () => {
		expect(component.find('.background--skyBlue').hasClass('modal--closed')).toBe(true);
		expect(openComponent.find('.background--skyBlue').hasClass('modal--open')).toBe(true);
	});
});
