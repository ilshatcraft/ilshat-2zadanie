import Post from '@models/Post.js'
import * as $ from 'jquery'


import styles from './styles/style.css'

import potato from './assets/potato.png'
//import xml from './assets/data.xml'
//import json from './assets/json.json'
//import csv from './assets/'
import './babel'
import './styles/style.css'
import './styles/less.less'
import './styles/scss.scss'

const lol = new Post('Webpack Post Title', potato)
$('pre').html(lol.toString())
//console.log('Post to String:', lol.toString() )
