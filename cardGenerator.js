import React, { Component } from 'react';
import '../styles/App.css';


const handlegeneratecard = (e) => {
  e.preventDefault()
  document.getElementById('viewcard').innerHTML = Math.floor(Math.random() * 1000000000000)
}

export default class SideBar extends Component {
  state = {
    
  }

  
  render () {
    return (
      <div >
        <aside id = 'sidenav'>
        <h2 id= 'sidecontent ' style = {{color: 'green', boxShadow: '0px 5px 5px 2px rgb(12, 12, 12)'
        }}>DASHBOARD</h2>
        <a href = ''><h4>#100 VAT</h4></a>
        <a href = ''><h4>#200 VAT</h4></a>
        <a href = ''><h4>#500 VAT</h4></a>
        <a href = ''><h4>#750 VAT</h4></a>
        <a href = ''><h4>#1500 VAT</h4></a>
        <h3 id= 'sidecontent ' style = {{color: 'green', boxShadow: '0px 5px 5px 2px rgb(12, 12, 12)'
        }}>TARRIF BONUS</h3>
        <a href = ''><h4>EasyOn</h4></a>
        <a href = ''><h4>TalkDTalk</h4></a>
        <a href = ''><h4>FamilyAndFriends</h4></a>
        <a href = ''><h4>Y'ElloTime</h4></a>
        <a href = ''><h4>PayLater</h4></a>
        </aside>
        <div id = 'view'>
        <h3>RECHARGE CARD GENERATOR</h3>
        
        <div id = 'viewcard'><div id = 'viewcard1'></div></div>
        <div id = 'buttons'>
        <button id = 'btn1' >On</button>
        <button id = 'btn2'>Off</button>
        <button id = 'btn3' name = 'gencode' disabled = {true} onClick = {handlegeneratecard}>Generate Card</button>
        <button id = 'btn4'>View Cards</button>
        <button id = 'btn5'>Print</button>
        <button id = 'btn6'>Clear</button>
        </div>
        <div id = 'displaycard'></div>
        </div>
      </div>
    )
  }
}