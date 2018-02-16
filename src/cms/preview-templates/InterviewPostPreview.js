import React from 'react';
import { InterviewPostTemplate } from '../../templates/interview-post';

const InterviewPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
);

export default InterviewPostPreview;
