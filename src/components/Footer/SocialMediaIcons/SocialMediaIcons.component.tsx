import React from 'react';

import facebookIcon from '../../../assets/images/png/facebool.png';
import linkedinIcon from '../../../assets/images/png/linkedin.png';
import xIcon from '../../../assets/images/png/x.png';
import styles from './SocialMediaIcons.module.css';

const mediaItems = [
  {
    link: 'https://www.linkedin.com/',
    label: 'link to linkedin',
    img: linkedinIcon,
    alt: 'linkedin logo',
  },
  {
    link: 'https://www.facebook.com/"',
    label: 'link to facebook',
    img: facebookIcon,
    alt: 'facebook logo',
  },
  {
    link: 'https://x.com/',
    label: 'link to x',
    img: xIcon,
    alt: 'x logo',
  },
];

const SocialMediaIcons = () => {
  return (
    <ul className={styles.media_icons}>
      {mediaItems.map((item) => (
        <li key={item.link}>
          <a
            href={item.link}
            aria-label={item.label}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <img
              src={item.img}
              alt={item.alt}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaIcons;
