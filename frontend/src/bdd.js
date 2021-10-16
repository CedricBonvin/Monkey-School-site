

// -----------------------------------------------------
// **********   BADE DE DONNEES DES COURS **************
// -----------------------------------------------------

const bddCours = {
    initiation : [
        {
            type : "initiation",
            nomCours : "Initiation",
            image : require("@/assets/images/header.jpg"),
            ageString : "4 à 99 ans",
            infoCarte : " 4 à 99 ans",
            jour : "Les 1er samedi du mois",
            heure : "10h à 12h",
            nbrCours : "1",
            dureeCours : "1h30",
            choiceDateCours : [
                new Date(2021, 8, 10),
                new Date(2021, 9, 10),
                new Date(2021, 10, 10),
                new Date(2021, 11, 10),
            ],
            lieux : "Crans-Montana, salle d'escalade de la Moubra ",
            prix :80,
            datesCours2020 : "07-09 / 12-09 / 13-09",
            datesCours2021 : "07-01 / 12-01 / 13-01",
            descriptionCour : "Afin de découvrir l'escalade en toute sécurité, tous les 1er samedi du mois Monkey-School organise des cours d'initation.",
            isDateCours : true,
           
        }
    ],
    regulierEnfant : [
        
        //  MINI-SPIDER 
        {   
            typeCours : "regulier",
            nomCours : "Mini-Spider",
            image : require("@/assets/images/header.jpg"),
            coursPdf : require("@/assets/fichier/date-Mini-Spider.png"),
            ageCours : [4,5,6,7],
            ageString : "4 à 7 ans",
            infoCarte : "4 à 7 ans",
            jour : "Lundi",
            heure : "17h30 à 19h",
            nbrCours : 30,
            dureeCours : "1h30",
            lieux : "Crans-Montana, salle d'escalade de la Moubra ",
            prix : 840,
            rabais : null,
            get prixAPaye(){
                if (this.rabais){
                    return this.prix - (this.prix * this.rabais / 100)
                }
                else return this.prix
            },
            valeurAbo : "CHF 290.-",
            datesCours2020 : "06-09 / 13-09 / 20-09 / 27-09 / 04-10 / 11-10 / 25-10 / 08-11 / 15-11 / 22-11 / 29-11 / 06-12 / 13-12 / 20-12",
            datesCours2021 : "10-01 / 17-01 / 24-01 / 31-01 / 07-02 / 14-02 / 21-02 / 07-03 / 14-03 / 21-03 / 28-03 / 04-04 / 11-04 / 25-04 / 02-05 / 09-05",
            descriptionCour : "Ce cours se doit d'être ludique et axé sur des jeux, développement de l'équilibre, coordination, souplesse. Leurs donné tous les atouts pour qu'il puisse s'épanouire dans les meilleurs conditions qu'il soit !  ",
            isDateCours : true,
          
        },
        //  GECKO
        {
            typeCours : "regulier",
            nomCours : "Gecko",
            image : require("@/assets/images/header.jpg"),
            coursPdf : require("@/assets/fichier/date-Gecko.png"),
            ageCours  : [7,8,9,10,11],
            ageString : "7 à 11 ans",
            infoCarte : " 7 à 11 ans",
            jour : "Mardi",
            heure : "17h30 à 19h",
            nbrCours : 30,
            dureeCours : "1h30",
            lieux : "Crans-Montana, salle d'escalade de la Moubra ",
            prix : 840,
            rabais : null,
            get prixAPaye(){
                if (this.rabais){
                    return this.prix - (this.prix * this.rabais / 100)
                }
                else return this.prix
            },
            valeurAbo : "CHF 290.-",
            datesCours2020 : "07-09 / 14-09 / 21-09 / 28-09 / 05-10  / 12-10 / 26-10 / 02-11 / 09-11 / 16-11 / 23-11 / 30-11 / 07-12 / 14-12 / 21-12",
            datesCours2021 : "11-01 / 18-01 / 25-01 / 01-02 / 08-02 / 15-02 / 22-02 / 08-03 / 15-03 / 22-03 / 29-03 / 05-04 / 12-04 / 26-04 / 03-05",
            descriptionCour : "Ce cours est fait pour les Geckos ",
            isDateCours : true,
       
        },
        //  MONKEY
        {
            typeCours: "regulier",
            nomCours : "Monkey",
            image : require("@/assets/images/header.jpg"),
            coursPdf : require("@/assets/fichier/date-Monkey.png"),
            ageCours : [11,12,13,14,15,16],
            ageString : "11 à 16 ans",
            infoCarte : "11 à 16 ans",
            jour : "Jeudi",
            heure : "17h30 à 19h",
            nbrCours : 30,
            dureeCours : "1h30",
            lieux : "Crans-Montana, salle d'escalade de la Moubra ",
            prix : 840,
            rabais : null,
            get prixAPaye(){
                if (this.rabais){
                    return this.prix - (this.prix * this.rabais / 100)
                }
                else return this.prix
            },
            valeurAbo : "CHF 290.-",
            datesCours2020 : "02-09 / 09-09 / 16-09 / 23-09 / 30-09 / 07-10 / 28-10 / 04-11 / 11-11 / 18-11 / 25-11 / 02-12 / 09-12 / 16-12 / 23-12",
            datesCours2021 : "13-01 / 20-01 / 27-01 / 03-02 / 10-02 / 17-02 / 24-02 / 10-03 / 17-03 / 24-03 / 31-03 / 07-04 / 14-04 / 28-04 / 05-05",
            descriptionCour : "Ce cours est fait pour les MONKEY ",
            isDateCours : true,
       
        },
    ],
    regulierAdulte : [
        {
            typeCours : "regulier",
            nomCours : "Big-Monkey",
            image : require("@/assets/images/header.jpg"),
            ageString : "16 à 99 ans",
            infoCarte : " 16 à 99 ans",
            jour : "Jeudi",
            heure : "19h30 à 21h",
            nbrCours : 30,
            dureeCours : "1h30",
            lieux : "Crans-Montana, salle d'escalade de la Moubra ",
            prix :840,
            valeurAbo : "CHF 590.-",
            datesCours2020 : "06-09 / 13-09 / 20-09 / 27-09 / 04-10 / 11-10 / 08-11 / 15-11 / 22-11 / 29-11 / 06-12 / 13-12 / 20-12",
            datesCours2021 : "10-01 / 17-01 / 24-01 / 31-01 / 07-02 / 14-02 / 21-02 / 07-03 / 14-03 / 21-03 / 28-03 / 04-04 / 11-04 / 25-04 / 02-05",
            descriptionCour : "Ce cours est fait pour les Adultes",
            isDateCours : true,
         
        }
    ],
    coursPrive : [
        {
            typeCours : "prive",
            nomCours : "Privée",
            image : require("@/assets/images/header.jpg"),
            ageCours  : "4 à 99 ans",
            ageString : "4 à 99 ans",
            infoCarte : " 4 à 99 ans",
            jour : "7 / 7",
            heure : "entre 8 et 20h",
            nbrCours : "Illimité",
            dureeCours : "min. 1 heure",
            lieux : "Crans-Montana, salle d'escalade de la Moubra ",
            prix : "80.- / heure",
            descriptionCour : "Ceci est le cours prvée...",
            isDateCours : false,
           
        },
    ],
    autonomie : [
        {
            typeCours : "autonomie",
            nomCours : "CB1",
            image : require("@/assets/images/header.jpg"),
            ageCours  : "7 à 99 ans",
            ageString : "7 à 99 ans",
            infoCarte : "Assurage en moulinette !",
            jour : "selon dates prévu",
            heure : "10h à 12h",
            nbrCours : 3,
            dureeCours : "2 heures",
            lieux : "Crans-Montana, salle d'escalade de la Moubra ",
            prixCours : 190,
            choiceDateCours : [
                "13 novembre 2021",
                "16 deécembre 2021",
                "04 janvier 2021",
                "13 novembre 2021",
            ] ,
            descriptionCour : "Ceci est le cours prvée...",
            isDateCours : true,
           
        },
        {
            typeCours : "autonomie",
            nomCours : "CB2",
            image : require("@/assets/images/header.jpg"),
            ageCours  : "4 à 99 ans",
            ageString : "7 à 99 ans",
            infoCarte : "Assurage en tête !",
            jour : "7 / 7",
            heure : "entre 8 et 20h",
            nbrCours : 3,
            dureeCours : "2 heures",
            lieux : "Salle d'escalade de la Moubra",
            prix :"CHF 80.- / heure",
            datesCours2020 : "07-09 / 12-09 / 13-09",
            datesCours2021 : "07-01 / 12-01 / 13-01",
            descriptionCour : "Ceci est le cours prvée...",
            afficheDate : false,
        
        },
    ],
    famille : [
        {
            typeCours : "famille",
            nomCours : "Famille",
            image : require("@/assets/images/header.jpg"),
            ageCours  : "7 à 99ans",
            ageString : "famille",
            infoCarte : "Toute la famille",
            jour : "7 / 7",
            heure : "entre 8 et 20h",
            nbrCours : 1,
            dureeCours : "1h30",
            lieux : "Crans-Montana, salle d'escalade de la Moubra ",
            prix :150,
            descriptionCour : "Ceci est le cours famille",
            isDateCours : false,
     
        },
    ],
    noel : [
        {
            typeCours : "Noel",
            nomCours : "Noel",
            image : require("@/assets/images/header.jpg"),
            ageCours  : "4 à 16 ans",
            ageString : "4 à 16 ans",
            infoCarte : " 4 à 16 ans",
            jour : "Période de Noël",
            datesCours2021 : "01.01 / 02.02 / 03.01 / 04.01 / 05.01 / 06.01 / 07.01",
            datesCours2020 : "23.12 / 24.12 / 25.12 / 26.12 / 27.12 / 28.12 / 29.12 / 30.12 / 31.12",
            heure : "15 à 18h",
            nbrCours : "1",
            dureeCours : "3 heures",
            lieux : "Crans-Montana, salle d'escalade de la Moubra ",
            prix : "80.- / 3 heures",
            descriptionCour : "Durant la périodes de Noël un professeur d'escalade est à disposition",
            isDateCours : false,
           
        },
    ],

}

export {bddCours}