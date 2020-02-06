window.axios = require('axios')

//表頭型態指定
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

window.Vue = require('vue')

window.alertify = require('alertifyjs');