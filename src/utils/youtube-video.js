import React from 'react';
import YouTube from 'react-youtube';

export const YT_VIDEO_REGEX = /\[yt\:[^&"'>]{11}]/g;

export function findYTVideo(html) {
  /**
   * Facebook video component injection
   * Replace: [yt:videoId]
   */
  const videos = [];
  const opts = {
    width: '720',
    height: '405',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      color: 'white',
      rel: 0,
      autoplay: 0,
    },
  };

  html.replace(YT_VIDEO_REGEX, match => {
    const videoId = match.substr(4, 11);
    videos.push(<YouTube videoId={videoId} opts={opts} />);
    return '';
  });

  return videos;
}
