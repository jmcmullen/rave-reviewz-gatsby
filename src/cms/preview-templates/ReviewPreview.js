import React from 'react';
import { BlogPostTemplate } from '../../templates/review-post';

const ReviewPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
);

export default ReviewPreview;
