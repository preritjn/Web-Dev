import { useEffect } from 'react'
import circle_icon from './Assets/circle.png'
import cross_icon from './Assets/cross.png'

export default function TicTacToe() {  

  let data = ["", "", "", "", "", "", "", "", ""]
  

  useEffect(()=>{
    toggle()  
  })

  const toggle = () => {
    let count = 0
    let turn = "X"
    let boxes = document.querySelectorAll(".box")
    boxes.forEach((box,index) => {
      box.addEventListener("click", () => {
        if(box.innerHTML === "" && turn === "X") {
          box.innerHTML = `<img src=${cross_icon} alt="cross"/>`
          data[index] = turn
          turn = "O"
        } 
        else if(box.innerHTML === "" && turn === "O") {
          box.innerHTML = `<img src=${circle_icon} alt="circle"/>`
          data[index] = turn
          turn = "X"
        }
        count++
        if(count >= 5) {
          setTimeout(() => checkWinner(),500)
        }
      })
    })
  }

  const checkWinner =() => {
    let row1 = data[0] + data[1] + data[2]
    let row2 = data[3] + data[4] + data[5]
    let row3 = data[6] + data[7] + data[8]
    let col1 = data[0] + data[3] + data[6]
    let col2 = data[1] + data[4] + data[7]
    let col3 = data[2] + data[5] + data[8]
    let diag1 = data[0] + data[4] + data[8]
    let diag2 = data[2] + data[4] + data[6]
    let lines = [row1, row2, row3, col1, col2, col3, diag1, diag2]
    console.log(lines);
    lines.forEach((line) => {
      if(line === "XXX") {
        alert('Cross won')
        resetGame()
      } else if(line === "OOO") {
        alert("Circle Won")
        resetGame()
      }
    })
  }

  const resetGame = () => {
    window.location.reload()
  }

  return(
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        <div className="row1">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <div className="row2">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <div className="row3">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
      <button className="btn" onClick={() => resetGame()}>Reset</button>
    </div>
  )
}