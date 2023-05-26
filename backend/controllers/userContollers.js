import asyncHandler from 'express-async-handler'

//@dec   Auth user/set token
//route  Post /api/users/auth
//access Public

const authUser = asyncHandler (async(req, res) => {
  res.status(200).json({ message: "Auth User" });
});


//@dec   Register a new user
//route  Post /api/users
//access Public

const registerUser = asyncHandler (async(req, res) => {
  res.status(200).json({ message: "Register User" });
});

//@dec    Logout user
//route  Post /api/users/logout
//access Public

const logoutUser = asyncHandler (async(req, res) => {
  res.status(200).json({ message: "Logout User" });
});

//@dec    Get user profile
//route  GET /api/users/profile
//access Private

const getUserProfile = asyncHandler (async(req, res) => {
  res.status(200).json({ message: "User profile" });
});

//@dec    Update user profile
//route  PUT /api/users/logout
//access Private

const updateUserProfile = asyncHandler (async(req, res) => {
  res.status(200).json({ message: "Update User profile" });
});

export { 
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile
};
