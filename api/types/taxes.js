// const { gql } = require('apollo-server');

export const taxesTypeDef = `
    type Query {
        revenusAvecParts(revenus: Int, parts: Float, annee: Int): Int!
    }
`;
