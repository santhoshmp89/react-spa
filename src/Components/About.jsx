import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import { Helmet } from "react-helmet";

const styles = StyleSheet.create({
	h1: {
		fontSize: "7.5em",
		margin: "15px 0px",
		fontWeight: "bold",
	},
	h2: {
		fontWeight: "bold",
	},
});
const About = () => {
	return (
		<div class="col-md-6 align-self-center">
			<Helmet>
				<title>About</title>
				<script language="javascript" type="text/javascript">
					{`
						function init() {
							window.RProfiler.excludeBenchMarks();
						}
						window.RProfiler ? init() : window.addEventListener("GlimpseLoaded", init);
					`}
				</script>
			</Helmet>
			<h1 className={css(styles.h1)}>About</h1>
			<h2 className={css(styles.h2)}>About Us</h2>
			<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex velit unde
				nemo cum veniam esse non accusamus a aliquid. Maiores possimus nam
				doloribus labore in sequi! Officia quasi eveniet corrupti!
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex velit unde
				nemo cum veniam esse non accusamus a aliquid. Maiores possimus nam
				doloribus labore in sequi! Officia quasi eveniet corrupti!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex velit unde
				nemo cum veniam esse non accusamus a aliquid. Maiores possimus nam
				doloribus labore in sequi! Officia quasi eveniet corrupti!
			</p>
		</div>
	);
};

export default About;
