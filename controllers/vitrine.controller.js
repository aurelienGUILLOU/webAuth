const vitrineService = require("../services/vitrine.service");

exports.listePrestataire = (req, res) => {
    vitrineService.listePrestataire((error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.idPrestataire = (req, res) => {
    const id = req.params.id;
    vitrineService.idPrestataire(id,(error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.listeStand = (req, res) => {
    vitrineService.listeStand((error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.idStand = (req, res) => {
    const id = req.params.id;
    vitrineService.idStand(id,(error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.selectCategories = (req, res) => {
    vitrineService.listCategory((error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.prestataireByIdCategory = (req, res) => {
    const id = req.params.id;
    vitrineService.listePrestataireByCategory(id,(error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.addCommentaire = (req, res) =>{
    const news = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        comment: req.body.comment,
        idPrestataire: req.body.idPrestataire
    }
    vitrineService.addCommentaire(news, (error, results)=>{
        if(error) {
            console.log(error);
            return res.status(400).send({success: 0, data: error});
        }
        return res.status(200).send({
            success: 1,
            data: "Commentaire ajouté",
        });
    });
}

exports.showCommentaire = (req, res) => {
    const id = req.params.id;
    vitrineService.showCommentaire(id,(error, results)=>{
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    })
}