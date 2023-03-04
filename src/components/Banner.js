import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer'];
	const [text, setText] = useState('');
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);
		return () => {
			clearInterval(ticker);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fulltext = toRotate[i];
		let updatedText = isDeleting ? fulltext.substring(0, text.length - 1) : fulltext.substring(0, text.length + 1);
		setText(updatedText);
		if (isDeleting) {
			setDelta((pervDelta) => pervDelta / 2);
		}
		if (!isDeleting && updatedText === fulltext) {
			setIsDeleting(true);
			setDelta(period);
		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(500);
		}
	};
	return (
		<section
			className="banner"
			id="home"
		>
			<Container>
				<Row className="align-items-center">
					<Col
						xs={12}
						md={6}
						xl={7}
					>
						<span className="tagline">Welcome to my Portfolio</span>
						<h1>
							{"Hi I'm webdecoded "} <span className="wrap">{text}</span>
						</h1>
						<p>
							these are just a bunch of random texts that are just being written as a place holder as this
							would be late changed and i am just trying to improve my touch typing speed and accuracy.
						</p>
						<button
							onClick={() => {
								console.log('connect');
							}}
						>
							Let's Connect <ArrowRightCircle size={25} />
						</button>
					</Col>
					<Col
						xs={12}
						md={6}
						xl={5}
					>
						<img
							src={headerImg}
							alt="Header Logo"
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
