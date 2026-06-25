import { produce } from "immer";

export const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return produce(attr, draft => {
      draft[currentProp] = value;
    });
  }
  return produce(attr, draft => {
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(draft[currentProp], value, ...remainingProps);
  });
};

export const getSVGDataURL = (svg, color) => {
  if (!svg) return "none";
  let processedSvg = svg;
  if (color) {
    processedSvg = svg
      .replace(/fill=".*?"/g, `fill="${color}"`)
      .replace(/stroke=".*?"/g, `stroke="${color}"`);
  }
  const base64 = btoa(unescape(encodeURIComponent(processedSvg)));
  return `url("data:image/svg+xml;base64,${base64}")`;
};

export const strToIntArr = str => str?.trim().split(',').map(id => id ? parseInt(id) : id);

// eslint-disable-next-line no-unused-vars
export const omit = (obj, key) => { const { [key]: _, ...rest } = obj; return rest; };
