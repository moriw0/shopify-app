import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@shopify/react-graphql";
import { Layout, Button, Banner, Toast, Stack, Frame } from '@shopify/polaris';

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

const ApplyRandomPrices = (props) => {
  const updatePrice = useMutation(UPDATE_PRICE);

  const [hasResults, setHasResults] = useState(false);
  const [error, setError] = useState();

  const showError = error && (
    <Banner status="critical">{error.message}</Banner>
  );

  const showToast = hasResults && (
    <Toast
      content="Successfully updated"
      onDismiss={() => setHasResults(false)}
    />
  );

  const handleClick = async () => {
    for (const variantId in props.selectedItems) {
      const price = Math.random().toPrecision(3) * 10;
      const productVariableInput = {
        id: props.selectedItems[variantId].variants.edges[0].node.id,
        price: price
      };

      try {
        await updatePrice({
          variables: {
            input: productVariableInput
          }
        });
      } catch (e) {
        setError(e)
      }
      
      try {
        props.onUpdate()
        setHasResults(true)
      } catch (e) {
        setError(e)
      }
    }
  };

  return (
    <Frame>
      {showToast}
      <Layout.Section>
        {showError}
      </Layout.Section>

      <Layout.Section>
        <Stack distribution={"center"}>
          <Button
            primary
            textAlign={"center"}
            onClick={() => handleClick()} >
            Randomize prices
          </Button>
        </Stack>
      </Layout.Section>
    </Frame>
  );
};

export default ApplyRandomPrices;
