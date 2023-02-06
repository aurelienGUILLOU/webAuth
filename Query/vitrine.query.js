const selectAll = "SELECT * FROM prestataires";
const selectById = "SELECT prestataires.*, stands.libelleStand, calendrier.*, categoriePrestations.libelleCategorie "+
"FROM prestataires "+
"INNER JOIN calendrier ON calendrier.idPrestataire = prestataires.idPrestataire "+
"INNER JOIN situe ON situe.idPrestataire = prestataires.idPrestataire "+
"INNER JOIN stands ON stands.idStand = situe.idStand "+
"INNER JOIN categoriePrestations ON categoriePrestations.idCategorie = prestataires.idCategorie "+
"WHERE prestataires.idPrestataire = $1";
const selectEmplacement = "SELECT * FROM stands";
const selectStand = "SELECT * FROM stands WHERE idstand = $1";
const selectCategories = "SELECT * FROM categorieprestations";
const selectCategoryByID = "SELECT * FROM prestataires INNER JOIN categorieprestations c on c.idcategorie = prestataires.idcategorie WHERE prestataires.idcategorie = $1";
const showCalendar = "SELECT * FROM calendrier";
const addCommentaire = "INSERT INTO livreDOr ( nom, prenom, commentaire, idPrestataire) VALUES ($1, $2, $3, $4)";
const showCommentaire= "SELECT * FROM livreDOr WHERE idPrestataire = $1";


module.exports= {selectAll, selectById, selectEmplacement, selectStand, selectCategories, selectCategoryByID, showCalendar, addCommentaire, showCommentaire}