/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVisitorCount = /* GraphQL */ `
  query GetVisitorCount($id: ID!) {
    getVisitorCount(id: $id) {
      id
      count
     
    }
  }
`;
export const listVisitorCounts = /* GraphQL */ `
  query ListVisitorCounts(
    $filter: ModelvisitorCountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVisitorCounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        count
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
