import React from 'react';
import DesignHome from '../Components/Design/DesignHome';
import DesignFooter from '../Components/Design/DesignFooter';
import CardDesign from '../Components/Design/CardDesign';
import VideoDesign from '../Components/Design/VideoDesign';

function DesignPage() {
  return (
    <>
      <DesignHome />
      <CardDesign />
      <VideoDesign />
      <DesignFooter />
    </>
  );
}

export default DesignPage;
