import React from 'react'
import Navbar from './Navbar'
import Section1 from './Section1'
import model3 from './model-3.jpg'
import modelss from './model-s.jpg'
import modely from './model-y.jpg'
import modelx from './model-x.jpg'
import solarpanel from './solar-panel.jpg'
import solarroof from './solar-roof.jpg'
import accessories from './accessories.jpg'


function Tesla() {
  return (
    <>
    <div>
        <Navbar></Navbar>
        <Section1 imgsrc = {model3} title = 'MODEL 3' tag1 = 'CUSTOM ORDER' tag2 = 'EXISTING ORDER'></Section1>
        <Section1 imgsrc = {modely} title = 'MODEL Y' tag1 = 'CUSTOM ORDER' tag2 = 'EXISTING ORDER'></Section1>
        <Section1 imgsrc = {modelss} title = 'MODEL S' tag1 = 'CUSTOM ORDER' tag2 = 'EXISTING ORDER'></Section1>
        <Section1 imgsrc = {modelx} title = 'MODEL X' tag1 = 'CUSTOM ORDER' tag2 = 'EXISTING ORDER'></Section1>
        <Section1 imgsrc = {solarpanel} title = 'SPLAR PANEL' tag1 = 'CUSTOM ORDER' tag2 = 'EXISTING ORDER'></Section1>
        <Section1 imgsrc = {solarroof} title = 'SOLAR ROOF' tag1 = 'CUSTOM ORDER' tag2 = 'EXISTING ORDER'></Section1>
        <Section1 imgsrc = {accessories} title = 'ACCESSORIES' tag1 = 'ORDER NOW' tag2 = 'EXISTING ORDER'></Section1>
        
    
    </div>
    </>
  )
}

export default Tesla