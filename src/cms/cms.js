import CMS from 'netlify-cms';
import 'netlify-cms/dist/cms.css';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import InterviewPostPreview from './preview-templates/InterviewPostPreview';
import ReviewPostPreview from './preview-templates/ProductPagePreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('review', ReviewPostPreview);
CMS.registerPreviewTemplate('interview', InterviewPostPreview);
