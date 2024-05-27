import React, { FC } from 'react';
import { Col, Container, Row, Tab } from 'react-bootstrap';
import colorShrap2 from '../../assets/img/color-sharp2.png';
import project4_history from '../../assets/img/project4_history.png';
import project4_main from '../../assets/img/project4_main.png';
import project4_progress from '../../assets/img/project4_progress.png';

import { FormattedMessage } from 'react-intl';

import { ProjectCard } from '../ProjectCard/ProjectCard.tsx';
import './Projects.css';

const mobile_projects = [
  {
    title: 'Cashback platform',
    description: 'Design & Development',
    imgUrl: project4_main,
  },
  {
    title: 'Cashback platform',
    description: 'Design & Development',
    imgUrl: project4_history,
  },
  {
    title: 'Cashback platform',
    description: 'Design & Development',
    imgUrl: project4_progress,
  },
];

export const Projects: FC = () => {
  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>
              <FormattedMessage id='projects_header' />
            </h2>
            <p id='projects_description'>
              <FormattedMessage id='projects_description' />
            </p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Row>
                {mobile_projects?.map((project, index) => (
                  <ProjectCard key={index} {...project} isMobile />
                ))}
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' alt='1' src={colorShrap2}></img>
    </section>
  );
};
