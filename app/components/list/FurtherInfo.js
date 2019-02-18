import React from 'react'
import sha256 from 'crypto-js/sha256'

import { parseName } from '../../functions'

const FurtherInfo = ({ pokemon }) => {
	console.log(pokemon)
	if (pokemon.id) {
		console.log(pokemon)
		let typeArr = pokemon.types.sort((a, b) => {
			return a.slot - b.slot
		})

		let types = typeArr.map((value, index) => {
			return (
				<li key={sha256(value.type.name).toString()}>
					{value.type.name}
				</li>
			)
		})

		return (
			<div className="further-info">
				<h2 className="pokemon-name">{parseName(pokemon.name)}</h2>
				<img src={pokemon.sprites.front_default} />
				<div className="list-box">
					<ul className="info-list">
						<li className="info-list-item">
							<strong>
								Type{types.length > 1 ? 's' : null}:
							</strong>
							<ul>{types}</ul>
						</li>
						<li className="info-list-item">
							<strong>Height:</strong> {pokemon.height / 10}m
						</li>
						<li className="info-list-item">
							<strong>Weight:</strong> {pokemon.weight / 10}kg
						</li>
						<li className="info-list-item">
							<strong>Base experience:</strong>{' '}
							{pokemon.base_experience}
						</li>
					</ul>
					<ul className="stat-list">
						<li className="list-title">
							<strong>Base stats:</strong>
						</li>
						{pokemon.stats.map((value, index) => {
							return (
								<li
									key={sha256(value.stat.name).toString()}
									className="info-list-item"
								>
									<strong>
										{value.stat.name[0].toUpperCase() +
											value.stat.name.substring(1)}
										:
									</strong>{' '}
									{value.base_stat}
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		)
	}

	return null
}

export default FurtherInfo
