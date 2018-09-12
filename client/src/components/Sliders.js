import React from 'react';
import img from '../FDIBA_nova_sgrada_template.jpg';
import img1 from '../Biblioteka.jpg';
import img2 from '../Diplomirane.jpg';


class Sliders extends React.Component{
    render(){
        return(
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                {/* <!-- Indicators --> */}
                <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>

                {/* <!-- Wrapper for slides --> */}
                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                    <img src={img} alt=""/>
                    
                    </div>
                    <div className="item">
                    <img src={img1} alt=""/>
                    
                    </div>
                    <div className="item">
                    <img src={img2}alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Sliders;