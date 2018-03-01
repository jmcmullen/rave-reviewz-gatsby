import React from 'react';
import { findFBVideo, FB_VIDEO_REGEX } from '../utils/facebook-video';
import { findYTVideo, YT_VIDEO_REGEX } from '../utils/youtube-video';

export default ({ content, className }) => (
  <div className={className}>{content}</div>
);

export const HTMLContent = ({ content, className }) => {
  /**
   * Find facebook and youtube video ids and replace with player
   * Syntax: [fb:videoId] & [yt:videoId]
   */
  console.log(FB_VIDEO_REGEX, YT_VIDEO_REGEX);
  const sections = content
    .split(YT_VIDEO_REGEX)
    .join('[section_break]')
    .split(FB_VIDEO_REGEX)
    .join('[section_break]')
    .split('[section_break]');
  const embedVideos = [];
  embedVideos.push(findFBVideo(content));
  embedVideos.push(findYTVideo(content));
  const videos = embedVideos.filter(video => video.length);

  return (
    <div className="text-section">
      {sections.map((section, i) => (
        <div key={i}>
          <div
            className={className}
            dangerouslySetInnerHTML={{ __html: section }}
          />
          <center>{videos.length > i && videos[i]}</center>
        </div>
      ))}
    </div>
  );
};
