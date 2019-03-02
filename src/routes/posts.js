const wz = require('wajez-api')
const {auth} = require('../middlewares')
const {Post, relations} = require('../models')

module.exports = wz.resource(Post, {relations})