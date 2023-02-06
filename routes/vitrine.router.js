const vitrineController = require("../controllers/vitrine.controller");
const express = require('express');
const router = express.Router();

router.get('/prestataires', vitrineController.listePrestataire); // OK
/**
 * @swagger
 * /prestataires:
 *   get:
 *      description: Liste tous les prestataires
 *      tags:
 *          - vitrine
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/prestataires/:id', vitrineController.idPrestataire); // OK
/**
 * @swagger
 * /prestataires/{id}:
 *   get:
 *      description: Liste les infos du prestataires par son ID
 *      tags:
 *          - vitrine
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: false
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/stands', vitrineController.listeStand); // OK
/**
 * @swagger
 * /stands:
 *   get:
 *      description: Liste tous les stands
 *      tags:
 *          - vitrine
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/stands/:id', vitrineController.idStand); // OK
/**
 * @swagger
 * /stands/{id}:
 *   get:
 *      description: Liste les stands par ID
 *      tags:
 *          - vitrine
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: false
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/category', vitrineController.selectCategories); // OK
/**
 * @swagger
 * /category:
 *   get:
 *      description: Liste les catégories de prestation
 *      tags:
 *          - vitrine
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/category/:id', vitrineController.prestataireByIdCategory); // OK
/**
 * @swagger
 * /category/{id}:
 *   get:
 *      description: Affiche les prestataires par id de categorie de prestation
 *      tags:
 *          - vitrine
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: false
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post('/commentaire', vitrineController.addCommentaire); //OK
/**
 * @swagger
 * /commentaire:
 *   post:
 *      description: Ajoute un commentaire
 *      tags:
 *          - vitrine
 *      parameters:
 *          - in: body
 *            name: data
 *            schema:
 *              type: object
 *              properties:
 *                nom:
 *                  type: string
 *                prenom:
 *                  type: string
 *                comment:
 *                  type: string
 *                idPrestataire:
 *                  type: integer
 *              example:
 *                  nom: un nom de prestataire
 *                  prenom: un prenom
 *                  comment: un commentaire donnant un avis sur le prestataire et son activité
 *                  idPrestataire: 0
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get("/commentaire/:id", vitrineController.showCommentaire);
/**
 * @swagger
 * /commentaire/{id}:
 *   get:
 *      description: Affiche le commentaire correspondant à l'id
 *      tags:
 *          - vitrine
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: false
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;
