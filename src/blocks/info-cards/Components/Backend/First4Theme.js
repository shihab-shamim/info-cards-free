import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";

import { MediaPlaceholder } from '../../../../../../bpl-tools/Components/';
import { sanitizeUrl } from '../../utils/sanitizeUrl';

const First4Theme = ({ attributes, card, index, updateCard }) => {
    const { theme, isImg, imgPos } = attributes;

    const { img, title, desc, btnLabal, btnUrl, isBtn } = card;

    const imgEl = isImg && <>
        {img ? <img src={img} alt={title} /> : <MediaPlaceholder label={__(' Card Image:', 'info-cards')} value={{ url: img }} onChange={val => updateCard(index, 'img', val?.url)} />}
    </>

    return <div className={`card card-${index} ${theme} first4Theme`} key={index} >
        {'first' === imgPos && imgEl}

        <div className="content">
            <RichText
                tagName="h2"
                value={title}
                onChange={(content) => updateCard(index, "title", content)}
                placeholder={__("Enter Title", 'info-cards')}
                inlineToolbar
                allowedFormats={["core/bold", "core/italic"]}
            />

            <RichText
                tagName="p"
                value={desc}
                onChange={(content) => updateCard(index, "desc", content)}
                placeholder={__("Enter Description", 'info-cards')}
                inlineToolbar
                allowedFormats={["core/bold", "core/italic"]}
            />

            {isBtn && <div className="btnWrapper">
                <RichText
                    tagName="a"
                    href={sanitizeUrl(btnUrl)}
                    value={btnLabal}
                    onChange={(content) => updateCard(index, "btnLabal", content)}
                    placeholder={__("Button", 'info-cards')}
                    inlineToolbar
                    allowedFormats={["core/bold", "core/italic"]}
                />
            </div>}
        </div>
        {/* cardRadius */}
        {'last' === imgPos && imgEl}
    </div>
}
export default First4Theme;