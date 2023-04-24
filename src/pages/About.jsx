import React from "react";
import Secheader from "./common/Secondaryheader";
import Teams from "../data/Teamsdata";


const Tcards = (props) => {
	return (

		<figure className="figure col-md-3 text-center">
			<img src={props.timage} className="figure-img img-fluid rounded col-lg-6 col-7 col-md-10" alt="team3" />
			  <figcaption className="figure-caption text-dark">{props.ttitle}</figcaption>
		</figure>
	);
};

const About = () => {
	return (
		<>

		<Secheader 
			sectitle="About" 
			secdesc="Track your dog's whereabouts." 
		/>

		<section>
			<div className="container mx-auto py-5 col-lg-10 col-xl-9">
				<div className="mb-5 text-center">
					<p className="display-6 mb-1">Who We Are...</p>
					<p className="text-muted">Our team simplifies your dog's outings effortlessly.</p>
				</div>
				<p>Canine tracker app has revolutionized the way pet owners keep track of their furry companions. By utilizing IoT and machine learning, this can provide insightful information about your dog's activities throughout the day, including exercise, sleep, and overall health. Moreover, the app has taken it a step further by incorporating weather tracking features, allowing pet owners to plan their dog's outdoor activities based on current weather conditions. With real-time updates on the weather, our app can suggest the best times to take your dog for a walk or play outside, ensuring that your pet stays healthy and happy.</p>
			</div>
		</section>

		

		<section>
			<div className="container py-5 m-auto">
				<div className="mb-4">
					<p className="display-6 text-center mb-1">Our Team</p>
					<p className="d-lg-block d-none col-8 m-auto text-center text-muted">These people are the reason for our success and stainless reputation.<br/>They have years of experience and absolute dedication to what they do.</p>
				</div>
				<div className="row col-lg-11 d-flex align-items-center justify-content-evenly m-auto">
						{
							Teams.map((val, ind) => {
								return <Tcards key={ind}
									timage={val.timage}
									ttitle={val.ttitle}
								/>
							})
						}
				</div>
			</div>
		</section>
		
		</>
	);
};

export default About;