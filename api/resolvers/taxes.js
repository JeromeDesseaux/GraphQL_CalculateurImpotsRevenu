import { impotsParts } from '../../modules/taxes/index';
import TAUX_2020 from '../../data/taux2020';
import TAUX_2019 from '../../data/taux2019';

export const impotsResolver = {
    Query: {
        revenusAvecParts: (_, { revenus, parts, annee }) => {
            if (annee > new Date().getFullYear())
                throw new Error(
                    "88 miles à l'heure, Marty! Fais gaffe à toi, tu pars dans le futur!",
                );
            let taux = annee >= 2020 ? TAUX_2020 : TAUX_2019;
            return impotsParts(revenus, parts, taux);
        },
    },
};
