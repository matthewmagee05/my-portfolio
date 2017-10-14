import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';
import SocialMediaWrapper from './social-media-links';
import myWork from '../data/example-work';
import socialMedia from '../data/social-media-links';

ReactDOM.render(<SocialMediaWrapper socialMedia={socialMedia} />, document.getElementById('social-media-links'));
ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));
