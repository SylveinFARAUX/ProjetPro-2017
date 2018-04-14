import Application from "./Application";

let vanilla =
    {
        "characters": [
            {
                "img":"./assets/charimg/simon.png",
                "nom":"Simon",
                "attributs":[
                    {
                        "key":"Couleur Cheveux",
                        "value":"Brun"
                    },
                    {
                        "key":"Coupe de Cheveux",
                        "value":"Court"
                    },
                    {
                        "key":"Attache de Cheveux",
                        "value":"Détaché"
                    },
                    {
                        "key":"Barbes",
                        "value":"Imberbe"
                    },
                    {
                        "key":"Couleurs Yeux",
                        "value":"Marron"
                    },
                    {
                        "key":"Couvre-Chef",
                        "value":"Fez"
                    },
                    {
                        "key":"Couleur Couvre-Chef",
                        "value":"Rouge"
                    },
                    {
                        "key":"Lunettes",
                        "value":"Non"
                    },
                    {
                        "key":"Genre",
                        "value":"Homme"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Moyenne-Orientale"
                    }
                ]
            },
            {
                "img":"./assets/charimg/andre.png",
                "nom":"Andre",
                "attributs":[
                    {
                        "key":"Couleur Cheveux",
                        "value":"Blanc"
                    },
                    {
                        "key":"Coupe de Cheveux",
                        "value":"Dégarni"
                    },
                    {
                        "key":"Barbes",
                        "value":"Imberbe"
                    },
                    {
                        "key":"Couleurs Yeux",
                        "value":"Marron"
                    },
                    {
                        "key":"Couvre-Chef",
                        "value":"Aucun"
                    },
                    {
                        "key":"Lunettes",
                        "value":"Rondes"
                    },
                    {
                        "key":"Genre",
                        "value":"Homme"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Caucasienne"
                    }
                ]
            },
            {
                "img":"./assets/charimg/baptiste.png",
                "nom":"Baptiste",
                "attributs":[
                    {
                        "key":"Coupe de Cheveux",
                        "value":"Chauve"
                    },
                    {
                        "key":"Barbes",
                        "value":"Barbe-longue"
                    },
                    {
                        "key":"Couleurs Yeux",
                        "value":"Marron"
                    },
                    {
                        "key":"Genre",
                        "value":"Homme"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Caucasienne"
                    }
                ]
            },
            {
                "img":"./assets/charimg/agathe.png",
                "nom":"Agathe",
                "attributs":[
                    {
                        "key":"Couleur Cheveux",
                        "value":"Brun"
                    },
                    {
                        "key":"Coupe de Cheveux",
                        "value":"Mi-Long"
                    },
                    {
                        "key":"Attache de Cheveux",
                        "value":"Détaché"
                    },
                    {
                        "key":"Barbes",
                        "value":"Imberbe"
                    },
                    {
                        "key":"Couvre-Chef",
                        "value":"Bonnet"
                    },
                    {
                        "key":"Couleur Couvre-Chef",
                        "value":"Vert"
                    },
                    {
                        "key":"Motif Maillot",
                        "value":"Uni"
                    },
                    {
                        "key":"Couleur Maillot",
                        "value":"Rose"
                    },
                    {
                        "key":"Genre",
                        "value":"Femme"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Caucasienne"
                    }
                ]
            },
            {
                "img":"./assets/charimg/arthur.png",
                "nom":"Arthur",
                "attributs":[
                    {
                        "key":"Couleur Cheveux",
                        "value":"Brun"
                    },
                    {
                        "key":"Coupe de Cheveux",
                        "value":"Frisé"
                    },
                    {
                        "key":"Attache de Cheveux",
                        "value":"Détaché"
                    },
                    {
                        "key":"Barbes",
                        "value":"Imberbe"
                    },
                    {
                        "key":"Couleurs Yeux",
                        "value":"Noir"
                    },
                    {
                        "key":"Couvre-Chef",
                        "value":"Aucun"
                    },
                    {
                        "key":"Lunettes",
                        "value":"Non"
                    },
                    {
                        "key":"Motif Maillot",
                        "value":"Uni"
                    },
                    {
                        "key":"Couleur Maillot",
                        "value":"Orange"
                    },
                    {
                        "key":"Genre",
                        "value":"Homme"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Caucasienne"
                    }
                ]
            },
            {
                "img":"./assets/charimg/carole.png",
                "nom":"Carole",
                "attributs":[
                    {
                        "key":"Couleur Cheveux",
                        "value":"Roux"
                    },
                    {
                        "key":"Barbes",
                        "value":"Imberbe"
                    },
                    {
                        "key":"Couleurs Yeux",
                        "value":"Marron"
                    },
                    {
                        "key":"Couleur Couvre-Chef",
                        "value":"Jaune"
                    },
                    {
                        "key":"Couvre-Chef",
                        "value":"Chapeau"
                    },
                    {
                        "key":"Lunettes",
                        "value":"Carrées"
                    },
                    {
                        "key":"Genre",
                        "value":"Femme"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Caucasienne"
                    }
                ]
            },
            {
                "img":"./assets/charimg/francois.png",
                "nom":"François",
                "attributs":[
                    {
                        "key":"Couleur Cheveux",
                        "value":"Blanc"
                    },
                    {
                        "key":"Coupe de Cheveux",
                        "value":"Court"
                    },
                    {
                        "key":"Attache de Cheveux",
                        "value":"Détaché"
                    },
                    {
                        "key":"Barbes",
                        "value":"Imberbe"
                    },
                    {
                        "key":"Couleurs Yeux",
                        "value":"Marron"
                    },
                    {
                        "key":"Couvre-Chef",
                        "value":"Chapeau"
                    },
                    {
                        "key":"Couleur Couvre-Chef",
                        "value":"Vert"
                    },
                    {
                        "key":"Lunettes",
                        "value":"Non"
                    },
                    {
                        "key":"Genre",
                        "value":"Homme"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Caucasienne"
                    }
                ]
            },
            {
                "img":"./assets/charimg/gaspard.png",
                "nom":"Gaspard",
                "attributs":[
                    {
                        "key":"Couleur Cheveux",
                        "value":"Blond"
                    },
                    {
                        "key":"Coupe de Cheveux",
                        "value":"Court"
                    },
                    {
                        "key":"Attache de Cheveux",
                        "value":"Détaché"
                    },
                    {
                        "key":"Barbes",
                        "value":"Imberbe"
                    },
                    {
                        "key":"Couvre-Chef",
                        "value":"Chapeau"
                    },
                    {
                        "key":"Couleur Couvre-Chef",
                        "value":"Vert"
                    },
                    {
                        "key":"Lunettes",
                        "value":"Non"
                    },
                    {
                        "key":"Motif Maillot",
                        "value":"Rayures"
                    },
                    {
                        "key":"Couleur Maillot",
                        "value":"Vert-Bleu"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Caucasienne"
                    },
                    {
                        "key":"Genre",
                        "value":"Homme"
                    }
                ]
            },
            {
                "img":"./assets/charimg/georges.png",
                "nom":"Georges",
                "attributs":[
                    {
                        "key":"Couleur Cheveux",
                        "value":"Blond"
                    },
                    {
                        "key":"Coupe de Cheveux",
                        "value":"Court"
                    },
                    {
                        "key":"Attache de Cheveux",
                        "value":"Détaché"
                    },
                    {
                        "key":"Barbes",
                        "value":"Imberbe"
                    },
                    {
                        "key":"Couleurs Yeux",
                        "value":"Marron"
                    },
                    {
                        "key":"Couvre-Chef",
                        "value":"Kepis"
                    },
                    {
                        "key":"Couleur Couvre-Chef",
                        "value":"Bleu"
                    },
                    {
                        "key":"Lunettes",
                        "value":"Non"
                    },
                    {
                        "key":"Genre",
                        "value":"Homme"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Caucasienne"
                    }
                ]
            },
            {
                "img":"./assets/charimg/melanie.png",
                "nom":"Melanie",
                "attributs":[
                    {
                        "key":"Couleur Cheveux",
                        "value":"Blond"
                    },
                    {
                        "key":"Coupe de Cheveux",
                        "value":"Long"
                    },
                    {
                        "key":"Attache de Cheveux",
                        "value":"Couettes-basses"
                    },
                    {
                        "key":"Barbes",
                        "value":"Imberbe"
                    },
                    {
                        "key":"Couleurs Yeux",
                        "value":"Bleu"
                    },
                    {
                        "key":"Couvre-Chef",
                        "value":"Aucun"
                    },
                    {
                        "key":"Lunettes",
                        "value":"Non"
                    },
                    {
                        "key":"Genre",
                        "value":"Femme"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Caucasienne"
                    }
                ]
            },
            {
                "img":"./assets/charimg/luc.png",
                "nom":"Luc",
                "attributs":[
                    {
                        "key":"Couleur Cheveux",
                        "value":"Blond"
                    },
                    {
                        "key":"Coupe de Cheveux",
                        "value":"Court"
                    },
                    {
                        "key":"Attache de Cheveux",
                        "value":"Détaché"
                    },
                    {
                        "key":"Barbes",
                        "value":"Barbe-courte"
                    },
                    {
                        "key":"Couleurs Yeux",
                        "value":"Marron"
                    },
                    {
                        "key":"Couvre-Chef",
                        "value":"Aucun"
                    },
                    {
                        "key":"Lunettes",
                        "value":"Non"
                    },
                    {
                        "key":"Genre",
                        "value":"Homme"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Caucasienne"
                    }
                ]
            },
            {
                "img":"./assets/charimg/paul.png",
                "nom":"Paul",
                "attributs":[
                    {
                        "key":"Couleur Cheveux",
                        "value":"Roux"
                    },
                    {
                        "key":"Coupe de Cheveux",
                        "value":"Court"
                    },
                    {
                        "key":"Attache de Cheveux",
                        "value":"Détaché"
                    },
                    {
                        "key":"Couleurs Yeux",
                        "value":"Noir"
                    },
                    {
                        "key":"Couvre-Chef",
                        "value":"Aucun"
                    },
                    {
                        "key":"Lunettes",
                        "value":"Non"
                    },
                    {
                        "key":"Motif Maillot",
                        "value":"Uni"
                    },
                    {
                        "key":"Couleur Maillot",
                        "value":"Bleu"
                    },
                    {
                        "key":"Genre",
                        "value":"Non-Genré"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Caucasienne"
                    }
                ]
            },
            {
                "img":"./assets/charimg/lou.png",
                "nom":"Lou",
                "attributs":[
                    {
                        "key":"Couleur Cheveux",
                        "value":"Noir"
                    },
                    {
                        "key":"Coupe de Cheveux",
                        "value":"Court"
                    },
                    {
                        "key":"Attache de Cheveux",
                        "value":"Couettes-hautes"
                    },
                    {
                        "key":"Couleurs Yeux",
                        "value":"Noir"
                    },
                    {
                        "key":"Couvre-Chef",
                        "value":"Aucun"
                    },
                    {
                        "key":"Lunettes",
                        "value":"Non"
                    },
                    {
                        "key":"Motif Maillot",
                        "value":"Uni"
                    },
                    {
                        "key":"Couleur Maillot",
                        "value":"Rouge"
                    },
                    {
                        "key":"Genre",
                        "value":"Femme"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Asiatique"
                    }
                ]
            },
            {
                "img":"./assets/charimg/ines.png",
                "nom":"Ines",
                "attributs":[
                    {
                        "key":"Couleur Cheveux",
                        "value":"Brun"
                    },
                    {
                        "key":"Coupe de Cheveux",
                        "value":"Frisé"
                    },
                    {
                        "key":"Attache de Cheveux",
                        "value":"Couettes-basses"
                    },
                    {
                        "key":"Couleurs Yeux",
                        "value":"Noir"
                    },
                    {
                        "key":"Couvre-Chef",
                        "value":"Bonnet"
                    },
                    {
                        "key":"Couleur Couvre-Chef",
                        "value":"Rose"
                    },
                    {
                        "key":"Lunettes",
                        "value":"Non"
                    },
                    {
                        "key":"Motif Maillot",
                        "value":"Uni"
                    },
                    {
                        "key":"Couleur Maillot",
                        "value":"Jaune"
                    },
                    {
                        "key":"Genre",
                        "value":"Femme"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Caucasienne"
                    }
                ]
            },
            {
                "img":"./assets/charimg/madi.png",
                "nom":"Madi",
                "attributs":[
                    {
                        "key":"Couleur Cheveux",
                        "value":"Noir"
                    },
                    {
                        "key":"Coupe de Cheveux",
                        "value":"Frisé"
                    },
                    {
                        "key":"Attache de Cheveux",
                        "value":"Détaché"
                    },
                    {
                        "key":"Couleurs Yeux",
                        "value":"Noir"
                    },
                    {
                        "key":"Couvre-Chef",
                        "value":"Aucun"
                    },
                    {
                        "key":"Lunettes",
                        "value":"Non"
                    },
                    {
                        "key":"Motif Maillot",
                        "value":"Rayures"
                    },
                    {
                        "key":"Couleur Maillot",
                        "value":"Vert-Bleu"
                    },
                    {
                        "key":"Genre",
                        "value":"Homme"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Afro"
                    }
                ]
            },
            {
                "img":"./assets/charimg/lucile.png",
                "nom":"Lucile",
                "attributs":[
                    {
                        "key":"Couleur Cheveux",
                        "value":"Roux"
                    },
                    {
                        "key":"Coupe de Cheveux",
                        "value":"Long"
                    },
                    {
                        "key":"Attache de Cheveux",
                        "value":"Queue de Cheval"
                    },
                    {
                        "key":"Couvre-Chef",
                        "value":"Aucun"
                    },
                    {
                        "key":"Lunettes",
                        "value":"Non"
                    },
                    {
                        "key":"Motif Maillot",
                        "value":"Rayures"
                    },
                    {
                        "key":"Couleur Maillot",
                        "value":"Bleu"
                    },
                    {
                        "key":"Genre",
                        "value":"Femme"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Caucasienne"
                    }
                ]
            },
            {
                "img":"./assets/charimg/suzie.png",
                "nom":"Suzie",
                "attributs":[
                    {
                        "key":"Couleur Cheveux",
                        "value":"Brun"
                    },
                    {
                        "key":"Coupe de Cheveux",
                        "value":"Mi-Long"
                    },
                    {
                        "key":"Attache de Cheveux",
                        "value":"Détaché"
                    },
                    {
                        "key":"Couleurs Yeux",
                        "value":"Noir"
                    },
                    {
                        "key":"Couvre-Chef",
                        "value":"Aucun"
                    },
                    {
                        "key":"Lunettes",
                        "value":"Non"
                    },
                    {
                        "key":"Motif Maillot",
                        "value":"Uni"
                    },
                    {
                        "key":"Couleur Maillot",
                        "value":"Jaune"
                    },
                    {
                        "key":"Genre",
                        "value":"Femme"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Caucasienne"
                    }
                ]
            },
            {
                "img":"./assets/charimg/imane.png",
                "nom":"Imane",
                "attributs":[
                    {
                        "key":"Couleur Cheveux",
                        "value":"Noir"
                    },
                    {
                        "key":"Coupe de Cheveux",
                        "value":"Frisé"
                    },
                    {
                        "key":"Attache de Cheveux",
                        "value":"Couettes-hautes"
                    },
                    {
                        "key":"Couleurs Yeux",
                        "value":"Noir"
                    },
                    {
                        "key":"Couvre-Chef",
                        "value":"Aucun"
                    },
                    {
                        "key":"Lunettes",
                        "value":"Non"
                    },
                    {
                        "key":"Motif Maillot",
                        "value":"Uni"
                    },
                    {
                        "key":"Couleur Maillot",
                        "value":"Violet"
                    },
                    {
                        "key":"Genre",
                        "value":"Femme"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Afro"
                    }
                ]
            },
            {
                "img":"./assets/charimg/melissa.png",
                "nom":"Melissa",
                "attributs":[
                    {
                        "key":"Couleur Cheveux",
                        "value":"Noir"
                    },
                    {
                        "key":"Coupe de Cheveux",
                        "value":"Long"
                    },
                    {
                        "key":"Attache de Cheveux",
                        "value":"Nattes"
                    },
                    {
                        "key":"Couvre-Chef",
                        "value":"Bonnet"
                    },
                    {
                        "key":"Couleur Couvre-Chef",
                        "value":"Bleu"
                    },
                    {
                        "key":"Lunettes",
                        "value":"Non"
                    },
                    {
                        "key":"Motif Maillot",
                        "value":"Uni"
                    },
                    {
                        "key":"Couleur Maillot",
                        "value":"Bleu"
                    },
                    {
                        "key":"Genre",
                        "value":"Femme"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Caucasienne"
                    }
                ]
            },
            {
                "img":"./assets/charimg/hugo.png",
                "nom":"Hugo",
                "attributs":[
                    {
                        "key":"Couleur Cheveux",
                        "value":"Blond"
                    },
                    {
                        "key":"Coupe de Cheveux",
                        "value":"Au bol"
                    },
                    {
                        "key":"Attache de Cheveux",
                        "value":"Détaché"
                    },
                    {
                        "key":"Couleurs Yeux",
                        "value":"Noir"
                    },
                    {
                        "key":"Couvre-Chef",
                        "value":"Aucun"
                    },
                    {
                        "key":"Lunettes",
                        "value":"Non"
                    },
                    {
                        "key":"Motif Maillot",
                        "value":"Rayures"
                    },
                    {
                        "key":"Couleur Maillot",
                        "value":"Rouge-Bleu"
                    },
                    {
                        "key":"Genre",
                        "value":"Homme"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Caucasienne"
                    }
                ]
            },
            {
                "img":"./assets/charimg/leo.png",
                "nom":"Leo",
                "attributs":[
                    {
                        "key":"Couleur Cheveux",
                        "value":"Brun"
                    },
                    {
                        "key":"Coupe de Cheveux",
                        "value":"Court"
                    },
                    {
                        "key":"Attache de Cheveux",
                        "value":"Détaché"
                    },
                    {
                        "key":"Couleurs Yeux",
                        "value":"Noir"
                    },
                    {
                        "key":"Couvre-Chef",
                        "value":"Chapeau"
                    },
                    {
                        "key":"Couleur Couvre-Chef",
                        "value":"Jaune"
                    },
                    {
                        "key":"Lunettes",
                        "value":"Non"
                    },
                    {
                        "key":"Motif Maillot",
                        "value":"Uni"
                    },
                    {
                        "key":"Couleur Maillot",
                        "value":"Jaune"
                    },
                    {
                        "key":"Genre",
                        "value":"Homme"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Caucasienne"
                    }
                ]
            },
            {
                "img":"./assets/charimg/sophie.png",
                "nom":"Sophie",
                "attributs":[
                    {
                        "key":"Couleur Cheveux",
                        "value":"Blond"
                    },
                    {
                        "key":"Coupe de Cheveux",
                        "value":"Mi-Long"
                    },
                    {
                        "key":"Attache de Cheveux",
                        "value":"Détaché"
                    },
                    {
                        "key":"Couleurs Yeux",
                        "value":"Noir"
                    },
                    {
                        "key":"Couvre-Chef",
                        "value":"Aucun"
                    },
                    {
                        "key":"Lunettes",
                        "value":"Rondes"
                    },
                    {
                        "key":"Motif Maillot",
                        "value":"Uni"
                    },
                    {
                        "key":"Couleur Maillot",
                        "value":"Vert"
                    },
                    {
                        "key":"Genre",
                        "value":"Femme"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Caucasienne"
                    }
                ]
            },
            {
                "img":"./assets/charimg/tom.png",
                "nom":"Tom",
                "attributs":[
                    {
                        "key":"Couleur Cheveux",
                        "value":"Roux"
                    },
                    {
                        "key":"Coupe de Cheveux",
                        "value":"Court"
                    },
                    {
                        "key":"Attache de Cheveux",
                        "value":"Détaché"
                    },
                    {
                        "key":"Couleurs Yeux",
                        "value":"Noir"
                    },
                    {
                        "key":"Couvre-Chef",
                        "value":"Aucun"
                    },
                    {
                        "key":"Lunettes",
                        "value":"Non"
                    },
                    {
                        "key":"Motif Maillot",
                        "value":"Uni"
                    },
                    {
                        "key":"Couleur Maillot",
                        "value":"Violet"
                    },
                    {
                        "key":"Genre",
                        "value":"Homme"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Caucasienne"
                    }
                ]
            },
            {
                "img":"./assets/charimg/jeanne.png",
                "nom":"Jeanne",
                "attributs":[
                    {
                        "key":"Couleur Cheveux",
                        "value":"Roux"
                    },
                    {
                        "key":"Coupe de Cheveux",
                        "value":"Long"
                    },
                    {
                        "key":"Attache de Cheveux",
                        "value":"Nattes"
                    },
                    {
                        "key":"Couleurs Yeux",
                        "value":"Noir"
                    },
                    {
                        "key":"Couvre-Chef",
                        "value":"Chapeau"
                    },
                    {
                        "key":"Couleur Couvre-Chef",
                        "value":"Jaune"
                    },
                    {
                        "key":"Lunettes",
                        "value":"Non"
                    },
                    {
                        "key":"Motif Maillot",
                        "value":"Uni"
                    },
                    {
                        "key":"Couleur Maillot",
                        "value":"Bleu"
                    },
                    {
                        "key":"Genre",
                        "value":"Femme"
                    },
                    {
                        "key":"Ethnie",
                        "value":"Caucasienne"
                    }
                ]
            }
        ]
    };

class GestionnairePopulation {

    /**
     *
     * @param {!Application} appInstance L'instance d'application commune aux panels
     * @throws {Error} Lance une erreur si appInstance n'est pas une instance de Application
     */
    constructor(appInstance) {
        if (!(appInstance instanceof Application)) {
            throw new Error("appInstance doit être l'instance de l'application commune aux panels");
        }
        this.appInstance = appInstance;
        this.clientChars = [];
        this.clientPops = undefined;
        this.rehinit();
        let obj = this;
        document.getElementById("pop_creator_ret").addEventListener("click", function(){obj.appInstance.getGestionnairePage().showPage("app", "inherit");});
        document.getElementById("pop_creator_save").addEventListener("click", function(){obj.save();});
    }

    getVannilla(){
        return vanilla;
    }

    getClientPop(idPopClient){
        return this.clientPops[idPopClient];
    }

    getClientChars(){
        return this.clientChars;
    }

    loadCharacters(){
        let chars = localStorage.getItem('characters');
        if(chars !== null){
            this.clientChars = JSON.parse(chars);
            this.appInstance.getPopulationPanel().loadPopCreator();
            alert(this.clientChars.length + " personnages ont été chargés.");
        }else{
            alert("Aucun personnage n'a été trouvé sur cet ordinateur.");
        }
    }

    loadPopulations(){
        let popCount = localStorage.getItem('popCount');
        let pops;
        this.clientPops = [];
        for(let i = 0; i < popCount; i++){
            pops = localStorage.getItem('population' + i);
            this.clientPops.push(JSON.parse(pops));
        }
        if(popCount == 0 || popCount === null){
            alert("Aucune population n'a été trouvée sur cet ordinateur.");
        }else{
            this.clearMenuPop();
            this.loadMenuPop();
            alert(popCount + " populations ont été chargés.");
        }
    }

    clearMenuPop(){
        let li = document.getElementsByClassName("clientPop");
        while(li.length != 0) {
            document.getElementById("sousmenuPop").removeChild(li[0]);
        }
    }

    loadMenuPop(){
        let obj = this.appInstance.getPopulationPanel();
        for(let i = 0; i < this.clientPops.length; i++){
            this.appInstance.getBanniere().addMenuItem("sousmenuPop", function(){ obj.loadPopulation("ClientPop", i); }, "Ma Population " + i, "clientPop")
        }
    }

    selectChar(idChar){
        let idx = this.selected.indexOf(idChar);
        if(idx < 0)
            this.select(idChar);
        else
            this.unselect(idChar, idx);
    }

    select(idChar){
        if(this.selected.length === 24)
            return;
        this.selected.push(idChar);
        document.getElementById("charfigure" + idChar).style.borderColor = "#df4540";
        document.getElementById("charstatus" + idChar).innerText = "Sélectionné";
        let char = Object();
        char.img = document.getElementById("charimg" + idChar).src;
        char.nom = document.getElementById("charName" + idChar).innerText;
        char.attributs = [];
        let attr;
        let attrKeys = document.getElementById("tooltip" + idChar).getElementsByClassName("attr_id");
        let attrVals = document.getElementById("tooltip" + idChar).getElementsByClassName("attr_value");
        for(let i = 0; i < attrKeys.length; i++){
            attr = {
                key: attrKeys[i].innerHTML,
                value: attrVals[i].innerHTML
            };
            char.attributs.push(attr);
        }
        this.creaPop.push(char);
        this.majCompteur();
    }

    unselect(idChar, idx){
        document.getElementById("charfigure" + idChar).style.borderColor = "grey";
        document.getElementById("charstatus" + idChar).innerText = "";
        this.selected.splice(idx, 1);
        this.creaPop.splice(idx, 1);
        this.majCompteur();
    }

    majCompteur(){
        let cpt = (24 - this.creaPop.length);
        if(cpt == 0)
            document.getElementById("pop_creator_save").style.display = "inherit";
        else
            document.getElementById("pop_creator_save").style.display = "none";
        document.getElementById("nbPerManquant").innerText = cpt + "";
    }

    save(){
        let count = localStorage.getItem('popCount');
        if(count == null)
            count = 0;
        let json = JSON.stringify(this.creaPop);
        localStorage.setItem('population' + count, json);
        count++;
        localStorage.setItem('popCount', count);
        alert("Population bien sauvegardés.\nTotal : " + count);
        this.rehinit();
    }

    rehinit(){
        this.selected = [];
        this.creaPop = [];
        document.getElementById("pop_creator_save").style.display = "none";
        let status = document.getElementById("pop_creator_content").getElementsByClassName("charstatus");
        let fig = document.getElementById("pop_creator_content").getElementsByClassName("charfigure");
        for(let i = 0; i < status.length; i++){
            status[i].innerText = "";
            fig[i].style.borderColor = "grey";
        }
    }
}
export default GestionnairePopulation;