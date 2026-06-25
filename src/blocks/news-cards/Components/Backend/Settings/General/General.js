import { __ } from "@wordpress/i18n";
import { Fragment } from "react";
import { withSelect } from "@wordpress/data";

import {
  PanelBody,
  PanelRow,
  RangeControl,
  SelectControl,
  ToggleControl,
  TextControl,
  CheckboxControl,
  FormTokenField,
  Tooltip,
  __experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import { updateData, strToIntArr, omit } from "../../../../utils/functions";
import { postsOrdersBy, postsOrders } from "../../../../utils/options";
import {
  Device,
  ItemsPanel,
  Label,
} from "../../../../../../../../bpl-tools/Components";
import OneSetting from "../../../Common/news-cards/OneSetting";

const General = ({
  attributes,
  setAttributes,
  device,
  postTypes,
  allTaxonomies,
  getTaxonomy,
  allAuthors,
}) => {
  const { options = {}, styles = {} } = attributes || {};
  const {
    postType,
    taxonomyRelation = "AND",
    selectedTaxonomies = {},
    selectedCategories = [],
    selectedTags = [],
    postsAuthors = [],
    isPostsPerPageAll,
    postsPerPage,
    postsOrderBy,
    postsOrder,
    postsSearch,
    postsOffset,
    postsInclude = [],
    postsExclude = [],
    isExcludeCurrent,
    isExcludeSticky,
  } = attributes;

  const newOneCard = {
    day: "Day",
    month: "Month",
    year: "Year",
    author: "Author",
    title: "Title",
    excerpt: "Description",
    additionalInfo: [
      {
        icon: '<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>',
        value: "0",
        link: "#",
      },
      {
        icon: '<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
        value: "0",
        link: "#",
      },
      {
        icon: '<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>',
        value: "0",
        link: "#",
      },
    ],
    image:
      "https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg",
    lightStyle: false,
    button: {
      text: "Read more",
      link: "#",
    },
  };

  return (
    <>
      <div
        style={{
          background: "#ffffff",
          padding: "20px",
          borderRadius: "12px",
          border: "1px solid #e2e8f0",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
          marginBottom: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span
              style={{
                fontSize: "15px",
                fontWeight: "700",
                color: "#1e293b",
                display: "block",
              }}
            >
              {__("Dynamic Post", "info-cards")}
            </span>
          </div>
          <Tooltip
            text={__(
              "Enable this to automatically fetch and display your latest WordPress posts.",
              "info-cards",
            )}
          >
            <div style={{ display: "inline-block" }}>
              <ToggleControl
                checked={options.isDynamicPost}
                onChange={(value) =>
                  setAttributes({ options: { ...options, isDynamicPost: value } })
                }
                __nextHasNoMarginBottom
              />
            </div>
          </Tooltip>
        </div>
      </div>


    { !options.isDynamicPost &&  <PanelBody
        className="bPlPanelBody"
        title={__("Add Or Remove Cards", "info-cards")}
        initialOpen={false}
      >
        <ItemsPanel
          newItem={newOneCard}
          design="sortable"
          attributes={attributes}
          setAttributes={setAttributes}
          arrKey="cards"
          itemLabel="Card"
          ItemSettings={OneSetting}
        />
      </PanelBody>}

      <PanelBody
        className="bPlPanelBody"
        title={__("Layouts", "info-cards")}
        initialOpen={false}
      >
        <PanelRow>
          <Label>{__("Columns", "info-cards")}</Label> <Device />
        </PanelRow>
        <RangeControl
          value={styles.columns[device]}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "columns", device),
            })
          }
          min={1}
          max={12}
          step={1}
        />
        <PanelRow>
          <Label>{__("Column Gap", "info-cards")}</Label> <Device />
        </PanelRow>
        <RangeControl
          value={styles.columnGap[device]}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "columnGap", device),
            })
          }
          min={1}
          max={100}
          step={1}
        />
        <PanelRow>
          <Label>{__("Row Gap", "info-cards")}</Label> <Device />
        </PanelRow>
        <RangeControl
          value={styles.rowGap[device]}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "rowGap", device),
            })
          }
          min={1}
          max={100}
          step={1}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Elements", "info-cards")}
        initialOpen={false}
      >
        <ToggleControl
          className="mt10"
          label={__("Show Date", "info-cards")}
          checked={options.isDateShow}
          onChange={(value) =>
            setAttributes({ options: { ...options, isDateShow: value } })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Author", "info-cards")}
          checked={options.isAuthorShow}
          onChange={(value) =>
            setAttributes({ options: { ...options, isAuthorShow: value } })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Title", "info-cards")}
          checked={options.isTitleShow}
          onChange={(value) =>
            setAttributes({ options: { ...options, isTitleShow: value } })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Description", "info-cards")}
          checked={options.isExcerptShow}
          onChange={(value) =>
            setAttributes({ options: { ...options, isExcerptShow: value } })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Button", "info-cards")}
          checked={options.isButtonShow}
          onChange={(value) =>
            setAttributes({ options: { ...options, isButtonShow: value } })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Stats Info", "info-cards")}
          checked={options.isAdditionalInfoShow}
          onChange={(value) =>
            setAttributes({
              options: { ...options, isAdditionalInfoShow: value },
            })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Open In New Tab", "info-cards")}
          checked={options.newTabOpen}
          onChange={(value) =>
            setAttributes({ options: { ...options, newTabOpen: value } })
          }
        />

        {options?.isDynamicPost && <ToggleControl
          className="mt10"
          label={__("Light Style", "info-cards")}
          checked={options.lighStyleOn}
          onChange={(value) =>
            setAttributes({ options: { ...options, lighStyleOn: value } })
          }
        />}
      </PanelBody>

     { options.isDynamicPost && <PanelBody
        className="bPlPanelBody"
        title={__("Posts Query", "info-cards")}
        initialOpen={false}
      >
        <PanelRow className="gap5 mt20">
          <Label>{__("Post Type:", "info-cards")}</Label>
          <SelectControl
            value={postType}
            onChange={(val) =>
              setAttributes({ postType: val, selectedTaxonomies: {} })
            }
            options={postTypes || []}
          />
        </PanelRow>

        <SelectControl
          className="mt20"
          label={__("Taxonomy Relation:", "info-cards")}
          labelPosition="left"
          value={taxonomyRelation}
          onChange={(val) => setAttributes({ taxonomyRelation: val })}
          options={[
            { label: __("AND", "info-cards"), value: "AND" },
            { label: __("OR", "info-cards"), value: "OR" },
          ]}
        />

        {"post" === postType && getTaxonomy("category")?.length ? (
          <FormTokenField
            label={__("Select Categories:", "info-cards")}
            value={selectedCategories
              .map((id) => {
                const cat = getTaxonomy("category")?.find((c) => c.id === id);
                return cat ? cat.name : "";
              })
              .filter(Boolean)}
            suggestions={getTaxonomy("category")?.map((c) => c.name) || []}
            onChange={(tokens) => {
              const ids = tokens
                .map((token) => {
                  const cat = getTaxonomy("category")?.find(
                    (c) => c.name === token,
                  );
                  return cat ? cat.id : null;
                })
                .filter(Boolean);
              setAttributes({ selectedCategories: ids });
            }}
            __experimentalExpandOnFocus={true}
          />
        ) : null}

        {"post" === postType && getTaxonomy("post_tag")?.length ? (
          <FormTokenField
            label={__("Select Tags:", "info-cards")}
            value={(selectedTags || [])
              .map((id) => {
                const tag = getTaxonomy("post_tag")?.find((t) => t.id === id);
                return tag ? tag.name : "";
              })
              .filter(Boolean)}
            suggestions={getTaxonomy("post_tag")?.map((t) => t.name) || []}
            onChange={(tokens) => {
              const ids = tokens
                .map((token) => {
                  const tag = getTaxonomy("post_tag")?.find(
                    (t) => t.name === token,
                  );
                  return tag ? tag.id : null;
                })
                .filter(Boolean);
              setAttributes({ selectedTags: ids });
            }}
            __experimentalExpandOnFocus={true}
          />
        ) : null}

        {allTaxonomies?.length ? (
          <>
            <Label>{__("Select Taxonomies for filter:", "info-cards")}</Label>
            {allTaxonomies.map((tax) => {
              const isInc = Object.keys(selectedTaxonomies).includes(tax.slug);

              return (
                <CheckboxControl
                  label={tax.name}
                  key={tax.slug}
                  checked={isInc}
                  onChange={(val) =>
                    setAttributes({
                      selectedTaxonomies: val
                        ? { ...selectedTaxonomies, [tax.slug]: [] }
                        : omit(selectedTaxonomies, tax.slug),
                    })
                  }
                />
              );
            })}
          </>
        ) : null}

        {allTaxonomies?.length && Object.keys(selectedTaxonomies)?.length
          ? Object.keys(selectedTaxonomies).map((tax) =>
              getTaxonomy(tax)?.length ? (
                <Fragment key={tax}>
                  <FormTokenField
                    label={__(
                      `Select ${
                        allTaxonomies?.find((t) => t.slug === tax)?.name
                      }:`,
                      "info-cards",
                    )}
                    value={(selectedTaxonomies[tax] || [])
                      .map((id) => {
                        const term = getTaxonomy(tax)?.find((t) => t.id === id);
                        return term ? term.name : "";
                      })
                      .filter(Boolean)}
                    suggestions={getTaxonomy(tax)?.map((t) => t.name) || []}
                    onChange={(tokens) => {
                      const ids = tokens
                        .map((token) => {
                          const term = getTaxonomy(tax)?.find(
                            (t) => t.name === token,
                          );
                          return term ? term.id : null;
                        })
                        .filter(Boolean);
                      setAttributes({
                        selectedTaxonomies: {
                          ...selectedTaxonomies,
                          [tax]: ids,
                        },
                      });
                    }}
                    __experimentalExpandOnFocus={true}
                  />
                </Fragment>
              ) : null,
            )
          : null}

        {allAuthors?.length ? (
          <FormTokenField
            label={__("Select Authors:", "info-cards")}
            value={postsAuthors
              .map((id) => {
                const author = allAuthors.find(
                  (a) => a.value === id.toString(),
                );
                return author ? author.label : "";
              })
              .filter(Boolean)}
            suggestions={allAuthors.map((a) => a.label)}
            onChange={(tokens) => {
              const ids = tokens
                .map((token) => {
                  const author = allAuthors.find((a) => a.label === token);
                  return author ? parseInt(author.value) : null;
                })
                .filter(Boolean);
              setAttributes({ postsAuthors: ids });
            }}
            __experimentalExpandOnFocus={true}
          />
        ) : null}

        <Label>{__("Post Per Page:", "info-cards")}</Label>
        <RangeControl
          value={postsPerPage}
          onChange={(val) =>
            setAttributes({
              postsPerPage: val,
              isPostsPerPageAll: -1 === val,
            })
          }
          min={-1}
          max={36}
          step={1}
        />
        <small>
          {__("To show all posts set -1, and do not set 0", "info-cards")}
        </small>

        <PanelRow className="gap5 mt20">
          <Label>{__("Post Order By:", "info-cards")}</Label>
          <SelectControl
            value={postsOrderBy}
            onChange={(val) => setAttributes({ postsOrderBy: val })}
            options={postsOrdersBy}
          />
        </PanelRow>

        <PanelRow className="gap5 mt20">
          <Label>{__("Post Order:", "info-cards")}</Label>
          <SelectControl
            value={postsOrder}
            onChange={(val) => setAttributes({ postsOrder: val })}
            options={postsOrders}
          />
        </PanelRow>

        <TextControl
          className="mt20"
          label={__("Search Query:", "info-cards")}
          value={postsSearch}
          onChange={(val) => setAttributes({ postsSearch: val })}
        />

        {!isPostsPerPageAll && (
          <>
            <NumberControl
              className="mt20"
              label={__("Post Offset:", "info-cards")}
              value={postsOffset}
              onChange={(val) => setAttributes({ postsOffset: parseInt(val) })}
              min={0}
            />
            <small>
              {__(
                "`Post Offset` will not work if `Post Per Page` is -1",
                "info-cards",
              )}
            </small>
          </>
        )}

        <TextControl
          className="mt20"
          label={__("Include Posts:", "info-cards")}
          value={postsInclude?.join(",")}
          onChange={(val) => setAttributes({ postsInclude: strToIntArr(val) })}
        />
        <small>
          {__(
            "Enter the posts id by coma separated Ex: `23,45,16`",
            "info-cards",
          )}
        </small>

        <TextControl
          className="mt20"
          label={__("Exclude Posts:", "info-cards")}
          value={postsExclude?.join(",")}
          onChange={(val) => setAttributes({ postsExclude: strToIntArr(val) })}
        />
        <small>
          {__(
            "Enter the posts id by coma separated Ex: `23,45,16`",
            "info-cards",
          )}
        </small>

        <ToggleControl
          className="mt20"
          label={__("Exclude Current Post", "info-cards")}
          checked={isExcludeCurrent}
          onChange={(val) => setAttributes({ isExcludeCurrent: val })}
        />

        <ToggleControl
          className="mt20"
          label={__("Exclude Sticky Posts", "info-cards")}
          checked={isExcludeSticky}
          onChange={(val) => setAttributes({ isExcludeSticky: val })}
        />
      </PanelBody>}
    </>
  );
};

export default withSelect((select, { attributes }) => {
  const { getPostTypes, getTaxonomies, getEntityRecords, getUsers } =
    select("core");

  const { postType } = attributes;
  const taxonomies = getTaxonomies({ per_page: -1 });

  return {
    postTypes: getPostTypes({ per_page: -1 })
      ?.filter(
        (p) =>
          !["attachment", "nav_menu_item", "apb"].includes(p.slug) &&
          !p.slug.startsWith("wp_"),
      )
      ?.map(({ name, slug }) => ({ label: name, value: slug })),

    allTaxonomies:
      "post" === postType
        ? taxonomies
            ?.filter((tax) => tax.types.includes("post"))
            .filter((tax) => tax.slug !== "category" && tax.slug !== "post_tag")
        : taxonomies?.filter((tax) => tax.types.includes(postType)),

    getTaxonomy: (slug) => getEntityRecords("taxonomy", slug, { per_page: -1 }),

    allAuthors: getUsers({ who: "authors", per_page: -1 })?.map(
      ({ id, name }) => ({ label: name, value: id.toString() }),
    ),
  };
})(General);
