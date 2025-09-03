import React, { Fragment } from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import { useParams, useRouteMatch, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Model from "./Model";
import SubMenu from "./SubMenu";

const styles = StyleSheet.create({
	conatiner: {
		display: "flex",
	},
	row: {
		padding: "5px",
	},
	h1: {
		fontWeight: "300",
		margin: "10px 20px",
		fontSize: "45px",
		color: "#a1352a",
	},
});

const Brand = () => {
	const { brand } = useParams();
	const { url } = useRouteMatch();
	return (
		<Fragment>
			<Helmet>
				<title>{brand}</title>
				{/* <script language="javascript" type="text/javascript">
					{`
						function init() {
							window.RProfiler.excludeBenchMarks();
						}
						window.RProfiler ? init() : window.addEventListener("GlimpseLoaded", init);

						function cpInit(command, options) {
						if (window.CPRUM) {
							window.CPRUM(command, options);
						} else {
							window.addEventListener('GlimpseLoaded', () => window.CPRUM(command, options));
						}
						}

						cpInit('consentv2', { analytics_storage: 'denied' });

					`}
				</script> */}

			</Helmet>
			<h1 className={css(styles.h1)}>{brand}</h1>
			<div className={css(styles.conatiner)}>
				<SubMenu />
				<div className={css(styles.row)}>
					<Switch>
						<Route path={`${url}/:model`}>
							<Model />
						</Route>
					</Switch>
				</div>
			</div>
		</Fragment>
	);
};

export default Brand;
