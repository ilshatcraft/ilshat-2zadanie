import Post from '@models/Post.js'
import * as $ from 'jquery'


import styles from './styles/style.css'
import React from 'react'//нужно для расширения jsx
import { render } from 'react-dom'//нужно для расширения jsx
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


// const App = () => (
//     <div className="back">
//         <div className="container back_ground">ghfhgfh </div>

//         <div className="backcolor">WEEb</div>

//         <pre />
//         <hr />
//     </div>)
// render(<App />, document.getElementById(app))
//console.log('Post to String:', lol.toString() )
