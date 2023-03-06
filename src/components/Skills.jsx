import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import skillsIcon from '../assets/img/skills_girl.png';
import colorSharp from '../assets/img/color-sharp.png';
import { FormattedMessage } from 'react-intl';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Skills = () => {
  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>
                {' '}
                <FormattedMessage id='skills_header' />
              </h2>
              <p>
                <FormattedMessage id='skills_description' />
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className='skill-slider'
              >
                <div className='item'>
                  <img src={skillsIcon} alt='Image' />
                  <h5>React</h5>
                </div>
                <div className='item'>
                  <img src={skillsIcon} alt='Image' />
                  <h5>Mobx/Effector</h5>
                </div>
                <div className='item'>
                  <img src={skillsIcon} alt='Image' />
                  <h5>JavaScript/TypeScript</h5>
                </div>
                <div className='item'>
                  <img src={skillsIcon} alt='Image' />
                  <h5>GraphQL/RestAPI</h5>
                </div>
                <div className='item'>
                  <img src={skillsIcon} alt='Image' />
                  <h5>TailWind</h5>
                </div>
                <div className='item'>
                  <img src={skillsIcon} alt='Image' />
                  <h5>SQL</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={colorSharp} alt='Image' />
    </section>
  );
};
