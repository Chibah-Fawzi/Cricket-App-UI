import React from 'react'
import Scoreboard1 from './svgs/Scoreboard1'
import Scoreboard2 from './svgs/Scoreboard2'
import Scoreboard3 from './svgs/Scoreboard3'

export default function ScoreBoard(props) {
    const { homeTeam, awayTeam, overs } = props
    const lastRunsHome = homeTeam.previousRuns.slice(1).slice(-5)
    const lastRunsAway = awayTeam.previousRuns.slice(1).slice(-5)


    // var convertedLastRunsHome;
    // for (let i = 0; i < lastRunsHome.length; i++) {
    //     convertedLastRunsHome = {
    //         run: lastRunsHome[i].toLowerCase() === "run" ? "1" : "",
    //         extra: lastRunsHome[i].toLowerCase() === "extra run" ? "1" : "",
    //         hit_boundary: lastRunsHome[i].toLowerCase() === "hit boundary" ? "4" : "",
    //         over_boundary: lastRunsHome[i].toLowerCase() === "over boundary" ? "6" : "",
    //     }
    // }
    // console.log(convertedLastRunsHome)
    const runs = lastRunsHome.map(e =>
        e === "Run" ? e = 1
            : e === "Extra Run" ? e = 1
                : e === "Hit Boundary" ? e = 4
                    : e === "Over Boundary" ? e = 6
                        : e)

    return (
        <div className='container mt-0 p-0 d-flex flex-column align-items-center justify-content-center'>
            {/* <Scoreboard3 homeTeam={homeTeam} awayTeam={awayTeam} overs={overs} runs={runs} /> */}
            {/* <Scoreboard1 homeTeam={homeTeam} awayTeam={awayTeam} overs={overs} runs={runs} /> */}
            <Scoreboard2 homeTeam={homeTeam} awayTeam={awayTeam} overs={overs} runs={runs} />
            {/* <div className='row'>
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

            <div className='row text-center justify-content-center'>
                <div className='col team-stats'>
                    <h2>HOME: {homeTeam.name}</h2>
                    <div>RUNS : {homeTeam.runs}</div>
                    <div>Overs : {overs} </div>
                    <div>Previous Runs : {lastRunsHome.map(e => e)} </div>
                    <div>Flag path : {homeTeam.path} </div>
                    <div>Runs To Win : {homeTeam.runsToWin} </div>
                </div>
                <div className='col team-stats'>
                    <h2>AWAY : {awayTeam.name} </h2>
                    <div>RUNS : {awayTeam.runs}</div>
                    <div>Overs : {overs} </div>
                    <div>Previous Runs : {lastRunsAway.map(e => e)} </div>
                    <div>Flag path : {awayTeam.path} </div>
                    <div>Runs To Win : {awayTeam.runsToWin} </div>
                </div>
            </div> */}
        </div>

    )
}
