const prestataireService = require("../services/prestataire.service");

exports.selfEdit = (req, res) => {
    const news = {
        texte: req.body.texte,
        image: req.body.image,
        id: req.params.id
    }
    prestataireService.selfEdit(news,(error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: "Prestataire modifié",
        });
    });
}

exports.livreDOr = (req, res)=>{
    const news = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        comment: req.body.comment,
        idPrestataire: req.body.idPrestataire
    }
    prestataireService.livreDOr(news, (error, results)=>{
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: "Commentaire ajouté",
        });
    })
}


exports.showCommentaire = (req, res) => {
    const id = req.params.id;
    prestataireService.showCommentaire(id,(error, results)=>{
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

exports.selectById = (req, res) => {
    const id = req.params.id;
    prestataireService.selectById(id,(error, results)=>{
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

exports.showCalendrier = (req, res) => {
    prestataireService.showCalendrier((error, results)=>{
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

exports.addCalendrier = (req, res) => {
    const tab = {
        hDebut: req.body.horaireDebut,
        hFin: req.body.horaireFin,
        idStand: req.body.idStand,
        idPrestataire: req.body.idPrestataire
    }
    prestataireService.addCalendrier(tab,(error, results)=>{
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: "Evénement ajouté",
        });
    })
}

exports.deleteCalendrier = (req, res) => {
    const tab = {
        hDebut: req.body.horaireDebut,
        hFin: req.body.horaireFin,
        idStand: req.body.idStand,
        idPrestataire: req.params.id
    }
    console.log(tab.hDebut);
    console.log(tab.hFin);
    prestataireService.deleteCalendrier(tab,(error, results)=> {
        if (error) {
            console.log(error);
            return res.status(400).send({success: 0, data: error});
        }
        return res.status(200).send({
            success: 1,
            data: "Evénement supprimé",
        });
    })
}

exports.updateCalendrier = (req, res) => {
    const tab = {
        hDebut: req.body.horaireDebut,
        hFin: req.body.horaireFin,
        idStand: req.body.idStand,
        idPrestataire: req.params.id,
        newhDebut: req.body.newhoraireDebut,
        newhFin: req.body.newhoraireFin
    }
    prestataireService.updateCalendrier(tab,(error, results)=>{
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: "Evénement modifié",
        });
    })
}