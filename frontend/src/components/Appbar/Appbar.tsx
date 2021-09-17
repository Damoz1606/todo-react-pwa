import React from 'react'
import './Appbar.css';

function Appbar() {
    return (
        <div className="navbar is-fixed-top py-1 px-3" role="navigation" aria-label="main navigation">
            <div className="is-flex is-flex-direction-row is-justify-content-space-around">
                <h4>TODO App</h4>
                {/* <div className="is-flex is-flex-direction-row start">
                    <a className="navbar-item"><span className="material-icons">menu</span></a>
                </div>
                <div className="is-flex is-flex-direction-row end">
                    <a className="navbar-item"><span className="material-icons-outlined">search</span></a>
                    <a className="navbar-item"><span className="material-icons-outlined">notifications</span></a>
                </div> */}
            </div>

        </div>
    )
}

export default Appbar
