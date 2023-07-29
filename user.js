const UsersAssessment= require("UsersAssessment");
const products=require("./users.json");

const router =express.Router();
// get all products
router.get("/getAllProducts",(_req,res) =>{
    try{
        res.status(200).send({
            responseCode:"96",
            responseMessage:"product fetched successfully",
            data:products
        })
    }catch (error){
     res.status(500).send({
       responseCode:"96",
       responseMessage:"error" + error,
        data:null,
});
}
})
module.exports.router =router