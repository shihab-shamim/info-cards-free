import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";

export const generalStyleTabs = [
  { name: "general", title: __("General", "textdomain") },
  { name: "style", title: __("Style", "textdomain") },
];

export const purposeTypeOptions = [
  { label: "Test", value: "test" },
  { label: "Final", value: "final" },
];

export const RichTextControl = ({ value, onChange, className, tagName }) => {
  return (
    <RichText
      value={value}
      onChange={onChange}
      className={className}
      tagName={tagName}
    />
  );
};
