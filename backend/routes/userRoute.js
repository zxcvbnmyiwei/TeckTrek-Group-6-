const express = require('express')
const { getSelectedUser } = require('../controller/userController')

const router = express.Router()

router.get("/:username", getSelectedUser)


module.exports = router