import { useState } from 'react'
function App(){
  return(
<div>
  <h1>MOVIE SEARCHING APPLICATION</h1>
  <form>
    <label>Movie name</label>
    <br/><br/>
    <label>Movie type</label>
    <br/><br/>
    <label>language</label>
    <option>"English"</option>
    <option>"Tamil"</option>
    <button>submit</button>
    <button>restart</button>
  </form>
</div>
  );
}
export default App
