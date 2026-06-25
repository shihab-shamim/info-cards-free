  
  
  import ThemeTenMouseMove from '../Common/theme10/ThemeTenMouseMove';
import ThemeElevenServiceInfo from '../Common/theme11/ThemeElevenServiceInfo';
import ThemeTwelveHoverService from '../Common/theme12/ThemeTwelveHoverService';
import Theme6 from '../Common/theme6/Theme6';
import SevenInfoCard from '../Common/theme7/SevenInfoCard';
import ThemeEightInfoProfile from '../Common/theme8/ThemeEightInfoProfile';
import ThemeNineTexOverly from '../Common/theme9/ThemeNineTexOverly';
import Cards from './Cards';
  
  
  
  export  function getCardContentFront(theme, attributes, isBacked) {
  if (["default", "theme1", "theme2", "theme3", "theme4", "theme5"].includes(theme)) {
    return (
      <Cards
        attributes={attributes}
        clientId={attributes.clientId}
      />
    );
  } if(theme=== "theme6"){
    return <Theme6 attributes={attributes}  isBacked={isBacked} />
  }
  if(theme=== "theme7"){
    return <SevenInfoCard
           isBackend={false}
          
          attributes={attributes}
         />

  }
  if(theme ==="theme8"){

    return(  <div className="infoProfileMain">
        
         {
          attributes?.productsInfo?.map((infoProfile,index)=> <ThemeEightInfoProfile  isBackend={false} infoProfile={infoProfile} index={index} key={index} attributes={attributes} />)
         }

        </div>)
  }
  if(theme==="theme9"){
     return <ThemeNineTexOverly attributes={attributes}  isBackend={false}/>
  }

   if(theme === "theme10"){
        return(<div className="themeTenProductInfoGrab">
          <ThemeTenMouseMove isEditor={false}  attributes={attributes} />
        </div>)
      }
        if(theme==="theme11"){
      return(<ThemeElevenServiceInfo  isEditor={false}  attributes={attributes} />)
    }
    if(theme === "theme12"){
      return (<ThemeTwelveHoverService isEditor={false}  attributes={attributes}/>)
    }
}

