import React from 'react'

const Navigation = props => {
	let navButtons = []

	return (
		<nav className="navbox">
			<h3 className="current-page">Page {props.page + 1}</h3>
			<button
				id="previous"
				onClick={props.changePage}
				disabled={
					props.previous ? (props.loading ? true : false) : true
				}
				className="nav-button nav-button-left"
			>
				<i className="fas fa-caret-left" />
			</button>
			<button
				id="page-0"
				onClick={event => {
					props.changePage(event, 0)
				}}
				className="nav-button nav-button-page-1"
			>
				1
			</button>
			{props.page > 2 && props.page < 46 ? (
				<div>
					<button disabled className="nav-button">
						...
					</button>
					<button
						id={'page-' + (props.page - 1)}
						onClick={event => {
							props.changePage(event, props.page - 1)
						}}
						className={
							'nav-button nav-button-page-' + (props.page - 1)
						}
					>
						{props.page}
					</button>
					<button
						id={'page-' + props.page}
						onClick={event => {
							props.changePage(event, props.page)
						}}
						className={'nav-button nav-button-page-' + props.page}
					>
						{props.page + 1}
					</button>
					<button
						id={'page-' + (props.page + 1)}
						onClick={event => {
							props.changePage(event, props.page + 1)
						}}
						className={
							'nav-button nav-button-page-' + (props.page + 1)
						}
					>
						{props.page + 2}
					</button>
					<button disabled className="nav-button">
						...
					</button>
				</div>
			) : props.page <= 2 ? (
				<div>
					<button
						id="page-1"
						onClick={event => {
							props.changePage(event, 1)
						}}
						className="nav-button nav-button-page-1"
					>
						2
					</button>
					<button
						id="page-2"
						onClick={event => {
							props.changePage(event, 2)
						}}
						className="nav-button nav-button-page-2"
					>
						3
					</button>
					<button
						id="page-3"
						onClick={event => {
							props.changePage(event, 3)
						}}
						className="nav-button nav-button-page-3"
					>
						4
					</button>
					<button disabled className="nav-button">
						...
					</button>
				</div>
			) : (
				<div>
					<button disabled className="nav-button">
						...
					</button>
					<button
						id="page-45"
						onClick={event => {
							props.changePage(event, 45)
						}}
						className="nav-button nav-button-page-45"
					>
						46
					</button>
					<button
						id="page-46"
						onClick={event => {
							props.changePage(event, 46)
						}}
						className="nav-button nav-button-page-46"
					>
						47
					</button>
					<button
						id="page-47"
						onClick={event => {
							props.changePage(event, 47)
						}}
						className="nav-button nav-button-page-47"
					>
						48
					</button>
				</div>
			)}
			<button
				id="page-48"
				onClick={event => {
					props.changePage(event, 48)
				}}
				className="nav-button nav-button-page-48"
			>
				49
			</button>
			<button
				id="next"
				onClick={props.changePage}
				disabled={props.next ? (props.loading ? true : false) : true}
				className="nav-button nav-button-right"
			>
				<i className="fas fa-caret-right" />
			</button>
		</nav>
	)
}

export default Navigation
