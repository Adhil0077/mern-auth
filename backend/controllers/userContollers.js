import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import genereateToken from "../utils/generateTokens.js";

//@dec   Auth user/set token
//route  Post /api/users/auth
//access Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    genereateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  }else{
    res.status(401)
    throw new Error('Invalid email or password')
  }
});

//@dec   Register a new user
//route  Post /api/users
//access Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email: email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    genereateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@dec    Logout user
//route  Post /api/users/logout
//access Public

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt','',{
    httpOnly:true,
    expires:new Date(0)
  })
  res.status(200).json({ message: " User Loggedout " });
});

//@dec    Get user profile
//route  GET /api/users/profile
//access Private

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile" });
});

//@dec    Update user profile
//route  PUT /api/users/logout
//access Private

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
