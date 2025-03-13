import React from "react";


const Counter = (props) => {
    return (
        <div className="text-center d-flex justify-content-center">
            <div className="row">
                <div className="col"><p>{Math.floor(props.seconds / 10000) % 10}</p></div>

                <div className="col"><p>{Math.floor(props.seconds / 1000) % 10}</p></div>

                <div className="col"><p>{Math.floor(props.seconds / 100) % 10}</p></div>

                <div className="col"><p>{Math.floor(props.seconds / 10) % 10}</p></div>

                <div className="col"><p>{Math.floor(props.seconds) % 10}</p></div>

            </div>
        </div>
    );
};

export default Counter;