export const sanitizeUrl = (url) => {
    if (!url) return url;
    url = String(url).trim();
    // WordPress typically allows http, https, ftp, mailto, etc.
    // We strictly deny javascript:, vbscript:, and data: (unless it's an image, but here it's an href)
    const invalidProtocolRegex = /^(?:j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t|v\s*b\s*s\s*c\s*r\s*i\s*p\s*t|d\s*a\s*t\s*a):/i;
    // Decode HTML entities to prevent bypasses
    const decodedUrl = url.replace(/&#0*58;/gi, ':').replace(/&#x0*3a;/gi, ':').replace(/%3A/gi, ':');
    return invalidProtocolRegex.test(decodedUrl.replace(/\s/g, '')) ? 'about:blank' : url;
};
