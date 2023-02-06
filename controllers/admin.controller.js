const adminService = require("../services/admin.service");

exports.listPrestataires = (req,res) => {
    adminService.listPrestataires((error, results) => {
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

exports.idPrestataires = (req,res) => {
    let id = req.params.id;
    adminService.idPrestataires(id,(error, results) => {
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

exports.addPrestataires = (req,res) => {
    const news = {
        nom: req.body.nom,
        texte: req.body.texte,
        image: req.body.image,
        siren: req.body.siren,
        idCategory: req.body.idCategory
    }
    adminService.addPrestataires(news,(error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: "Prestataire ajouté",
        });
    });
}

exports.updatePrestataires = (req,res) => {
    const news = {
        idPrestataire: req.params.id,
        textePrestataire: req.body.texte,
        imagePrestataire: req.body.image,
    }
    adminService.updatePrestataires(news,(error, results) => {
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

exports.deletePrestataires = (req,res) => {
    const id = req.params.id;
    adminService.deletePrestataires(id,(error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: "Prestataire supprimé",
        });
    });
}

exports.listStands = (req,res) => {
    adminService.listStands((error, results) => {
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

exports.idStands = (req,res) => {
    const id = req.params.id;
    console.log(id); // a retirer un peu plus tard
    adminService.idStands(id,(error, results) => {
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

exports.addStands = (req,res) => {
    const news = {
        libelle: req.body.libelle,
        idLoc: req.body.idLoc
    }
    adminService.addStands(news,(error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: "Stand ajouté",
        });
    });
}

exports.updateStands = (req,res) => {
    const news = {
        libelle: req.body.libelle,
        idStands: req.params.id
    }
    adminService.updateStands(news,(error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: "Stand modifié",
        });
    });
}

exports.deleteStands = (req,res) => {
    const id = req.params.id;
    adminService.deleteStands(id,(error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: "Stand supprimé",
        });
    });
}

exports.showCalendar = (req, res) =>{
    adminService.showCalendrier((error, results)=>{
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

exports.addCalendar = (req, res) =>{
    const tab = {
        horaireDebut: req.body.horaireDebut,
        horaireFin: req.body.horaireFin,
        idPrestataire: req.body.idPrestataire,
        idStand: req.body.idStand
    }
    adminService.addCalendrier(tab,(error, results)=>{
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: "Evénement ajouté",
        });
    });
}

exports.updateCalendar = (req, res) =>{
    const tab = {
        newhoraireDebut: req.body.newhoraireDebut,
        newhoraireFin: req.body.newhoraireFin,
        horaireDebut: req.body.horaireDebut,
        horaireFin: req.body.horaireFin,
        idPrestataire: req.params.id,
        idStand: req.body.idStand
    }
    adminService.updateCalendrier(tab,(error, results)=>{
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: "Evénement modifié",
        });
    });
}

exports.deleteCalendar = (req, res) =>{
    const tab = {
        hDebut: req.body.horaireDebut,
        hFin: req.body.horaireFin,
        idPrestataire: req.params.id,
        idStand: req.body.idStand
    }
    adminService.deleteCalendrier(tab,(error, results)=>{
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: "Evenement supprimé",
        });
    });
}

exports.showPrestataire = (req, res) =>{
    adminService.showPrestataire((error, results)=>{
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

exports.showPrestataireByStand = (req, res) => {
    adminService.showPrestataireByStand((error, results)=>{
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}

exports.deleteCommentaire = (req, res) => {
    const id = req.params.id;
    adminService.deleteCommentaire(id, (error, results)=>{
        if(error){
            return res.status(400).send({sucess: 0, data: error});
        }
        return res.status(200).send({
            success: 1,
            data: "Commentaire supprimé",
        });
    })
}

exports.showCommentaire = (req, res) => {
    const id = req.params.id;
    adminService.showCommentaire(id,(error, results)=>{
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