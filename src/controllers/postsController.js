const { response } = require("express");
const Post = require("../model/Post");

module.exports = {
    async createPost (req, res) {
        const {title , description} = req.body

        const post = await Post.create({
            title,
            description
        });

        return res.json(post);
    },

    async findAllPosts (req, res) {
        const posts = await Post.findAll({ raw: true });

        return res.json(posts);
    },

    async findPost(req, res) {
        const { id } = req.params

        const post = await Post.findOne({ where: {id} });

        return res.json(post);
    },

    async updatePost(req, res)  {
        const { id } = req.params;
        const { title, description } = req.body;
        const post = await Post.update({
            title,
            description
        },
        {
            where: {id}
        }
        );

        return res.json(post);
    },

    async deletePost(req, res) {
        const { id } = req.params;
        const post = await Post.destroy({ where: {id} });

        return res.json({message: "Post deletado"})
    }
};