import React from 'react';

import SearchSvg from '../SVG/ServicesSection/SearchSvg.component';
import ServiceItem from './ServiceItem/ServiceItem.component';

const ServiceSection = () => {
  return (
    <section>
      <div>
        <ServiceItem title="Search engine optimization">
          <SearchSvg />
        </ServiceItem>
      </div>
    </section>
  );
};

export default ServiceSection;
