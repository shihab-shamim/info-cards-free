import escapeHTML from '../../escapeHTML';
import { sanitizeUrl } from '../../utils/sanitizeUrl';

const Theme5 = ({ attributes, card, index }) => {
    const { theme, isImg, imgPos, isTab } = attributes;

    const { img, title, desc, btnLabal, btnUrl, isBtn, cardUrl } = card;
    const imgEl = isImg && img && <img src={img} alt={title} />

    return <a {...(cardUrl ? { href: sanitizeUrl(cardUrl) } : {})} {...(isTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="theme5-cards">
        <div className={`theme5 card-${index} ${theme}`} key={index} >
            <div className="imgBox">
                {'first' === imgPos && imgEl}
            </div>
            <div className="content">
                <div className="details">
                    {title && <h2 dangerouslySetInnerHTML={{ __html: escapeHTML(title) }} />}
                    {desc && <p dangerouslySetInnerHTML={{ __html: escapeHTML(desc) }} />}
                    {(btnLabal && isBtn) && <div className="actionBtn">


                        <button href={sanitizeUrl(btnUrl)} dangerouslySetInnerHTML={{ __html: escapeHTML(btnLabal) }} />
                    </div>
                    }
                </div>
            </div>

        </div>
        {'last' === imgPos && imgEl}
    </a>
}
export default Theme5;