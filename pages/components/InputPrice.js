import React, { useState, useCallback } from "react";
import { TextField, Layout, EmptyState, Button, Banner, Toast, Stack, Frame } from "@shopify/polaris";

function InputPrice() {
  const [textFieldValue, setTextFieldValue] = useState('2.00');

  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    [],
  );

  return (
    <Frame>
      {/* {showToast} */}
      <Layout.Section>
        <TextField
          label="Price"
          type="number"
          value={textFieldValue}
          onChange={handleTextFieldChange}
          prefix="$"
          autoComplete="off"
        />
        {/* {showError} */}
      </Layout.Section>
      <Layout.Section>
        <Stack distribution={"center"}>
          <Button
            primary
            textAlign={"center"}>
            {/* onClick={() => handleClick()}  */}
            Change prices
          </Button>
        </Stack>
      </Layout.Section>
    </Frame>
  );
}

export default InputPrice;
