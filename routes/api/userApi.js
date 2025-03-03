const express = require('express')
const router = express.Router()
const userController = require('../../controllers/userController')

// 회원가입
router.post('/register', userController.register);

// 로그인
router.post('/login', userController.login);

// 로그아웃
router.post('/logout', userController.logout);

// 회원탈퇴
router.delete('/delete/:id', userController.deleteUser);

module.exports = router