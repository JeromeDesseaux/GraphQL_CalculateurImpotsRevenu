import TAUX_2020 from "../../data/taux2020";


const round = (num, decimal) => {
    return Math.round(num * (10 ** decimal)) / (10 ** decimal); 
}

const impots = (revenu, taux = TAUX_2020) => {
    let totalImpot = 0;
    for(const index in taux){
        const rate = taux[index];
        const min = taux[index - 1] ? taux[index-1].trancheMax + 1 : 0;
        if(revenu >= rate.trancheMax){
            totalImpot += (rate.trancheMax - min) * (rate.taux/100);
        }else{
            totalImpot += (revenu - min) * (rate.taux/100);
            break;
        }
    }
    return round(totalImpot, 2);
};

const impotsParts = (revenus, parts, taux = TAUX_2020) => {
    return Math.round(parts * impots(revenus / parts, taux));
}



export { round, impots, impotsParts };
