import React from "react";
import Secheader from "./common/Secondaryheader";
import CheckIcon from '@material-ui/icons/Check';
import Graph from "../graph";


const Life = (props) => {
	return(
		<div className="d-flex align-items-center mb-4">
			<span className="career_life"><CheckIcon /></span>
			<span className="d-flex flex-column">
				<h5>{props.ltitle}</h5>
				<p className="small text-muted">{props.ldesc}</p>
			</span>
		</div>
	);
};


const Positions = (props) => {
	return(		
		<div className="d-flex justify-content-between align-items-center mb-3">
			<span className="d-flex flex-column">
				<p className="mb-0">{props.ptitle}</p>
				<p className="small text-muted">{props.pcity}</p>
			</span>
			<span>
				<button className="btn btn_custom mr-4">Apply</button>
			</span>
		</div>
	);
};

const Career = () => {
	return(

		<>
			<Secheader 
				sectitle="Dog's activity summaries" 
				secdesc="In the below visualization find your dog's activity distribution in last 5 outing sessions" 
			/>

			<Graph />

		</>
	);
};

export default Career;