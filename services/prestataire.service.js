const pool = require("../db");
const prestataireQuery = require("../Query/prestataire.query");


const selfEdit = async (news,callback) => {
    const texte = news.texte;
    const image = news.image;
    const id = news.id;
    await pool.query(prestataireQuery.editPrestataire ,[texte, image, id])
    .then(results=>{
        return(callback(null, results.rows))
    })
    .catch(error=>{
        return(callback(error, null))
    })
}


const livreDOr = async (news, callback) =>{
    const commentaire = news.comment;
    const nom = news.nom;
    const prenom = news.prenom;
    const idPrestataire = news.idPrestataire;
    await pool.query(prestataireQuery.livreDor, [nom, prenom, commentaire, idPrestataire])
    .then(results=>{
        return callback(null, results.rows)
    })
    .catch(error=>{
        return callback(error, null)
    })
}


const showCalendrier = async (callback) =>{
    await pool.query(prestataireQuery.showCalendar)
        .then(results=>{
            return callback(null, results.rows)
        })
        .catch(error=>{
            return callback(error, null)
        })
}

const addCalendrier = async (tab, callback) =>{
    const hDebut = tab.hDebut;
    const hFin = tab.hFin;
    const idPrestataire = tab.idPrestataire;
    const idStand = tab.idStand;
    console.log(hDebut);
    console.log(hFin);
    await pool.query(prestataireQuery.addCalendar, [hDebut, hFin, idPrestataire, idStand])
        .then(results=>{
            return callback(null, results.rows)
        })
        .catch(error=>{
            return callback(error, null)
        })
}

const updateCalendrier = async (tab, callback) =>{
    const hDebut = tab.hDebut;
    const hFin = tab.hFin;
    const idPrestataire = tab.idPrestataire;
    const idStand = tab.idStand;
    const newDebut = tab.newhDebut;
    const newFin = tab.newhFin;
    await pool.query(prestataireQuery.updateCalendar, [newDebut, newFin, idPrestataire, idStand, hDebut, hFin])
        .then(results=>{
            return callback(null, results.rows)
        })
        .catch(error=>{
            return callback(error, null)
        })
}

const deleteCalendrier = async (tab, callback) =>{
    const idPrestataire = tab.idPrestataire;
    const idStand = tab.idStand;
    const hDebut = tab.hDebut;
    const hFin = tab.hFin;
    await pool.query(prestataireQuery.deleteCalendar, [hDebut, hFin, idPrestataire, idStand])
        .then(results=>{
            return callback(null, results.rows)
        })
        .catch(error=>{
            return callback(error, null)
        })
}

const showCommentaire = async (id,callback) =>{
    await pool.query(prestataireQuery.showCommentaire, [id])
        .then(results=>{
            return callback(null, results.rows)
        })
        .catch(error=>{
            return callback(error, null)
        })
}

const selectById = async (id, callback) => {
    await pool.query(prestataireQuery.selectPrestataireById, [id])
        .then(results=>{
            return callback(null, results.rows)
        })
        .catch(error=>{
            return callback(error, null)
        })
}

module.exports = {
    selfEdit : selfEdit,
    livreDOr: livreDOr,
    showCalendrier:showCalendrier,
    deleteCalendrier:deleteCalendrier,
    addCalendrier:addCalendrier,
    updateCalendrier:updateCalendrier,
    showCommentaire:showCommentaire,
    selectById:selectById
}