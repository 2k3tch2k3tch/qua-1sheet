import React from "react";
import theme from "theme";
import { Theme, Link, Text } from "@quarkly/widgets";
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
			background="url(https://images.unsplash.com/photo-1605025175565-a2937cf2e7aa?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) 0% 0%/cover,black"
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
					<Text
						color="--light"
						font="--headline1"
						margin="30px 15px 30px 15px"
						sm-text-align="center"
						sm-width="80%"
						text-align="center"
						padding="0px 0 0px 0"
					>
						Title Page
					</Text>
					<Link
						href="/"
						text-decoration-line="initial"
						color="--dark"
						background="--color-light"
						padding="15px 30px 15px 30px"
						font="--base"
						letter-spacing="0.5px"
						hover-transform="translateY(-4px)"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
						margin="10px 10px 10px 10px"
					>
						Home Page
					</Link>
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