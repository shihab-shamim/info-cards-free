import {  RichText } from '@wordpress/block-editor';
import { updateData } from '../../../utils/function';
import { BControlPro } from '../../../../../../../bpl-tools/ProControls';


const ThemeElevenServiceInfo = ({ attributes, setAttributes, isEditor ,premiumProps}) => {
  const { productsInfo, options } = attributes;
  return  <section className="themeElevenServices-section">
      <div className="themeElevenServices-container">
        

        {productsInfo?.map((info, index) => (
          <div
            key={index}
            className={`themeElevenService-card-container themeElevenService-card-container-${
              index + 1
            } `}
          >
            <div
              // onClick={() => setThemeElevenActive(index)}
              className={`themeElevenService-card`}
            >
              {info?.highlight && (
                isEditor?<BControlPro  Component={RichText}
          {...premiumProps}
  value={info?.highlightLabel} tagName='div' className="themeElevenService-badge" onChange={(v)=>setAttributes({productsInfo:updateData(productsInfo,v,index,"highlightLabel")})} />: <RichText.Content className="themeElevenService-badge" value={info?.highlightLabel} tagName='div'></RichText.Content>
              )}
              <div className={`themeElevenService-icon themeElevenService-icon-${index + 1}`}>
                <span
                  className={`themeElevenIcon-${index + 1} themeElevenIcon`}
                  dangerouslySetInnerHTML={{ __html: info?.icon?.svgPath }}
                />
              </div>
              { isEditor?<BControlPro Component={RichText}
          {...premiumProps} placeholder='title...' className="themeElevenService-title" tagName='h2' value={info?.title} onChange={(v)=>setAttributes({productsInfo:updateData(productsInfo,v,index,"title")})} />: <RichText.Content className="themeElevenService-title" tagName='h2' value={info?.title}></RichText.Content>}

            {isEditor?<BControlPro Component={RichText}
          {...premiumProps} placeholder='description...' className="themeElevenService-description" tagName='p' value={info?.description} onChange={(v)=>setAttributes({productsInfo:updateData(productsInfo,v,index,"description")})} />:  <RichText.Content className="themeElevenService-description" tagName='p' value={info?.description} ></RichText.Content>}

              {options?.isButtonVisible && (
  isEditor ? (
    <div className="themeElevenService-link">
      <BControlPro
      Component={RichText}
          {...premiumProps}
        tagName="span"
        value={info?.button?.text}
        onChange={(v) =>
          setAttributes({
            productsInfo: updateData(productsInfo, v, index, "button", "text"),
          })
        }
      />
      <span className="themeElevenServiceArrow-icon">
        <span
          dangerouslySetInnerHTML={{ __html: options?.buttonIcon }}
        />
      </span>
    </div>
  ) : (
    <a
      className="themeElevenService-link"
      href={info?.button?.link}
      target={options?.isOpenNewTab ? "_blank" : "_self"}
      rel={options?.isOpenNewTab ? "noopener noreferrer" : undefined}
    >
      <RichText.Content
        tagName="span"
        value={info?.button?.text}
      />
      <span className="themeElevenServiceArrow-icon">
        <span
          dangerouslySetInnerHTML={{ __html: options?.buttonIcon }}
        />
      </span>
    </a>
  )
)}

            </div>
          </div>
        ))}

      </div>
    </section>;
};

export default ThemeElevenServiceInfo;
