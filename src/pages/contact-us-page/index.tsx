import * as React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import { ContactUsInfo } from '../../pages/contact-us-page/sections/contact-us-info';
import { MainContainer } from '../../pages/main-container';

function ContactUsPageComponent(props: any) {
  const MapWithMarker: any = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap defaultZoom={12} defaultCenter={{ lat: 43.6995416, lng: -79.4264079 }}>
        <Marker position={{ lat: 43.6995416, lng: -79.4264079 }} />
      </GoogleMap>
    )),
  );
  var divStyle = {
    height: '100%',
    top: '90px',
  };
  return (
    <MainContainer>
      <MapWithMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAFSLuRvDgrH_4El47ocrdRdFk-RgZe2Iw&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '350px' }} />}
        mapElement={<div style={divStyle} />}
      />
      <ContactUsInfo {...props} />
    </MainContainer>
  );
}

export const ContactUsPage = React.memo(ContactUsPageComponent);
