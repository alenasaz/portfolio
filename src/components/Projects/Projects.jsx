import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import colorShrap2 from '../../assets/img/color-sharp2.png';
import project1 from '../../assets/img/project1.jpg';
import project2 from '../../assets/img/project2.jpg';
import project3 from '../../assets/img/project3.jpg';
import { FormattedMessage } from 'react-intl';
import './Projects.css';

const projects = [
  {
    title: 'System of Bussiness Planing',
    description: 'Design & Development',
    imgUrl: project1,
  },
  {
    title: 'System of Bussiness Planing',
    description: 'Design & Development',
    imgUrl: project2,
  },
  {
    title: 'Educational platform',
    description: 'Design & Development',
    imgUrl: project3,
  },
];

export const Projects = () => {
  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col>
            <h2>
              {' '}
              <FormattedMessage id='projects_header' />
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Tab.Content>
                <Row>
                  {projects?.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                  })}
                </Row>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' alt='1' src={colorShrap2}></img>
    </section>
  );
};
