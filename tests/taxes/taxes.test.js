import { impots, impotsParts } from '../../modules/taxes';
import TAUX_2019 from '../../data/taux2019';
import TAUX_2020 from '../../data/taux2020';

describe('Impôts sur le revenu 2020 // Une seule part fiscale.', () => {
    it('Célibataire gagnant 32000€', () => {
        expect(impots(32000, TAUX_2020)).toEqual(3617.34);
    });
    it('Célibataire gagnant 18650€', () => {
        expect(impots(18650, TAUX_2020)).toEqual(944.35);
    });
});

describe('Impôts sur le revenu 2019 // Une seule part fiscale.', () => {
    it('Célibataire gagnant 32000€', () => {
        expect(impots(32000, TAUX_2019)).toEqual(3743.56);
    });
    it('Célibataire gagnant 18650€', () => {
        expect(impots(18650, TAUX_2019)).toEqual(1201.9);
    });
});

describe('Impôts sur le revenu 2020 // Avec parts fiscales.', () => {
    it('Couple avec deux enfants gagnant 55950€', () => {
        expect(impotsParts(55950, 3, TAUX_2020)).toEqual(2833);
    });
});

describe('Impôts sur le revenu 2019 // Avec parts fiscales.', () => {
    it('Couple avec deux enfants gagnant 55950€', () => {
        expect(impotsParts(55950, 3, TAUX_2019)).toEqual(3606);
    });
});
