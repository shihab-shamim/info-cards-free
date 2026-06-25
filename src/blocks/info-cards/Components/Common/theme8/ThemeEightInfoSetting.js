import { TextareaControl, TextControl } from "@wordpress/components";
import { updateData } from "../../../../../../../bpl-tools/utils/functions";
import { ColorControl, InlineMediaUpload, Label } from "../../../../../../../bpl-tools/Components";
import { BControlPro } from "../../../../../../../bpl-tools/ProControls";
const ThemeEightInfoSetting = (props) => {
  const { attributes, setAttributes, index,premiumProps } = props;
  const { productsInfo } = attributes;
  const item = productsInfo[index];

  const handleDelete = (i) => {
    const updateState = item?.state.filter((st, value) => value !== i);
    setAttributes({
      infoProfileCards: updateData(productsInfo, updateState, index, "state"),
    });
  };

  const stateItem = {
    name: "demo",
    quantity: 0,
  };

  const handleAdd = () => {
    const newState = [...item?.state, stateItem];
    setAttributes({
      productsInfo: updateData(productsInfo, newState, index, "state"),
    });
  };
  const handleDeleteSocial = (show, i) => {
    setAttributes({
      productsInfo: updateData(productsInfo, !show, index, "social", i, "show"),
    });
  };

  return (
    <div>
      <BControlPro
        label="Image"
        value={item?.profileImg}
        onChange={(value) =>
          setAttributes({
            productsInfo: updateData(
              productsInfo,
              value,
              index,
              "profileImg"
            ),
          })
        }
        Component={InlineMediaUpload}
                               {...premiumProps}
      />

      <BControlPro
        label="Name"
        value={item?.name}
        onChange={(value) =>
          setAttributes({
            productsInfo: updateData(
              productsInfo,
              value,
              index,
              "name"
            ),
          })
        }
        Component={TextControl}
                               {...premiumProps}
      />
      <BControlPro
        label="Title"
        value={item?.title}
        onChange={(value) =>
          setAttributes({
            productsInfo: updateData(
              productsInfo,
              value,
              index,
              "title"
            ),
          })
        }
         Component={TextControl}
                               {...premiumProps}
      />
      <BControlPro
        label="Company Name"
        value={item?.company}
        onChange={(value) =>
          setAttributes({
            productsInfo: updateData(
              productsInfo,
              value,
              index,
              "company"
            ),
          })
        }
         Component={TextControl}
                               {...premiumProps}
      />
      <BControlPro
        label="Status"
        value={item?.status}
        onChange={(value) =>
          setAttributes({
            productsInfo: updateData(
              productsInfo,
              value,
              index,
              "status"
            ),
          })
        }
         Component={TextControl}
                               {...premiumProps}
      />
      <BControlPro
        label="Bio"
        rows={3}
        value={item?.bio}
        onChange={(value) =>
          setAttributes({
            productsInfo: updateData(productsInfo, value, index, "bio"),
          })
        }
         Component={TextareaControl}
                               {...premiumProps}
      />

      <Label>States</Label>
      {item?.state?.map((state, i) => (
        <label
          key={i}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <BControlPro
            value={state?.name}
            onChange={(value) =>
              setAttributes({
                productsInfo: updateData(
                  productsInfo,
                  value,
                  index,
                  "state",
                  i,
                  "name"
                ),
              })
            }
             Component={TextControl}
                               {...premiumProps}
          />
          <BControlPro
            value={state?.quantity}
            onChange={(value) =>
              setAttributes({
                productsInfo: updateData(
                  productsInfo,
                  value,
                  index,
                  "state",
                  i,
                  "quantity"
                ),
              })
            }
             Component={TextControl}
                               {...premiumProps}
          />
          <button
            onClick={() => handleDelete(i)}
            className="infoCardDeleteButton"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
            </svg>
          </button>
        </label>
      ))}
      <button onClick={() => handleAdd()} className="infoCardAddButton">
        State Add
      </button>

      <Label>Social Media</Label>
      {item?.social?.map((so, i) => (
        <span key={i}>
          <Label
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BControlPro
              placeholder="link.."
              value={so?.link}
              onChange={(value) =>
                setAttributes({
                  productsInfo: updateData(
                    productsInfo,
                    value,
                    index,
                    "social",
                    i,
                    "link"
                  ),
                })
              }
               Component={TextControl}
                               {...premiumProps}
            />

            <span style={{ marginTop: "-7px" }}>
              {" "}
              <BControlPro
                style={{ marginBottom: "30px" }}
                label="   "
                value={so?.color}
                onChange={(value) =>
                  setAttributes({
                    productsInfo: updateData(
                      productsInfo,
                      value,
                      index,
                      "social",
                      i,
                      "color"
                    ),
                  })
                }
                 Component={ColorControl}
                               {...premiumProps}
              />
            </span>

            <button
              onClick={() => handleDeleteSocial(so.show, i)}
              className="infoCardDeleteButtonIcon"
            >
              {so?.show ? (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12,9c-1.642,0-3,1.359-3,3c0,1.642,1.358,3,3,3c1.641,0,3-1.358,3-3C15,10.359,13.641,9,12,9z"></path>
                  <path d="M12,5c-7.633,0-9.927,6.617-9.948,6.684L1.946,12l0.105,0.316C2.073,12.383,4.367,19,12,19s9.927-6.617,9.948-6.684 L22.054,12l-0.105-0.316C21.927,11.617,19.633,5,12,5z M12,17c-5.351,0-7.424-3.846-7.926-5C4.578,10.842,6.652,7,12,7 c5.351,0,7.424,3.846,7.926,5C19.422,13.158,17.348,17,12,17z"></path>
                </svg>
              ) : (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757C12.568 16.983 12.291 17 12 17c-5.351 0-7.424-3.846-7.926-5 .204-.47.674-1.381 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379-.069.205-.069.428 0 .633C2.073 12.383 4.367 19 12 19zM12 5c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657.069-.205.069-.428 0-.633C21.927 11.617 19.633 5 12 5zM16.972 15.558l-2.28-2.28C14.882 12.888 15 12.459 15 12c0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501C9.796 7.193 10.814 7 12 7c5.351 0 7.424 3.846 7.926 5C19.624 12.692 18.76 14.342 16.972 15.558z"></path>
                </svg>
              )}
            </button>
          </Label>

          <hr
            style={{
              border: "none",
              borderBottom: "1px solid gray",
              margin: "20px 0",
            }}
          />
        </span>
      ))}

      <div style={{ marginTop: "10px" }}>
        <BControlPro
          label="Button Text"
          value={item?.button?.text}
          onChange={(value) =>
            setAttributes({
              productsInfo: updateData(
                productsInfo,
                value,
                index,
                "button",
                "text"
              ),
            })
          }
           Component={TextControl}
                               {...premiumProps}
        />
        <BControlPro
          label="Button url"
          value={item?.button?.link}
          onChange={(value) =>
            setAttributes({
              productsInfo: updateData(
                productsInfo,
                value,
                index,
                "button",
                "link"
              ),
            })
          }
           Component={TextControl}
                               {...premiumProps}
        />
      </div>
    </div>
  );
};

export default ThemeEightInfoSetting;
