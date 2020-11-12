import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section, SocialMedia } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Home | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Home | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="0 0 0 0"
			sm-align-items="center"
			sm-justify-content="center"
			quarkly-title="Hero"
			lg-padding="0 0 0 0"
			sm-padding="0px 0 0 0"
			justify-content="center"
			height="600px"
			lg-height="500px"
			lg-align-items="center"
			sm-height="600px"
			md-height="375px"
		>
			<Override
				slot="SectionContent"
				width="100%"
				height="100%"
				align-items="center"
				justify-content="center"
				sm-width="100%"
				lg-height="100%"
				md-height="100%"
				md-padding="0px 0 0px 0"
				md-margin="0px 0 0px 0"
				max-width="none"
				lg-min-width="none"
				sm-height="100%"
				sm-margin="0px 0 0px 0"
				sm-padding="0px 0 0px 0"
			/>
			<Stack
				width="100%"
				align-items="center"
				height="100%"
				margin="0px 0px 0px 0px"
				lg-justify-content="center"
			>
				{"    "}
				<StackItem
					width="50%"
					display="flex"
					height="100%"
					padding="0px 0px 0px 0px"
					background="--color-lightD2 url(https://images.unsplash.com/photo-1581568827039-c82366997ea3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000) 0% 50%/cover"
					sm-width="100%"
					sm-height="50%"
				>
					<Override slot="StackItemContent" width="100%" height="100%" />
					{"        "}{"    "}
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					height="100%"
					padding="0px 0px 0px 0px"
					background="--color-lightD2 url(https://images.unsplash.com/photo-1605025181048-b54579ef54e0?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) 0% 50%/cover"
					sm-width="100%"
					sm-height="50%"
				>
					<Override slot="StackItemContent" width="100%" height="100%" />
					{"        "}{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			padding="50px 0px 50px 0px"
			sm-padding="24px 0 24px 0"
			quarkly-title="About"
			background="--color-light"
			border-color="--color-light"
			border-style="solid"
			border-width="0px"
			box-sizing="border-box"
			lg-padding="50px 30px 50px 30px"
			justify-content="center"
			height="auto"
			align-items="center"
			md-padding="30px 15px 30px 15px"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				margin="0px 5px 0px 5px"
				width="90%"
				md-margin="0px 16px 0px 16px"
				justify-content="center"
				height="auto"
				lg-min-width="none"
				lg-max-width="90%"
				lg-width="90%"
				xl-min-width="none"
				xl-max-width="none"
				xl-min-height="none"
				xl-width="90%"
				min-width="none"
				max-width="none"
			/>
			<Text
				font="--base"
				margin="0px 0px 0px 0px"
				letter-spacing="0.5px"
				color="--dark"
				text-align="left"
				width="100%"
				lg-font="--base"
				sm-font="--base"
				height="auto"
				lg-width="100%"
				lg-display="flex"
				lg-align-items="center"
				lg-justify-content="left"
				lg-min-width="none"
				lg-min-height="none"
				xl-width="100%"
			>
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					TITLE TEXT
				</Strong>
			</Text>
			<Text
				font="--base"
				margin="0px 0px 0px 0px"
				letter-spacing="0.5px"
				color="--dark"
				text-align="left"
				width="100%"
				lg-font="--base"
				sm-font="--base"
				height="auto"
				lg-width="100%"
				lg-display="flex"
				lg-align-items="center"
				lg-justify-content="center"
				lg-min-width="none"
				lg-min-height="none"
				as="p"
				xl-width="100%"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</Text>
			<Text
				font="--base"
				margin="0px 0px 0px 0px"
				letter-spacing="0.5px"
				color="--dark"
				text-align="left"
				width="100%"
				lg-font="--base"
				sm-font="--base"
				height="auto"
				lg-width="100%"
				lg-display="flex"
				lg-align-items="center"
				lg-justify-content="left"
				lg-min-width="none"
				lg-min-height="none"
				as="p"
				xl-width="100%"
			>
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					TITLE TEXT
				</Strong>
			</Text>
			<Text
				font="--base"
				margin="0px 0px 0px 0px"
				letter-spacing="0.5px"
				color="--dark"
				text-align="left"
				width="100%"
				lg-font="--base"
				sm-font="--base"
				height="auto"
				lg-width="100%"
				lg-display="flex"
				lg-align-items="center"
				lg-justify-content="center"
				lg-min-width="none"
				lg-min-height="none"
				as="p"
				xl-width="100%"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</Text>
			<Text
				font="--base"
				margin="0px 0px 0px 0px"
				letter-spacing="0.5px"
				color="--dark"
				text-align="left"
				width="100%"
				lg-font="--base"
				sm-font="--base"
				height="auto"
				lg-width="100%"
				lg-display="flex"
				lg-align-items="center"
				lg-justify-content="left"
				lg-min-width="none"
				lg-min-height="none"
				as="p"
				xl-width="100%"
			>
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					TITLE TEXT
				</Strong>
			</Text>
			<Text
				font="--base"
				margin="0px 0px 0px 0px"
				letter-spacing="0.5px"
				color="--dark"
				text-align="left"
				width="100%"
				lg-font="--base"
				sm-font="--base"
				height="auto"
				lg-width="100%"
				lg-display="flex"
				lg-align-items="center"
				lg-justify-content="center"
				lg-min-width="none"
				lg-min-height="none"
				xl-width="100%"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</Text>
		</Section>
		<Section
			margin="0 0 0 0"
			padding="15px 0 15px 0"
			box-sizing="border-box"
			quarkly-title="Footer"
			background="#000"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 0px 0px 0px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
				justify-content="center"
				align-items="center"
			/>
			<Stack
				width="100%"
				margin="0px 0px 0px 0px"
				height="70px"
				align-self="center"
				align-items="center"
				justify-content="center"
			>
				{"    "}
				<StackItem
					display="flex"
					quarkly-title="Logo"
					md-width="50%"
					width="35%"
					justify-content="flex-start"
					align-items="center"
					padding="0px 16px 0px 0px"
					height="70px"
				>
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" width="90%" />
					<Image
						width="28px"
						height="50px"
						src="https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-quarkly-logo-grey.svg?v=2020-11-06T17:24:35.270Z"
						display="flex"
						align-items="center"
						justify-content="flex-start"
						align-self="auto"
					/>
					<Link
						href="https://quarkly.io/"
						font="--base"
						color="--light"
						opacity="0.6"
						text-decoration-line="initial"
						text-align="left"
						margin="0 0px 0px 10px"
						hover-text-decoration-line="underline"
						white-space="nowrap"
					>
						Made by Name
					</Link>
					{"        "}
				</StackItem>
				<StackItem
					quarkly-title="Side"
					width="60%"
					md-width="50%"
					align-self="flex-end"
					padding="0px 0px 0px 0px"
					display="flex"
					height="70px"
				>
					<Override slot="StackItemContent" justify-content="flex-end" width="100%" align-items="center" />
					<SocialMedia
						facebook="https://www.facebook.com/quarklyapp/"
						twitter="https://twitter.com/quarklyapp"
						youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
						height="70px"
						width="250px"
						justify-content="flex-end"
						align-items="center"
						align-self="center"
					>
						<Override slot="link" background="none" border-radius="50%" />
						<Override slot="icon" color="--light" />
					</SocialMedia>
					{"   "}
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