const User = require('../models/users');
const fs = require("fs");
const path = require("path");

module.exports = class API {
    // fetch all users
    static async fetchAllUsers(req, res) {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    static async fetchUserByID(req, res) {
       const id = req.params.id;
       try {
           const user = await User.findById(id);
           res.status(200).json(user);
       } catch (err) {
           res.status(404).json({message: err.message});
       }
    }
    static async UpdateUser(req, res) {
        const id = req.params.id;
        let new_image = '';
        if (req.file) {
            new_image = req.file.filename;
            try {
                fs.unlinkSync('./uploads/'+req.body.old_image);
            } catch (err) {
                console.log(err);
            }
        } else {
            new_image = req.body.old_image;
        }
        const new_user = req.body;
        new_user.image = new_image;
        try {
            await User.findByIdAndUpdate(id, new_user);
            res.status(200).json({message: "Profile Updated"});
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    }
    static async createUser(req, res) {
        const user = req.body;
        if (req.file) user.image =  req.file.filename;
        console.log(user);
        try {
            await User.create(user);
            res.status(201).json({message:'Profile Created'});
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    }
    static async deleteUser(req, res) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json({message: "User Deleted"});
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    }
    static async getPamphlets(req, res) {
        let files = [];
        try {
            fs.readdir('../public/assets/pages/pamphlets', function(err, items) {
                if (err) console.log(err);
                else items.forEach(file => {
                    if (path.extname(file) == ".jpg" || path.extname(file) == ".png") files.unshift(file);
                });
                res.status(200).json(files);
            });
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    }
    static async getPrograms(req, res) {
        let files = [];
        try {
            fs.readdir('../public/assets/pages/programs', function(err, items) {
                if (err) console.log(err);
                else items.forEach(file => {
                    if (path.extname(file) == ".jpg") files.unshift(file);
                });
                res.status(200).json(files);
            });
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    }
}