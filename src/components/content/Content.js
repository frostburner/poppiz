import React from 'react';
import Gambler from '../database/data.json';
import './content.css';
import Gambler1 from '../../assets/gambler1.webp';
import Gambler2 from '../../assets/gambler2.webp';
import Gambler3 from '../../assets/gambler3.webp';



class Content extends React.Component{
      render(){  
        return(
            
            <section class="details-card">
                <div class="container motherfuker">
                     <div class="row">
            {Gambler.data.map((item, index)=>{
                return(<div class="col-md-4" key={index}>
                <div class="card-content">
                    <div class="card-img">
                        <img src={item.img} alt=""/>
                        
                    </div>
                    <div class ="" >
                    <div class="card-desc">
                        <h3>{item.name}</h3>
                        
                            <a class="btn-card" href={item.desc}>Read</a>   
                            </div>
                    </div>
                </div>
            </div>)
            })}


            
        </div>
    </div>
</section>
    )};
}

export default Content; 