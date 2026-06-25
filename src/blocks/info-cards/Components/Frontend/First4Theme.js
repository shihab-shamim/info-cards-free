import escapeHTML from '../../escapeHTML';
import { sanitizeUrl } from '../../utils/sanitizeUrl';

const First4Theme = ({ attributes, card, index }) => {
    const { theme, isImg, imgPos, isTab } = attributes;
    const { img, title, desc, btnLabal, btnUrl, isBtn, cardUrl } = card;

    const imgEl = isImg && img && <img src={img} alt={title} />;

    return (
        <a {...(cardUrl ? { href: sanitizeUrl(cardUrl) } : {})}
            {...(isTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={`card card-${index} ${theme} first4Theme`}
            key={index} >
            {'first' === imgPos && imgEl}

            <div className="content">
                {title && <h2 dangerouslySetInnerHTML={{ __html: escapeHTML(title) }} />}
                {desc && <p dangerouslySetInnerHTML={{ __html: escapeHTML(desc) }} />}
                {(btnLabal && isBtn) && (
                    <div className="btnWrapper">
                        <a href={sanitizeUrl(btnUrl)} dangerouslySetInnerHTML={{ __html: escapeHTML(btnLabal) }} />
                    </div>)}
            </div>

            {'last' === imgPos && imgEl}
        </a>
    );
};

export default First4Theme;
