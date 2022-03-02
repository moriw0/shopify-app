import React, { useState, useCallback } from "react";
import gql from "graphql-tag";
import { useMutation } from "@shopify/react-graphql";
import { TextField, Layout, Button, Banner, Toast, Stack, Frame } from "@shopify/polaris";

const UPDATE_PRICE = gql`
  mutation productVariantUpdate($input: ProductVariantInput!) {
    productVariantUpdate(input: $input) {
      product {
        title
      }
      productVariant {
        id
        price
      }
    }
  }
`;

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
