import React from 'react'
import sha256 from 'crypto-js/sha256'

import Pokemon from './list/Pokemon'
import FurtherInfo from './list/FurtherInfo'

const List = props => {
	return (
		<main className="list">
			{props.pokemonList.map((value, index) => {
				return (
					<Pokemon
						key={sha256(value.name).toString()}
						data={value}
						changePokemon={props.changePokemon}
					/>
				)
			})}
			<FurtherInfo pokemon={props.currentPokemon} />
		</main>
	)
}

export default List
