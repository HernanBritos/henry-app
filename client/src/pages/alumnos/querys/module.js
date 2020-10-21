import { gql } from "@apollo/client";

export const MODULES = gql`
  query {
    modules {
      id
      name
      description
    }
  }
`;
