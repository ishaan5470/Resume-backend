const express=require("express");
const router=express.Router();
const admin_route=express();
const {getAllProducts,getAllProductsTesting}=require("../controllers/products")
router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
//router.route("/export-user-pdf").get(exportUserPdf);

module.exports=router;