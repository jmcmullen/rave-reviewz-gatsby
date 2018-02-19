import React from 'react';
import { BlogPostTemplate } from '../../templates/review-post';

const ReviewPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
);

export default ReviewPostPreview;
