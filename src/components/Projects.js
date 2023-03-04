import { Container, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

export const Projects = () => {
	const projects = [
		{
			title: 'Business Startup',
			description: 'Design & Development',
			imgUrl: projImg1,
		},
		{
			title: 'Business Startup',
			description: 'Design & Development',
			imgUrl: projImg2,
		},
		{
			title: 'Business Startup',
			description: 'Design & Development',
			imgUrl: projImg3,
		},
		{
			title: 'Business Startup',
			description: 'Design & Development',
			imgUrl: projImg1,
		},
		{
			title: 'Business Startup',
			description: 'Design & Development',
			imgUrl: projImg2,
		},
		{
			title: 'Business Startup',
			description: 'Design & Development',
			imgUrl: projImg3,
		},
	];
	return (
		<section
			className="project"
			id="project"
		>
			<Container>
				<Row>
					<Col>
						<h2>Projects</h2>
						<p>
							JavaScript is a language that i still don't know and i have to improve on my spellings as my
							family thinks that i am all thunder no lighting, I would love to prove them all wrong.
						</p>
						<Tab.Container
							id="projects-tabs"
							defaultActiveKey="first"
						>
							<Nav
								variant="pills"
								defaultActiveKey="/home"
							>
								<Nav.Item>
									<Nav.Link eventKey="first">Tab One</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">Tab Two</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">Tab Three</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<Row>
										{projects.map((project, index) => {
											return <p>{project.title}</p>;
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="second">Lorem Ipsome</Tab.Pane>
								<Tab.Pane eventKey="third">Lorem Ipsome</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
