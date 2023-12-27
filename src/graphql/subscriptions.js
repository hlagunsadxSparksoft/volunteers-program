/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
      id
      title
      description
      createdAt
      updatedAt
      __typename
    }
  }
`
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
      id
      title
      description
      createdAt
      updatedAt
      __typename
    }
  }
`
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
      id
      title
      description
      createdAt
      updatedAt
      __typename
    }
  }
`
