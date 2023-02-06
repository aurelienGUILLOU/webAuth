const selectPrestataireById = "SELECT * FROM prestataires WHERE idprestataire = $1";
const editPrestataire = "UPDATE prestataires SET textePrestataire = $1, imagePrestataire = $2 WHERE idPrestataire = $3;"
const livreDor = "INSERT INTO livreDOr ( nom, prenom, commentaire, idPrestataire) VALUES ($1, $2, $3, $4)";
const selectUserByName = "SELECT * FROM utilisateurs WHERE nom = $1";
const addCalendar ="INSERT INTO calendrier(debut, fin, idPrestataire, idStand) VALUES ($1,$2, $3, $4)";
const showCalendar = "SELECT * FROM calendrier";
const updateCalendar = "UPDATE calendrier SET debut = $1, fin = $2 WHERE idPrestataire = $3 AND idStand = $4 and debut = $5 and fin = $6";
const deleteCalendar = "DELETE FROM calendrier WHERE debut = $1 AND fin = $2 AND idPrestataire = $3 AND idStand = $4";
const showCommentaire= "SELECT * FROM livreDOr WHERE idPrestataire = $1";

module.exports= {showCommentaire,addCalendar, showCalendar, deleteCalendar, updateCalendar, selectPrestataireById, editPrestataire, livreDor, selectUserByName}