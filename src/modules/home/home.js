import React from 'react';
import {Input} from 'semantic-ui-react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import axios from 'axios';
import './home.css';
class Home extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			list: []
		}
	}
	componentDidMount() {
		axios.post('homes/swipe').then(result=> {
			// console.log(result);
			if(result.meta.status === 200) {
				this.setState({
					images: result.data.list
				});
			}
		})
	}
	render() {
		// const images = [{
		//   "original": "http://47.96.21.88:8086/public/1.png"
	 //    }, {
	 //      "original": "http://47.96.21.88:8086/public/2.png"
	 //    }, {
	 //      "original": "http://47.96.21.88:8086/public/3.png"
		// }]
		return(
			<div className= 'home-container'>
				<div className='home-topbar'>
					<Input fluid icon={{ name: 'search', circular: true, link: true }} placeholder='搜房源...' />
				</div>
				<div className='home-content'>
					<ImageGallery items={this.state.images} showThumbnails={false} />
				</div>
			</div>
		);
	}
}
export default Home;