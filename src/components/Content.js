import React from 'react';
import FacebookPlayer from 'react-facebook-player';

export default ({ content, className }) => (
  <div className={className}>{content}</div>
);

export const HTMLContent = ({ content, className }) => {
  /**
   * Facebook video component injection
   * Replace: [facebook:videoId]
   */
  const regex = /\[fb\:[0-9]{15}]/g;
  const sections = content.split(regex);
  const videos = [];

  content.replace(regex, match => {
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

  //<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fravereviewz%2Fvideos%&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>

  console.log(sections, videos);
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
