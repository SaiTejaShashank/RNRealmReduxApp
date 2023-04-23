import React from "react";
import { useFormikContext } from "formik";

import AppInputText from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, width, ...otherProps }) {
  const { setFieldTouched,setFieldValue, errors, touched,values } = useFormikContext();

  return (
    <>
      <AppInputText
        onBlur={() => setFieldTouched(name)}
        onChangeText={text=>setFieldValue(name,text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
