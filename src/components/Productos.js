import React from 'react';


const Productos = ({ title, year, description, imageURL, uri, id}) => ( 
    <div class="col mb-4">
        <div className="card h-100">
            <img className="card-img-top" src={imageURL[0].url} alt="Movie Poster" />
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text">{description}</p>
                <div className="text-center mb-3"><a href={uri} className="btn btn-secondary ">Leer mas...</a></div>
            </div>
            <div className="card-footer">
                <small className="text-muted">{year}</small>
            </div>
        </div>
    </div>
     );
 
export default Productos;