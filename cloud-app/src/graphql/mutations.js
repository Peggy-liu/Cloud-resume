/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVisitorCount = /* GraphQL */ `
  mutation CreateVisitorCount(
    $input: CreateVisitorCountInput!
    $condition: ModelvisitorCountConditionInput
  ) {
    createVisitorCount(input: $input, condition: $condition) {
      id
      count
      createdAt
      updatedAt
    }
  }
`;
export const updateVisitorCount = /* GraphQL */ `
  mutation UpdateVisitorCount(
    $input: UpdateVisitorCountInput!
    $condition: ModelvisitorCountConditionInput
  ) {
    updateVisitorCount(input: $input, condition: $condition) {
      id
      count
    }
  }
`;
export const deleteVisitorCount = /* GraphQL */ `
  mutation DeleteVisitorCount(
    $input: DeleteVisitorCountInput!
    $condition: ModelvisitorCountConditionInput
  ) {
    deleteVisitorCount(input: $input, condition: $condition) {
      id
      count
      createdAt
      updatedAt
    }
  }
`;
