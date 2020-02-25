const express = require('express')
const router = express.Router() 
const User = require ('../models/User')
const Orders = require ('../models/Orders')
const passport = require ('../config/passport')

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' })
}

router.post('/signup', (req, res) =>{
  User.register(req.body, req.body.password)
    .then(user => res.status(201).json({ user }))
    .catch(err => res.status (500).json ({ err }))
})

router.post('/login', passport.authenticate('local'), async (req, res)=>{
  const {_id} = req.user
  const user = await User.findById(_id)
  res.status(200).json({ user })
})

router.post('/logout', (req, res) =>{
  req.logOut()
  res.status(200).json({ message: 'User is logged out' })
})

router.post('/profile', isAuth, (req, res)=>{
  User.findById(req.user._id)
  .populate('Pedidos')
  .then(user => res.status(200).json({ user }))
  .catch(user => res.status(500).json({ msg: 'Something went wrong' }))
})



module.exports = router