import React from 'react'

import photo1 from '../images/cat-01.png'
import photo2 from '../images/cat-02.png'
import photo3 from '../images/cat-03.png'
import photo4 from '../images/cat-04.png'
import photo5 from '../images/cat-05.png'
import photo6 from '../images/cat-06.png'

var sekiller={
    photo1:photo1,
    photo2:photo2,
    photo3:photo3,
    photo4:photo4,
    photo5:photo5,
    photo6:photo6,
}
const Section2 = () => {
    return (
        <div className="  section2">
            <h2> Shop by Category</h2>
            <div className="commonbox">
                <div className="box">
                    <img src={sekiller.photo1} alt="" />
                        <h5>Bedding</h5>             
                </div>
                <div className="box">
                    <img style={{"paddingLeft":"50px"}} src={sekiller.photo2} alt="" />
                        <h5 style={{"paddingLeft":"8px"}} >Bedding</h5>             
                </div>
                <div className="box">
                    <img src={sekiller.photo3} alt="" />
                        <h5>Bedding</h5>             
                </div>
                <div className="box">
                    <img src={sekiller.photo4} alt="" />
                        <h5>Bedding</h5>             
                </div>
                <div className="box">
                    <img src={sekiller.photo5} alt="" />
                        <h5>Bedding</h5>             
                </div>
                <div className="box">
                    <img src={sekiller.photo6} alt="" />
                        <h5>Bedding</h5>             
                </div>
            </div>
        </div>
    )
}

export default Section2
