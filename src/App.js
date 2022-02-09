import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { GiBlackFlag } from 'react-icons/gi';


function App() {
  return (
    <div className='mt-5 px-0 mx-0'>
      <div className='row justify-content-around mx-3'>
        <div className='col-lg col-sm-6 team'>
          <div className='d-flex align-items-start'>
            <span>
              Team Name
            </span>
          </div>

          <div className="input-wrapper d-md-flex align-items-center">
            <input type='text' className='w-100 mt-2' placeholder='TEAM NAME' />
            <label htmlFor='files'><i className='p-2 mx-2'
              style={{ fontSize: '35px' }}><GiBlackFlag /></i></label>
            {/* border: "1px solid #0d6efd", borderRadius: '9px' */}
            <input type='file' id="files" className='w-50' style={{ display: 'none' }} />
          </div>

          <div className='btn-wrapper col mt-5'>
            <div className='team'>
              <button className='bg-primary p-2 w-100'>
                <h2>Run</h2>
                <span>+1</span>
              </button>
            </div>
            <div className='mt-5 team d-flex justify-content-between'>
              <button className='bg-danger small-btn p-2 mx-2 w-50'>
                <h2>Penalty</h2>
                <span>-1</span>
              </button>
              <button className='bg-warning small-btn p-2 mx-2 w-50'>
                <h2>Extra run</h2>
                <span>+1</span>
              </button>
            </div>
            <div className='mt-5 team d-flex justify-content-between'>
              <button className='bg-success small-btn p-2 mx-2 w-50'>
                <h2>Hit Boundary</h2>
                <span>+4</span>
              </button>
              <button className='bg-success small-btn p-2 mx-2 w-50'>
                <h2>Over Boundary</h2>
                <span>+6</span>
              </button>
            </div>
          </div>
        </div>
        <div className='col-lg col-sm-6 mx-4 my-4 settings'>
          <div className='col d-flex flex-column justify-content-end '>
            <button className='btn scoreboard-toggle '>SHOW/HIDE SCOREBOARD</button>
            <div className='setting-inputs d-md-flex mt-5 align-items-end'>
              <div className='mx-1 my-4'>
                <label>Player Name</label>
                <input style={{ width: '150px' }} type="text" />
              </div>
              <div className='mx-1 my-4'>
                <label>Number</label>
                <input type="number" />
              </div>
              <div className='mx-1 my-4'>
                <label>Select Team</label>
                <select>
                  <option>Team A</option>
                  <option>Team B</option>
                </select>
              </div>
              <div className='mx-1 my-4'>
                <button className='bg-primary settings-btn'>Add Batter</button>
              </div>
            </div>
            <div className='setting-inputs d-md-flex mt-3 align-items-end'>
              <div className='mx-1 my-4'>
                <label>Player Name</label>
                <input style={{ width: '150px' }} type="text" />
              </div>
              <div className='mx-1 my-4'>
                <label>Number</label>
                <input type="number" />
              </div>
              <div className='mx-1 my-4'>
                <label>Select Team</label>
                <select>
                  <option>Team A</option>
                  <option>Team B</option>
                </select>
              </div>
              <div className='mx-1 my-4'>
                <button className='bg-primary settings-btn'>Add Bowler</button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg col-sm-6 mb-5 team'>

          <div className='d-flex align-items-start'>
            <span>
              Team Name
            </span>
          </div>

          <div className="input-wrapper d-flex align-items-center">
            <input type='text' className='w-100 mt-2' placeholder='TEAM NAME' />
            <label htmlFor='files'><i className='p-2 mx-2'
              style={{ fontSize: '35px' }}><GiBlackFlag /></i></label>
            {/* border: "1px solid #0d6efd", borderRadius: '9px' */}
            <input type='file' id="files" className='w-50' style={{ display: 'none' }} />
          </div>

          <div className='btn-wrapper col mt-5'>
            <div className='team'>
              <button className='bg-primary p-2 w-100'>
                <h2>Run</h2>
                <span>+1</span>
              </button>
            </div>
            <div className='mt-5 team d-flex justify-content-between'>
              <button className='bg-danger small-btn p-2 mx-2 w-50'>
                <h2>Penalty</h2>
                <span>-1</span>
              </button>
              <button className='bg-warning small-btn p-2 mx-2 w-50'>
                <h2>Extra run</h2>
                <span>+1</span>
              </button>
            </div>
            <div className='mt-5 team d-flex justify-content-between'>
              <button className='bg-success small-btn p-2 mx-2 w-50'>
                <h2>Hit Boundary</h2>
                <span>+4</span>
              </button>
              <button className='bg-success small-btn p-2 mx-2 w-50'>
                <h2>Over Boundary</h2>
                <span>+6</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
