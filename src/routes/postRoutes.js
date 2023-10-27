const express = require("express");

const postController = require("../controllers/postsController");

const router = express.Router();

router.post("/duvidas-frequentes", postController.createPost);
router.get("/duvidas-frequentes", postController.findAllPosts);
router.put("/duvidas-frequentes", postController.updatePost);
router.delete("/duvidas-frequentes", postController.deletePost);
// router.get("/duvidas-frequentes", postController.createPost);

module.exports = router;