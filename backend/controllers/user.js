import User from "../models/User.js";

const getUsers = async (reqq, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(404);
  }
};

const createUser = async (req, res) => {
  try {
    const { userName } = req.body;
    if (userName) {
      const sameUser = await User.find({ userName: userName });

      if (sameUser) {
        res.status(400).send("User already present!");
      } else {
        const user = await User.create({ ...req.body });
        res.status(200).json(user);
      }
    }
  } catch (error) {
    res.send(error);
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true, runValidator: true }
    );
    res.status(200).json(direction);
  } catch (error) {
    res.send(error);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404);
  }
};

export default {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
