import React from 'react';
import { Col } from 'react-bootstrap';

export const ProjectCard = ({
  title,
  desctiption,
  imgUrl,
  isMobile,
}: {
  title: string;
  desctiption?: string;
  imgUrl: string;
  isMobile: boolean;
}) => {
  return (
    <Col sm={isMobile ? 'auto' : 6} md={4}>
      <div className='proj-imgbx'>
        <img
          className={isMobile ? 'proj-img-mob' : 'proj-img'}
          src={imgUrl}
          alt='project'
        />
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <div>{desctiption}</div>
        </div>
      </div>
    </Col>
  );
};
