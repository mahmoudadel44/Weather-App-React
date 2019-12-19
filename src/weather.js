import React from 'react';

const Weather = (props) => {
    return (
        <div className="info">
            {
                props.tempreature &&
                
                <p className="info_key"> tempreature: 
               <span classname="info_value"> {props.tempreature}</span>
                </p>
            }

            {
                props.city && 
                <p className="info_key">city:
               <span classname="info_value"> {props.city}</span>
               </p>
            }
            {
                props.country && 
                <p className="info_key"> country:
                <span classname="info_value">{props.country}</span>
                </p>
            }
            {
                props.humidity && 
                <p className="info_key">humidity:
               <span classname="info_value"> {props.humidity}</span>
                </p>
            }
            {
                props.description &&
                 <p className="info_key">description:
                <span classname="info_value"> {props.description}
                </span>
                 </p>
            }
             {
                props.error && 
                <p  className="info_key">error:
                <span classname="info_value">{props.error}
                </span>
                </p>
            }
        </div>

    );
}
export default Weather;

