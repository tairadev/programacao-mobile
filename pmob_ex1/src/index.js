import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import img1 from './images/img1.jpg';

const App = () => {

  const style_div_01 = {
    margin: 'auto', 
    width: 900, 
    backgroundColor: '#EEE111', 
    padding: 12,
    paddingTop: 32,
    borderRadius: 8,
    border: '1px solid #000000',
    textAlign: 'center'
  }

  const style_lavel_01 = {
    fontWeight: 'bold',
    fontSize: 18,
  }

  const img_01 = "Rua 1"
  const img_02 = "Rua 2"
  const img_03 = "Rua 3"

  return (
    <div style = {style_div_01}>
      <text style = {style_lavel_01}>Profissionais da Saúde</text>
      <div style = {{ margin: 'auto', marginTop: 12, backgroundColor: '#EEE111', 
                      padding: 12, borderRadius: 2, border: '1px solid #000000',
                      display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>

        <div class='style'>
          <img src={img1} alt="img1" style={{width: 100}}/>
          <text style={{marginTop: 10}}>{img_01}</text>
        </div>
        <div class='style' >
          <img src={process.env.PUBLIC_URL + '/img2.jpg'} alt="img02" style={{width: 100}}/>
          <text style={{marginTop: 10}}>{img_02}</text>
        </div>
        <div class='style' >
          <img src="https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="img03" style={{width: 100}}/>
          <text style={{marginTop: 10}}>{img_03}</text>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)