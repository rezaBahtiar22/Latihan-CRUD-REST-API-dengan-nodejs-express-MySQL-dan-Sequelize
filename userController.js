import User from "../models/userModels.js";

export const getUsers = async (req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getUserById = async (req, res) => {
    try {
        const response = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};


// Method untuk create data, update dan delete 
export const createUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.status(201).json({msg: 'User baru telah dbibuat'});
    } catch (error) {
        console.log(error.message);
    }
};


export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: 'User telah diupdate'});
    } catch (error) {
        console.log(error.message);
    }
};


export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: 'Berhasil menghapus user'});
    } catch (error) {
        console.log(error.message);
    }
};
