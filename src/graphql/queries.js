/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      emailAddress
      contactNumber
      skillsAndInterests
      organizationalInvolvement
      certifications
      createdAt
      updatedAt
      __typename
    }
  }
`
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        emailAddress
        contactNumber
        skillsAndInterests
        organizationalInvolvement
        certifications
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      title
      description
      createdAt
      updatedAt
      __typename
    }
  }
`
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`
