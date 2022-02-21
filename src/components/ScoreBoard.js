import React from 'react'
import Scoreboard3 from './svgs/Scoreboard3'

export default function ScoreBoard(props) {
    const { homeTeam, awayTeam } = props
    const lastRunsHome = homeTeam.previousRuns.slice(1).slice(-5)
    const lastRunsAway = awayTeam.previousRuns.slice(1).slice(-5)


    return (
        <div className='container'>
            {console.log(homeTeam, awayTeam)}

            <Scoreboard3 />

            <div className='row text-center justify-content-center'>
                <div className='col team-stats'>
                    <h2>HOME: {homeTeam.name}</h2>
                    <div>RUNS : {homeTeam.runs}</div>
                    <div>Overs : {homeTeam.overs} </div>
                    <div>Previous Runs : {lastRunsHome.map(e => e)} </div>
                    <div>Flag path : {homeTeam.path} </div>
                    <div>Runs To Win : {homeTeam.runsToWin} </div>
                </div>
                <div className='col team-stats'>
                    <h2>AWAY : {awayTeam.name} </h2>
                    <div>RUNS : {awayTeam.runs}</div>
                    <div>Overs : {awayTeam.overs} </div>
                    <div>Previous Runs : {lastRunsAway.map(e => e)} </div>
                    <div>Flag path : {awayTeam.path} </div>
                    <div>Runs To Win : {awayTeam.runsToWin} </div>
                </div>
            </div>
        </div>

    )
}
