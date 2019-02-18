import React from 'react'

import Navigation from './components/Navigation'
import List from './components/List'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			page: 0,
			loading: true,
			pokemon: [],
			currentPokemon: {},
			next: null,
			previous: null,
		}
	}

	changePage = async (event, page) => {
		const button = event.target.id

		console.log(button)
		console.log(page)

		await this.setState({ loading: true })

		let response
		let result

		if (page !== undefined) {
			response = await fetch(
				`https://pokeapi.co/api/v2/pokemon?offset=${20 * page}&limit=20`
			)
			result = await response.json()

			console.log(result)

			await this.setState({
				pokemon: result.results,
				next: result.next,
				previous: result.previous,
				page,
				loading: false,
			})
		} else {
			switch (button) {
				case 'next':
					response = await fetch(this.state.next)
					result = await response.json()

					await this.setState({
						pokemon: result.results,
						next: result.next,
						previous: result.previous,
						page: this.state.page + 1,
						loading: false,
					})

					break
				case 'previous':
					response = await fetch(this.state.previous)
					result = await response.json()

					await this.setState({
						pokemon: result.results,
						next: result.next,
						previous: result.previous,
						page: this.state.page - 1,
						loading: false,
					})

					break
			}
		}
	}

	changeFocusedPokemon = data => {
		this.setState({
			currentPokemon: data,
		})
	}

	componentDidMount = async () => {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
		const result = await response.json()

		const request = await fetch('https://pokeapi.co/api/v2/pokemon/1/')
		const bulbasaur = await request.json()

		this.setState({
			pokemon: result.results,
			next: result.next,
			previous: result.previous,
			loading: false,
			currentPokemon: bulbasaur,
		})
	}

	render() {
		return (
			<div id="app" className="app">
				<header className="header">
					<h1 className="page-title">Pokédex</h1>
					<Navigation
						changePage={this.changePage}
						next={this.state.next}
						previous={this.state.previous}
						page={this.state.page}
					/>
				</header>
				{this.state.loading ? (
					<div className="loading-box">
						<img
							src="../src/assets/icons/pokeball.svg"
							className="loading-icon"
						/>
					</div>
				) : (
					<section className="main-section">
						<List
							pokemonList={this.state.pokemon}
							changePokemon={this.changeFocusedPokemon}
							currentPokemon={this.state.currentPokemon}
						/>
					</section>
				)}
				<footer className="footer" />
			</div>
		)
	}
}

export default App
