import { createTestClient } from 'apollo-server-testing';
import { createServer } from '../../../api/server';

describe('Intégration impôts revenu GraphQL', () => {
    it("Requête montant d'impôt estimé", async () => {
        const server = createServer();
        const { query } = createTestClient(server);

        const GET_MONTANT_IMPOTS_QUERY = `
        {
            revenusAvecParts(revenus:28000, parts:2.5, annee:2018)
        }
        `;

        const response = await query({
            query: GET_MONTANT_IMPOTS_QUERY,
        });
        expect(response.data).toEqual({
            revenusAvecParts: 397,
        });
    });
    it("Requête montant d'impôt estimé dans le turfu retourne une erreur", async () => {
        const server = createServer();
        const { query } = createTestClient(server);

        const anneeErreur = new Date().getFullYear() + 1;

        const GET_MONTANT_IMPOTS_QUERY = `
        {
            revenusAvecParts(revenus:28000, parts:2.5, annee:${anneeErreur}})
        }
        `;

        const response = await query({
            query: GET_MONTANT_IMPOTS_QUERY,
        });
        expect(response.errors).not.toBeNull();
    });
});
