import React from "react";
import work1 from "../images/brands/raspberrypi.svg"
import work2 from "../images/brands/ifttt.svg"
import work3 from "../images/brands/amazon_aws.svg"
import work4 from "../images/brands/reactjs.svg"
import work5 from "../images/brands/jupyter.svg"
import work6 from "../images/brands/mqtt.svg"
import work7 from "../images/brands/esp32.png"
import work8 from "../images/brands/TDK.png"
import BusinessIcon from '@material-ui/icons/Business';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PhotoSizeSelectSmallIcon from '@material-ui/icons/PhotoSizeSelectSmall';

const Home = () => {
	return (
		<>
		<section className="sec_1"> 
			<div className="header_height sec_bg d-flex align-items-center">
				<div className="container">
					<div className="col-12 col-md-9 col-lg-6 py-5">
						<h1 className="hdrcolor">We create efficient digital solutions for you and your Dog!</h1>
						<button className="btn btn-lg col-lg-4 col-6 btn_custom btn_shadow">LET'S TALK</button>
					</div>
				</div>
			</div>
		</section>

		<section> 
			<div className="container mx-auto py-5">
				<div className="mb-4 text-center">
					<p className="display-6 mb-1">What we do...</p>
				</div>
				<div className="row gy-5 d-flex align-items-center justify-content-evenly mt-0">
					<div className="col-md-4 col-lg-3 text-center">
						<div className="box_border position-relative rounded pt-5 pb-3 px-3">
							<div className="shp"><BusinessIcon /></div>
							<p className="mb-2 mt-4">Weather Tracking</p>
							<p className="text-muted text-left text-xl-center text-lg-center">We give daily updates of the current weather to go out in the best time!</p>
						</div>
					</div>
					<div className="col-md-4 col-lg-3 text-center">
						<div className="box_border position-relative rounded pt-5 pb-3 px-3">
							<div className="shp"><PhotoSizeSelectSmallIcon /></div>
							<p className="mb-2 mt-4">Activity Analysis</p>
							<p className="text-muted text-left text-xl-center text-lg-center">We provide accurate analytics of your dog's activity during each outing.</p>
						</div>
					</div>
					<div className="col-md-4 col-lg-3 text-center">
						<div className="box_border position-relative rounded pt-5 pb-3 px-3">
							<div className="shp"><AttachMoneyIcon /></div>
							<p className="mb-2 mt-4">Door Notifications</p>
							<p className="text-muted text-left text-xl-center text-lg-center">We provide notifications to your personal device if your dog wants to enter the house!</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		

		<section className="bg-light"> 
			<div className="container mx-auto py-5">
				<div className="mb-5 text-center">
					<p className="display-6 mb-1">We Worked With...</p>
				</div>
				<div className="row gy-2 brands_logo d-flex align-items-center justify-content-evenly col-md-7 m-auto">
					<div className="col-md-3 col-4 col-lg-4 text-center">
						<img className="img-fluid" alt="company1" src={work1} />
					</div>
					<div className="col-md-3 col-4 col-lg-4 text-center">
						<img className="img-fluid" alt="company2" src={work2} />
					</div>
					<div className="col-md-3 col-4 col-lg-4 text-center">
						<img className="img-fluid" alt="company3" src={work3} />
					</div>
					<div className="col-md-3 col-4 col-lg-4 text-center">
						<img className="img-fluid" alt="company4" src={work4} />
					</div>
					<div className="col-md-3 col-4 col-lg-4 text-center">
						<img className="img-fluid" alt="company5" src={work5} />
					</div>
					<div className="col-md-3 col-4 col-lg-4 text-center">
						<img className="img-fluid" alt="company6" src={work6} />
					</div>
					<div className="col-md-3 col-4 col-lg-4 text-center">
						<img className="img-fluid" alt="company6" width="60px" height="60px" src={work7} />
					</div>
					<div className="col-md-3 col-4 col-lg-4 text-center">
						<img className="img-fluid" alt="company6" src={work8} />
					</div>
				</div>
			</div>
		</section>

		<section> 
			<div className="py-5">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-12 col-md-9 col-lg-6 py-5 text-center">
						<p className="display-6 mb-1">Work with an elite team of thinkers.</p>
						<button className="btn p-2 btn_custom col-lg-3 col-md-5 col-6">GET IN TOUCH</button>
					</div>
				</div>
			</div>
		</section>

		</>
	);
};

export default Home;