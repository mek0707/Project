import {useState} from "react";

export const SelectBox = ({label = "", htmlLabel = "", value = "", onchange, boxClass, className, classLabel, options, keyId = null, keyName = null, optionText, allOption = true, disabled = false, multi = false, isLoading = false, placeholder, defaultValue = "", formatGroupLabel = ""}) => {
  const colourStyles = {
    control: (styles) => ({...styles, borderRadius: "0.5rem"}),
    singleValue: (styles) => ({...styles, color: "black"}),
    placeholder: (styles) => ({...styles, color: "black"}),
  };

  let ops = options?.length ? [...options] : [];
  if (keyId && keyName) {
    ops = [];
    for (const e of options) {
      ops.push({
        label: e?.[keyName] || "-",
        value: e?.[keyId],
        isDisabled: e?.isDisabled || false,
      });
    }
  }
  if (allOption)
    ops.unshift({
      label: optionText || T("please-select2"),
      value: "",
      isDisabled: false,
    });

  let _value = value || "";
  if (!(typeof value === "object" || typeof value === "function")) {
    _value = ops.find((e) => e.value == value) || "";
  } else if (Array.isArray(value)) {
    _value = [];
    for (const v of value) {
      _value.push(ops.find((e) => (keyId ? e?.value === v?.[keyId] || "" : e?.value === v?.value || "")));
    }
  }

  return (
    <div className={`flex flex-col ${boxClass}`}>
      {label ? <label className={`${ClassLabelDefault} ${classLabel ? classLabel : ""}`}>{label}</label> : ""}
      {htmlLabel ? <label className={`${ClassLabelDefault} ${classLabel ? classLabel : ""}`} dangerouslySetInnerHTML={{__html: htmlLabel}} /> : ""}
      <Select options={ops} value={_value} className={`${className}`} isDisabled={!!disabled} isMulti={!!multi} isLoading={isLoading} defaultValue={defaultValue ? defaultValue : ""} formatGroupLabel={formatGroupLabel || null} onChange={(val) => (onchange ? onchange(val, val?.value, val?.label) : {})} placeholder={placeholder} isClearable={!!value} styles={colourStyles} />
    </div>
  );
};
