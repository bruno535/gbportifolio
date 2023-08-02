import React from 'react';
import { Link } from 'react-router-dom';
import './Journeys.css'

const Journeys = () => {
    return (
        <div className="journeysContainer">
            <Link to="/" className="back">
                Voltar
            </Link>
            <Link to="/journeys/egito">
                <div className="journeys egito">
                    <p>Egito</p>{' '}
                </div>
            </Link>
            <Link to="/journeys/china">
                <div className="journeys china">
                    <p>China</p>
                </div>
            </Link>
            <Link to="/journeys/mexico">
                <div className="journeys mexico">
                    <p>Mexico</p>
                </div>
            </Link>
        </div>
    );
};

export default Journeys;
