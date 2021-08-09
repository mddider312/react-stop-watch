import React from "react"

const Laps = props => {
  return (
    <ul className="list-group list-item-flush">
      {props.laps.map((lap, index) => {
        return (
          <li key={index} className="list-group-item">
            <h4>
              <span className="text-dark">Miniute : </span>
              <span className="text-Danger">{lap.min}</span>
              <span className="text-dark"> Second : </span>
              <span className="text-Danger">{lap.sec}</span>
              <span className="text-dark"> Mili : </span>
              <span className="text-Danger">{lap.mili}</span>
            </h4>
          </li>
        )
      })}
    </ul>
  )
}

export default Laps
