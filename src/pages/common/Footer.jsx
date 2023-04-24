import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
	return (
		<>
			<footer>
				<div className="container d-lg-flex align-items-center justify-content-between py-3 small text-center">
					<div className="text-white small">Copyright © 2023 Outdoor Canine Tracker - All rights reserved</div>
					<div className="text-white">
					<span className="mx-2">
					<a href="https://github.com/Neelkanth7/Canine-Tracker">
						<GitHubIcon fontSize="small" style={{ color: "white" }} />
					</a>
					</span>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;