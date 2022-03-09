import React from 'react'
import Scoreboard1 from './svgs/Scoreboard1'
import Scoreboard2 from './svgs/Scoreboard2'
import Scoreboard3 from './svgs/Scoreboard3'

export default function ScoreBoard(props) {
    const { homeTeam, awayTeam, overs, selectedScoreboard } = props


    const lastRunsHome = homeTeam.previousRuns.slice(1).slice(-5)
    const lastRunsAway = awayTeam.previousRuns.slice(1).slice(-5)

    const homeRuns = lastRunsHome.map(e =>
        e === "Run" ? e = 1
            : e === "Extra Run" ? e = 1
                : e === "Hit Boundary" ? e = 4
                    : e === "Over Boundary" ? e = 6
                        : e)
    const awayRuns = lastRunsAway.map(e =>
        e === "Run" ? e = 1
            : e === "Extra Run" ? e = 1
                : e === "Hit Boundary" ? e = 4
                    : e === "Over Boundary" ? e = 6
                        : e)

    return (
        <div className='container mt-0 p-0 d-flex flex-column align-items-center justify-content-center'>
            {selectedScoreboard % 3 === 0 ?
                <Scoreboard3 homeTeam={homeTeam} awayTeam={awayTeam} overs={overs} runs={homeRuns} />
                : selectedScoreboard % 3 === 1 ?
                    <Scoreboard1 homeTeam={homeTeam} awayTeam={awayTeam} overs={overs} runs={homeRuns} lastRunsAway={awayRuns} />
                    : selectedScoreboard % 3 === 2 ?
                        <Scoreboard2 homeTeam={homeTeam} awayTeam={awayTeam} />
                        : <Scoreboard3 homeTeam={homeTeam} awayTeam={awayTeam} overs={overs} runs={homeRuns} />
            }
        </div>

    )
}
