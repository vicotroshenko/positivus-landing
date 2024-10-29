import {
  AdvertisingSvg,
  ContentSvg,
  EmailMarketingSvg,
  SearchSvg,
  SocialMediaSvg,
  TrackingSvg,
} from '../SVG/ServicesSection';

const data = {
  mainTitle: 'Services',
  subtitle:
    'At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:',
  cards: [
    {
      title: 'Search engine optimization',
      Img: SearchSvg,
    },
    {
      title: 'Pay-per-click advertising',
      Img: AdvertisingSvg,
    },
    {
      title: 'Social Media Marketing',
      Img: SocialMediaSvg,
    },
    {
      title: 'Email Marketing',
      Img: EmailMarketingSvg,
    },
    {
      title: 'Content Creation',
      Img: ContentSvg,
    },
    {
      title: 'Analytics and Tracking',
      Img: TrackingSvg,
    },
  ],
};

export default data;
