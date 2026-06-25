import {  TextareaControl, TextControl } from "@wordpress/components";
import { __ } from '@wordpress/i18n';
import { InlineDetailMediaUpload, Label } from "../../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../../bpl-tools/utils/functions";

const OneSetting = (props) => {
  const { attributes, setAttributes, index} = props;
  const { cardsData } = attributes;
  const item = cardsData[index];



  return (
 <div>
     <Label>{__("Image","")}</Label>
<InlineDetailMediaUpload value={item?.image} onChange={(value) => setAttributes({ cardsData: updateData(cardsData,value,index,"image") })} />
    <Label>{__("Title","")}</Label>
    <TextControl  value={item.title} onChange={(value) => setAttributes({ cardsData: cardsData.map((card, i) => i === index ? { ...card, title: value } : card) })} />
    <Label>{__("Description","")}</Label>

    <TextareaControl  value={item.description} onChange={(value) => setAttributes({ cardsData: cardsData.map((card, i) => i === index ? { ...card, description: value } : card) })} />
    <Label>{__("Link URL","")}</Label>

    <TextControl  value={item.linkUrl} onChange={(value) => setAttributes({ cardsData: cardsData.map((card, i) => i === index ? { ...card, linkUrl: value } : card) })} />
    <Label>{__("Link Text","")}</Label>
    <TextControl  value={item.linkText} onChange={(value) => setAttributes({ cardsData: cardsData.map((card, i) => i === index ? { ...card, linkText: value } : card) })} />


 </div>
  );
};

export default OneSetting;
