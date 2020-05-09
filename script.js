let pronoun = ['el','la','mi','tu' ];
let adj = ['mejor', 'gran', 'magnifico', 'desconocido' ];
let noun = ['teatro','mar', 'rostro', 'exito'];

let i = 0; let j=0; let k =0;

function dominio() { 
    for (i = 0; i < pronoun.length; i++) {
        for (j = 0; j < adj.length; j++) {
            for (k = 0; k < noun.length; k++) {
                const element = pronoun[i] + adj[j] + noun[k];
                alert('www.' + element + '.com') ;
            } 
        }
    }
}
dominio()