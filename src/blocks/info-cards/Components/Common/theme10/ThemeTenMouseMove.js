import React, { useEffect } from 'react';
import ThemeTenGrabInfo from './ThemeTenGrabInfo';

const ThemeTenMouseMove = ({ attributes, setAttributes, isEditor ,premiumProps}) => {



    useEffect(() => {
    // Only run in frontend
    if (!isEditor && typeof window !== "undefined") {
      const { UnicornStudio } = window;

      if (UnicornStudio && !UnicornStudio.isInitialized) {
        try {
          UnicornStudio.init();
          UnicornStudio.isInitialized = true;
        } catch (error) {
          error
        
        }
      }
    }
  }, [isEditor]);

    return (
       <div
      className="themeTenGrabMouseMoveSection"
      data-us-project="jSQIShw8nRxgcNnhfv18"
    >
      <div className="themeTenGrabMouseMoveContent">
        <div>
          <ThemeTenGrabInfo
            isEditor={isEditor}
            attributes={attributes}
            setAttributes={setAttributes}
            premiumProps={premiumProps}
          />
        </div>
      </div>
    </div>
    );
};

export default ThemeTenMouseMove;