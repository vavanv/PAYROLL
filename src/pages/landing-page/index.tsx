import * as React from 'react';

import { MainContainer } from '../../pages/main-container';
import { ProductSection } from '../../pages/landing-page/sections/product-section';

function LandingPageComponent() {
  return (
    <MainContainer>
      <ProductSection />
    </MainContainer>
  );
}

export const LandingPage = React.memo(LandingPageComponent);
