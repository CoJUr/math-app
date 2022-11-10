import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Styles from './MathComponent.module.css'

function Math({ num1, num2 }) {
	const [userAnswer, setUserAnswer] = useState()
	const [answer, setAnswer] = useState()

	const getCorrectAnswer = async () => {
		await axios.get(`https://api.mathjs.org/v4/?expr=${num1}%2B${num2}`)
		.then(res => {
			setAnswer(res.data)
		})
	}
	
	useEffect(() => {
		getCorrectAnswer()
	}, [])

	const checkAnswer = (e) => {
		e.preventDefault()
		if (userAnswer == answer) {
			alert('Correct answer!')
		} else {
			alert('Incorrect answer! Try again.')
		}
	}

	const resetGame = () => {
		window.location.reload()
	}

	return (
		<>
			<div className={Styles.container}>
			<h1>Math Game</h1>
			<h2>{num1} + {num2} = ?</h2>
			<input className={Styles.numberInput} type="number" onChange={(e) => setUserAnswer(e.target.value)} />
			<button className={Styles.submitButton} onClick={(e) => checkAnswer(e)}>Submit Answer</button>
			<button className={Styles.resetButton} onClick={(e) => resetGame(e)}>Reset</button>
			</div>
		</>
	)
}

export default Math