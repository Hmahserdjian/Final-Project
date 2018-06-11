const router = require("express").Router();
const researchRoutes = require("./research");


// research routes
router.use("/research", reseacherRoutes);


module.exports = router;