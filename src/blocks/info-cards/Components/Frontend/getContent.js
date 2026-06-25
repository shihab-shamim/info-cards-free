  
  
  import ThemeTenMouseMove from '../Common/theme10/ThemeTenMouseMove';
import ThemeElevenServiceInfo from '../Common/theme11/ThemeElevenServiceInfo';
import ThemeTwelveHoverService from '../Common/theme12/ThemeTwelveHoverService';
import Theme6 from '../Common/theme6/Theme6';
import SevenInfoCard from '../Common/theme7/SevenInfoCard';
import ThemeEightInfoProfile from '../Common/theme8/ThemeEightInfoProfile';
import ThemeNineTexOverly from '../Common/theme9/ThemeNineTexOverly';
import Cards from './Cards';
  
  
  
  export  function getCardContentFront(attributes) {
  
    return (
      <Cards
        attributes={attributes}
        clientId={attributes.clientId}
      />
    );
  
 
}

