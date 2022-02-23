import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiBlackFlag } from 'react-icons/gi';
import ScoreBoard from './components/ScoreBoard';
import { useEffect, useState } from 'react';

function App() {

  const [homeTeam,
    setHomeTeam] = useState({
      name: "",
      flag: "",
      runs: 0,
      overs: 0,
      previousRuns: [],
      runsToWin: 120,
      batter: {
        name: "",
        number: ""
      },
      bowler: {
        name: "",
        number: ""
      }
    });
  const [awayTeam,
    setAwayTeam] = useState({
      name: "",
      flag: "",
      runs: 0,
      overs: 0,
      previousRuns: [],
      runsToWin: 120,
      batter: {
        name: "",
        number: ""
      },
      bowler: {
        name: "",
        number: ""
      }
    });

  const [displayScoreboard,
    setDisplayScoreboard] = useState(false);

  const handleRuns = (e, run, incr, runType, home) => {
    e.preventDefault();
    // Checks what team is playing
    if (home) {
      // Checks if we increment the runs
      if (incr) {
        setHomeTeam({
          ...homeTeam,
          runs: homeTeam.runs + Number(run),
          previousRuns: [
            ...homeTeam.previousRuns,
            runType
          ],
          runsToWin: homeTeam.runsToWin - Number(run),
          // Add an over for every 6 runs
          overs: homeTeam.runs % 6 === 0 && homeTeam.runs > 0
            ? homeTeam.overs + 1
            : homeTeam.overs
        })
        // Deduces penalty points and prevent the runs to go negative
      } else if (homeTeam.runs > 0) {
        console.log("PENALTY!")
        setHomeTeam({
          ...homeTeam,
          runs: homeTeam.runs - Number(run),
          runsToWin: homeTeam.runsToWin + Number(run)
        })
      }
    } else {
      // Checks if we increment the runs
      return incr
        ? setAwayTeam({
          ...awayTeam,
          runs: awayTeam.runs + Number(run),
          previousRuns: [
            ...awayTeam.previousRuns,
            runType
          ],
          runsToWin: awayTeam.runsToWin - Number(run),
          // Add an over for every 6 runs
          overs: awayTeam.runs % 6 === 0 && awayTeam.runs > 0
            ? awayTeam.overs + 1
            : awayTeam.overs
        })
        // Deduces penalty points and prevent the runs to go negative
        : awayTeam.runs > 0
          ? setAwayTeam({
            ...awayTeam,
            runs: awayTeam.runs - Number(run),
            runsToWin: awayTeam.runsToWin + Number(run)
          })
          : ''

    }
  }

  const handleTeamName = (e, home, value) => {
    home
      ? setHomeTeam({
        ...homeTeam,
        name: value
      })
      : setAwayTeam({
        ...awayTeam,
        name: value
      })
  }
  const handleBatter = (e) => {
    e.preventDefault();

    const name = e.target.playerName.value
    const number = e.target.playerNumber.value
    const team = e.target.team.value
    console.log(name, number, team)

    if (team === homeTeam.name && team !== "") {
      setHomeTeam({ ...homeTeam, batter: { ...homeTeam.batter, name, number } })
      console.log("home")
    }
    else if (team === awayTeam.name && team !== "") {
      setAwayTeam({ ...awayTeam, batter: { ...awayTeam.batter, name, number } })
      console.log("away");
    } else if (team === "") {
      console.log('insert team name!')
    }
  }

  const handleBowler = (e) => {
    e.preventDefault();
    const name = e.target.playerName.value
    const number = e.target.playerNumber.value
    const team = e.target.team.value

    if (team === homeTeam.name && team !== "") {
      setHomeTeam({ ...homeTeam, bowler: { ...homeTeam.bowler, name, number } })
    }
    else if (team === awayTeam.name && team !== "") {
      setAwayTeam({ ...awayTeam, bowler: { ...awayTeam.bowler, name, number } })
    } else if (team === "") {
      console.log('insert team name!')
    }
  }

  const onNumberChange = (e) => {
    return e.target.value <= 0
      ? (e.target.value = 1)
      : e.target.value
  }

  const showScoreboard = (e) => {
    e.preventDefault();
    setDisplayScoreboard(!displayScoreboard)
  }

  return (
    <div className='mt-5 px-0 mx-0'>
      <div className='layout row justify-content-center'>
        <div className='col-lg col-sm-6 team-wrap pe-1'>
          <div className='d-flex align-items-start'>
            <span>
              Home Team
            </span>
          </div>

          <div className="input-wrapper d-md-flex align-items-center justify-content-start">
            <input
              onChange={(e) => handleTeamName(e, true, e.currentTarget.value)}
              type='text'
              className='w-100 mt-2'
              placeholder='TEAM NAME' />
            <label htmlFor='files'>
              <i
                className='p-1 '
                style={{
                  fontSize: '35px'
                }}><GiBlackFlag /></i>
            </label>
            <input
              type='file'
              id="files"
              className='w-50'
              style={{
                display: 'none'
              }} />
          </div>

          <div className='btn-wrapper col mt-5'>
            <div className='team'>
              <button
                onClick={(e) => handleRuns(e, 1, true, "Run", true, true)}
                className='bg-primary p-2 w-100'>
                <h2>Run</h2>
                <span>+1</span>
              </button>
            </div>
            <div className='mt-5 team d-flex justify-content-between'>
              <button
                onClick={(e) => handleRuns(e, 1, false, "Penalty", true, true)}
                className='bg-danger small-btn p-2 me-1 w-50'>
                <h2>Penalty</h2>
                <span>-1</span>
              </button>
              <button
                onClick={(e) => handleRuns(e, 1, true, "Extra Run", true, true)}
                className='bg-warning small-btn p-2 w-50'>
                <h2>Extra run</h2>
                <span>+1</span>
              </button>
            </div>
            <div className='mt-5 team d-flex justify-content-between'>
              <button
                onClick={(e) => handleRuns(e, 4, true, "Hit Boundary", true, true)}
                className='me-1 bg-success small-btn p-2 w-50'>
                <h2>Hit Boundary</h2>
                <span>+4</span>
              </button>
              <button
                onClick={(e) => handleRuns(e, 6, true, "Over Boundary", true, true)}
                className='bg-success small-btn p-2 w-50'>
                <h2>Over Boundary</h2>
                <span>+6</span>
              </button>
            </div>
          </div>
        </div>
        <div className='col-lg col-sm-6 team-wrap ps-1'>
          <div className='d-flex align-items-start'>
            <span>
              Away Team
            </span>
          </div>

          <div className="input-wrapper d-md-flex align-items-center justify-content-start">
            <input
              onChange={(e) => handleTeamName(e, false, e.currentTarget.value)}
              type='text'
              className='w-100 mt-2'
              placeholder='TEAM NAME' />
            <label htmlFor='files'>
              <i
                className='p-1 '
                style={{
                  fontSize: '35px'
                }}><GiBlackFlag /></i>
            </label>
            <input
              type='file'
              id="files"
              className='w-50'
              style={{
                display: 'none'
              }} />
          </div>

          <div className='btn-wrapper col mt-5'>
            <div className='team'>
              <button
                onClick={(e) => handleRuns(e, 1, true, "Run", false)}
                className='bg-primary p-2 w-100'>
                <h2>Run</h2>
                <span>+1</span>
              </button>
            </div>
            <div className='mt-5 team d-flex justify-content-between'>
              <button
                onClick={(e) => handleRuns(e, 1, false, "Penalty", false)}
                className='bg-danger small-btn p-2 me-1 w-50'>
                <h2>Penalty</h2>
                <span>-1</span>
              </button>
              <button
                onClick={(e) => handleRuns(e, 1, true, "Extra Run", false)}
                className='bg-warning small-btn p-2 w-50'>
                <h2>Extra run</h2>
                <span>+1</span>
              </button>
            </div>
            <div className='mt-5 team d-flex justify-content-between'>
              <button
                onClick={(e) => handleRuns(e, 4, true, "Hit Boundary", false)}
                className='bg-success me-1 small-btn p-2 w-50'>
                <h2>Hit Boundary</h2>
                <span>+4</span>
              </button>
              <button
                onClick={(e) => handleRuns(e, 6, true, "Over Boundary", false)}
                className='bg-success small-btn p-2 w-50'>
                <h2>Over Boundary</h2>
                <span>+6</span>
              </button>
            </div>
          </div>
        </div>
        <div className='col-lg col-sm-6 mx-4 my-4 settings'>
          <div className='col d-flex flex-column align-items-center'>
            <button onClick={(e) => showScoreboard(e)} className='btn scoreboard-toggle'>SHOW/HIDE SCOREBOARD</button>
            <form onSubmit={handleBatter} className='d-flex mt-5 align-items-center'>
              <div className='d-flex flex-column mx-1 my-4'>
                <label className='mb-2'>Player Name</label>
                <input
                  name="playerName"
                  id="playerName"

                  style={{
                    width: '150px'
                  }}
                  type="text" />
              </div>
              <div className='d-flex flex-column mx-1 my-4'>
                <label className='mb-2'>Number</label>
                <input name="playerNumber" id="playerNumber" onChange={(e) => onNumberChange(e)} type="number" />
              </div>
              <div className='d-flex flex-column mx-1 my-4'>
                <label className='mb-2'>Team</label>
                <select name='team' id='team' defaultValue={homeTeam.name}>
                  {homeTeam.name && awayTeam.name ?
                    <>
                      <option>{homeTeam.name}</option>
                      <option>{awayTeam.name}</option>
                    </>
                    : <option disabled>No team names</option>}
                </select>
              </div>
              <div className='d-flex flex-column mx-1 my-4'>
                <button type='submit' className='bg-primary settings-btn mb-2'>Add Batter</button>
              </div>
            </form>
            <form onSubmit={handleBowler} className='d-flex mt-3 align-items-center'>
              <div className='d-flex flex-column mx-1 my-4'>
                <label className='mb-2'>Player Name</label>
                <input
                  name="playerName"
                  id="playerName"
                  style={{
                    width: '150px'
                  }}
                  type="text" />
              </div>
              <div className='d-flex flex-column mx-1 my-4'>
                <label className='mb-2'>Number</label>
                <input onChange={(e) => onNumberChange(e)} name="playerNumber" id="playerNumber" type="number" />
              </div>
              <div className='d-flex flex-column mx-1 my-4'>
                <label className='mb-2'>Team</label>
                <select name='team' id='team' defaultValue={homeTeam.name}>
                  {homeTeam.name && awayTeam.name ?
                    <>
                      <option>{homeTeam.name}</option>
                      <option>{awayTeam.name}</option>
                    </>
                    : <option disabled>No team names</option>}
                </select>
              </div>
              <div className='d-flex flex-column mx-1 my-4'>
                <button className='bg-primary settings-btn mb-2'>Add Bowler</button>
              </div>
            </form>
          </div>
        </div>

      </div>

      {displayScoreboard
        ? <ScoreBoard homeTeam={homeTeam} awayTeam={awayTeam} />
        : ''}
    </div>
  );
}

export default App;
