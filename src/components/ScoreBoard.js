import React from 'react'
import Scoreboard3 from './svgs/Scoreboard3'

export default function ScoreBoard(props) {
    const { homeTeam, awayTeam } = props
    const lastRunsHome = homeTeam.previousRuns.slice(1).slice(-5)
    const lastRunsAway = awayTeam.previousRuns.slice(1).slice(-5)

    console.log("home: ", homeTeam.batter)
    console.log("away: ", awayTeam.batter)
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h2>Home Batter :{homeTeam.batter.name}</h2>
                    <h6>{homeTeam.batter.number}</h6>
                    <h6>{homeTeam.batter.team}</h6>
                    <h2>Home Bowler :{homeTeam.bowler.name}</h2>
                    <h6>{homeTeam.bowler.number}</h6>
                    <h6>{homeTeam.bowler.team}</h6>
                </div>
                <div className='col'>
                    <h2>Away Batter :{awayTeam.batter.name}</h2>
                    <h6>{awayTeam.batter.number}</h6>
                    <h6>{awayTeam.batter.team}</h6>
                    <h2>Away Bowler :{awayTeam.bowler.name}</h2>
                    <h6>{awayTeam.bowler.number}</h6>
                    <h6>{awayTeam.bowler.team}</h6>
                </div>

            </div>
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
