DROP TABLE IF EXISTS repond;
DROP TABLE IF EXISTS comporte;
DROP TABLE IF EXISTS accede;
DROP TABLE IF EXISTS situe;
DROP TABLE IF EXISTS modifie;
DROP TABLE IF EXISTS produit;
DROP TABLE IF EXISTS billets;
DROP TABLE IF EXISTS categorieBillets;
DROP TABLE IF EXISTS livreDOr;
DROP TABLE IF EXISTS utilisateurs;
DROP TABLE IF EXISTS categorieComptes;
DROP TABLE IF EXISTS calendrier;
DROP TABLE IF EXISTS stands;
DROP TABLE IF EXISTS prestataires;
DROP TABLE IF EXISTS entreprises;
DROP TABLE IF EXISTS caracteristiques;
DROP TABLE IF EXISTS statistiques;
DROP TABLE IF EXISTS services;
DROP TABLE IF EXISTS categoriePrestations;
DROP TABLE IF EXISTS localisations;


CREATE TABLE IF NOT EXISTS localisations
(
    idLocalisation      SERIAL,
    libelleLocalisation VARCHAR(255),
    PRIMARY KEY (idLocalisation)
);

CREATE TABLE IF NOT EXISTS  categoriePrestations
(
    idCategorie      SERIAL,
    libelleCategorie VARCHAR(255),
    PRIMARY KEY (idCategorie)
);

CREATE TABLE IF NOT EXISTS  services
(
    idService      SERIAL,
    libelleService VARCHAR(255),
    PRIMARY KEY (idService)
);

CREATE TABLE IF NOT EXISTS  statistiques
(
    idStatistique      SERIAL,
    libelleStatistique VARCHAR(255),
    valeur             DECIMAL(15, 2),
    PRIMARY KEY (idStatistique)
);

CREATE TABLE IF NOT EXISTS  caracteristiques
(
    idCaracteristique      SERIAL,
    libelleCaracteristique VARCHAR(255),
    PRIMARY KEY (idCaracteristique)
);

CREATE TABLE IF NOT EXISTS  categorieBillets
(
    idCategorie      SERIAL,
    libelleCategorie VARCHAR(255),
    PRIMARY KEY (idCategorie)
);

CREATE TABLE IF NOT EXISTS  entreprises
(
    siren         SERIAL,
    nomEntreprise VARCHAR(255),
    PRIMARY KEY (siren)
);

CREATE TABLE IF NOT EXISTS  categorieComptes
(
    typeCompte    SERIAL,
    libelleCompte VARCHAR(58),
    PRIMARY KEY (typeCompte)
);

CREATE TABLE IF NOT EXISTS  prestataires
(
    idPrestataire    SERIAL,
    prenom           VARCHAR(255),
    nom              VARCHAR(255),
    textePrestataire TEXT,
    imagePrestataire VARCHAR(255),
    siren            INT NOT NULL,
    idCategorie      INT NOT NULL,
    PRIMARY KEY (idPrestataire),
    FOREIGN KEY (siren) REFERENCES entreprises (siren),
    FOREIGN KEY (idCategorie) REFERENCES categoriePrestations (idCategorie) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS stands
(
    idStand      SERIAL,
    libelleStand VARCHAR(255),
    idLocalisation     INT NOT NULL,
    PRIMARY KEY (idStand),
    FOREIGN KEY (idLocalisation) REFERENCES localisations (idLocalisation)
);

CREATE TABLE IF NOT EXISTS  utilisateurs
(
    idUtilisateur SERIAL,
    mdp           VARCHAR(255),
    login         VARCHAR(255),
    age           INT,
    nom           VARCHAR(255),
    prenom        VARCHAR(255),
    typeCompte    INT NOT NULL,
    PRIMARY KEY (idUtilisateur),
    FOREIGN KEY (typeCompte) REFERENCES categorieComptes (typeCompte)
);

CREATE TABLE IF NOT EXISTS  billets
(
    idBillet      SERIAL,
    prix          DECIMAL(15, 2),
    idUtilisateur INT NOT NULL,
    idCategorie   INT NOT NULL,
    PRIMARY KEY (idBillet),
    FOREIGN KEY (idUtilisateur) REFERENCES utilisateurs (idUtilisateur),
    FOREIGN KEY (idCategorie) REFERENCES categorieBillets (idCategorie)
);

CREATE TABLE IF NOT EXISTS  produit
(
    idService     INT,
    idStatistique INT,
    PRIMARY KEY (idService, idStatistique),
    FOREIGN KEY (idService) REFERENCES services (idService),
    FOREIGN KEY (idStatistique) REFERENCES statistiques (idStatistique)
);

CREATE TABLE IF NOT EXISTS  modifie
(
    idPrestataire INT,
    idUtilisateur INT,
    heureVisite   TIMESTAMP,
    PRIMARY KEY (idPrestataire, idUtilisateur),
    FOREIGN KEY (idPrestataire) REFERENCES prestataires (idPrestataire) ON DELETE CASCADE,
    FOREIGN KEY (idUtilisateur) REFERENCES utilisateurs (idUtilisateur)
);

CREATE TABLE  IF NOT EXISTS situe
(
    idStand INT,
    horaireDebut  TIMESTAMP,
    horaireFin    TIMESTAMP,
    idPrestataire INT,
    PRIMARY KEY (idStand),
    FOREIGN KEY (idStand) REFERENCES stands (idStand) ON DELETE CASCADE,
    FOREIGN KEY (idPrestataire) REFERENCES prestataires (idPrestataire) ON DELETE CASCADE
);

CREATE TABLE  IF NOT EXISTS accede
(
    idPrestataire INT,
    idService     INT,
    PRIMARY KEY (idPrestataire, idService),
    FOREIGN KEY (idPrestataire) REFERENCES prestataires (idPrestataire) ON DELETE CASCADE,
    FOREIGN KEY (idService) REFERENCES services (idService)
);

CREATE TABLE  IF NOT EXISTS comporte
(
    idStand     INT,
    idCaracteristique INT,
    PRIMARY KEY (idStand, idCaracteristique),
    FOREIGN KEY (idStand) REFERENCES stands (idStand) ON DELETE CASCADE,
    FOREIGN KEY (idCaracteristique) REFERENCES caracteristiques (idCaracteristique) ON DELETE CASCADE
);

CREATE TABLE  IF NOT EXISTS repond
(
    idPrestataire     INT,
    idCaracteristique INT,
    PRIMARY KEY (idPrestataire, idCaracteristique),
    FOREIGN KEY (idPrestataire) REFERENCES prestataires (idPrestataire) ON DELETE CASCADE,
    FOREIGN KEY (idCaracteristique) REFERENCES caracteristiques (idCaracteristique) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS livreDOr(
    idCommentaire SERIAL PRIMARY KEY ,
    nom VARCHAR,
    prenom VARCHAR,
    commentaire VARCHAR,
    idPrestataire INT,
    FOREIGN KEY (idPrestataire) REFERENCES prestataires(idPrestataire) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS calendrier(
    debut VARCHAR,
    fin VARCHAR,
    idPrestataire INT NOT NULL,
    idStand INT NOT NULL ,
    FOREIGN KEY (idPrestataire) REFERENCES prestataires(idPrestataire) ON DELETE CASCADE,
    FOREIGN KEY (idStand) REFERENCES stands(idStand) ON DELETE CASCADE
);


insert into localisations(libelleLocalisation)
values ('localisation 1');
insert into localisations(libelleLocalisation)
values ('localisation 2');
insert into localisations(libelleLocalisation)
values ('localisation 3');

insert into categoriePrestations(libelleCategorie)
values ('categorie 1');
insert into categoriePrestations(libelleCategorie)
values ('categorie 2');
insert into categoriePrestations(libelleCategorie)
values ('categorie 3');

insert into services(libelleService)
values ('service 1');
insert into services(libelleService)
values ('service 2');
insert into services(libelleService)
values ('service 3');

insert into statistiques(libelleStatistique, valeur)
values ('statistique 1', 1);
insert into statistiques(libelleStatistique, valeur)
values ('statistique 2', 2);
insert into statistiques(libelleStatistique, valeur)
values ('statistique 3', 3);

insert into caracteristiques(libelleCaracteristique)
values ('electricite');
insert into caracteristiques(libelleCaracteristique)
values ('eau');
insert into caracteristiques(libelleCaracteristique)
values ('espace');

insert into categorieBillets(libelleCategorie)
values ('enfant');
insert into categorieBillets(libelleCategorie)
values ('groupe');
insert into categorieBillets(libelleCategorie)
values ('adulte');

insert into entreprises(siren, nomEntreprise)
values (1, 'entreprise 1');
insert into entreprises(siren, nomEntreprise)
values (2, 'entreprise 2');
insert into entreprises(siren, nomEntreprise)
values (3, 'entreprise 3');

insert into categorieComptes(libelleCompte)
values ('categorieComptes 1');
insert into categorieComptes(libelleCompte)
values ('categorieComptes 3');
insert into categorieComptes(libelleCompte)
values ('categorieComptes 2');

insert into prestataires(nom, textePrestataire, imagePrestataire, siren, idCategorie)
values ('prestataires 1', 'texte 1', 'image 1', 1, '1');
insert into prestataires(nom, textePrestataire, imagePrestataire, siren, idCategorie)
values ('prestataires 2', 'texte 2', 'image 1', 2, '2');
insert into prestataires(nom, textePrestataire, imagePrestataire, siren, idCategorie)
values ('prestataires 3', 'texte 3', 'image 1', 3, '3');

insert into stands(libelleStand, idLocalisation)
values ('stands 1', 1);
insert into stands(libelleStand, idLocalisation)
values ('stands 2', 2);
insert into stands(libelleStand, idLocalisation)
values ('stands 3', 3);

insert into utilisateurs(mdp, login, age, nom, typeCompte)
values ('mdp 1', 'login 1', 1, 'nom 1', '1');
insert into utilisateurs(mdp, login, age, nom, typeCompte)
values ('mdp 2', 'login 2', 2, 'nom 2', '2');
insert into utilisateurs(mdp, login, age, nom, typeCompte)
values ('mdp 3', 'login 3', 3, 'nom 3', '3');

insert into billets(prix, idUtilisateur, idCategorie)
values (32, 1, 1);
insert into billets(prix, idUtilisateur, idCategorie)
values (64, 2, 2);
insert into billets(prix, idUtilisateur, idCategorie)
values (128, 3, 3);

insert into produit(idService, idStatistique)
values (1, 1);
insert into produit(idService, idStatistique)
values (2, 2);
insert into produit(idService, idStatistique)
values (3, 3);

insert into modifie(idPrestataire, idUtilisateur, heureVisite)
values (1, 1, '23/12/01');
insert into modifie(idPrestataire, idUtilisateur, heureVisite)
values (2, 2, '23/12/02');
insert into modifie(idPrestataire, idUtilisateur, heureVisite)
values (3, 3, '23/12/03');

insert into situe(idStand, horaireDebut, horaireFin, idPrestataire)
values (1, '15/01/2001', '16/12/2001', 1);
insert into situe(idStand, horaireDebut, horaireFin, idPrestataire)
values (2, '15/01/2002', '16/12/2002', 2);
insert into situe(idStand, horaireDebut, horaireFin, idPrestataire)
values (3, '15/01/2003', '16/12/2003', 3);


insert into accede(idPrestataire, idService)
values (1, 1);
insert into accede(idPrestataire, idService)
values (2, 2);
insert into accede(idPrestataire, idService)
values (3, 3);

insert into comporte(idStand, idCaracteristique)
values (1, 1);
insert into comporte(idStand, idCaracteristique)
values (2, 2);
insert into comporte(idStand, idCaracteristique)
values (3, 3);

insert into repond(idPrestataire, idCaracteristique)
values (1, 1);
insert into repond(idPrestataire, idCaracteristique)
values (2, 2);
insert into repond(idPrestataire, idCaracteristique)
values (3, 3);

insert into calendrier(debut, fin, idPrestataire, idStand)
values ('2023-04-10 16:30:00', '2023-04-10 17:30:00', 1, 3);
insert into calendrier(debut, fin, idPrestataire, idStand)
values ('2023-04-19 11:00:00', '2023-04-19 12:30:00', 2, 1);
insert into calendrier(debut, fin, idPrestataire, idStand)
values ('2023-11-11 20:30:00', '2023-11-11 22:30:00', 3, 2);

insert into livreDOr(nom, prenom, commentaire, idprestataire)
values ('Guy', 'Plante', 'bien', 1);
insert into livreDOr(nom, prenom, commentaire, idprestataire)
values ('Emmanuel', 'Macron', 'moyen', 2);
insert into livreDOr(nom, prenom, commentaire, idprestataire)
values ('Squeezie', 'leYoutuber', 'cest bon pour vous ?', 3);
