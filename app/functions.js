export const parseName = name => {
	let nameArr = name.split('-')

	let capitalizedName = nameArr.map(value => {
		return value[0].toUpperCase() + value.substring(1)
	})

	return capitalizedName.join(' ')
}
