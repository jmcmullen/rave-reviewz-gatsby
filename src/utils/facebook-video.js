import React from 'react';
import FacebookPlayer from 'react-facebook-player';

export const FB_VIDEO_REGEX = /\[fb\:[0-9]{15}]/g;

export function findFBVideo(html) {
  /**
   * Facebook video component injection
   * Replace: [fb:videoId]
   */
  const videos = [];

  html.replace(FB_VIDEO_REGEX, match => {
    const videoId = match.substr(4, 15);
    videos.push(
      <FacebookPlayer
        key={videoId}
        appId="1994812974114706"
        videoId={videoId}
        id={videoId}
        className="fb-player"
        width={720}
        showText={false}
        showCaptions={false}
      />
    );
    return '';
  });

  return videos;
}
