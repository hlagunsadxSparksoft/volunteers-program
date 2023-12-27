/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      title
      description
      createdAt
      updatedAt
      __typename
    }
  }
`
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      title
      description
      createdAt
      updatedAt
      __typename
    }
  }
`
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      title
      description
      createdAt
      updatedAt
      __typename
    }
  }
`
