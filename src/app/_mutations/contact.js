import { gql } from '@apollo/client';

export default gql`
mutation contact(
  $name: String!,
  $email: String!,
  $phone: String!,
  $address: String!,
  $adu: Boolean!,
  $addition: Boolean!,
  $custom: Boolean!,
  $remodel: Boolean!,
  $notSure: Boolean!,
  $instructions: String!
) {
  contact(
    name: $name,
    email: $email,
    phone: $phone,
    address: $address,
    adu: $adu,
    addition: $addition,
    custom: $custom,
    remodel: $remodel,
    notSure: $notSure,
    instructions: $instructions
  ) {
    message
  }
}
`;