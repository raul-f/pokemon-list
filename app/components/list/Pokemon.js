import React from 'react'

import { parseName } from '../../functions'

class Pokemon extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: this.props.data.name,
			url: this.props.data.url,
			loading: true,
		}
	}

	componentDidMount = async () => {
		const response = await fetch(this.state.url)
		const data = await response.json()

		await this.setState({
			...data,
			data,
			loading: false,
		})
	}

	render() {
		return (
			<div
				className="pokemon"
				onClick={
					this.state.loading
						? () => {
								return null
						  }
						: () => {
								this.props.changePokemon(this.state.data)
						  }
				}
			>
				<div className="pokemon-info">
					<div className="main-info">
						<h2 className="pokemon-name">
							{parseName(this.state.name)}
						</h2>
						<img
							src={
								this.state.id
									? this.state.sprites.front_default
									: '../../../src/assets/icons/pokeball.svg'
							}
							className={
								this.state.loading
									? 'loading-pokemon'
									: 'pokemon-sprite'
							}
						/>
					</div>
				</div>

				<button className="pokemon-info-btn">
					<i className="far fa-question-circle" />
				</button>
			</div>
		)
	}
}

export default Pokemon
