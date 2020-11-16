import React from "react";
import theme from "theme";
import { Theme, Link, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			quarkly-title="Hero"
			padding="0 0 0 0"
			lg-padding="0 0 0 0"
			height="100%"
			min-width="100%"
			min-height="1000px"
			background="url(https://uploads.quarkly.io/5fac60bf2c4ef2001e3238d6/images/AdobeStock_241551909.jpg?v=2020-11-16T11:52:16.260Z) 50% 50%/cover,black"
			align-items="center"
			justify-content="center"
			sm-min-height="none"
			md-min-height="none"
			lg-min-height="none"
			xl-min-height="none"
		>
			<Override
				slot="SectionContent"
				width="100%"
				height="100%"
				max-width="none"
				align-items="center"
				justify-content="center"
				min-width="100%"
				min-height="100%"
			/>
			<Stack
				width="100%"
				height="100%"
				min-width="none"
				min-height="none"
				align-items="center"
				justify-content="center"
				margin="0 0 0 0"
			>
				{"    "}
				<StackItem
					width="100%"
					display="flex"
					padding="0 0 0 0"
					height="100%"
					justify-content="center"
					align-items="center"
					min-height="100%"
					min-width="100%"
				>
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						height="100%"
						md-height="360px"
						flex-direction="column"
						width="100%"
						min-width="100%"
						min-height="100%"
					/>
					{"        "}
					<Image width="300px" height="auto" src="https://uploads.quarkly.io/5fac60bf2c4ef2001e3238d6/images/cisco.png?v=2020-11-16T11:10:17.770Z" />
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});