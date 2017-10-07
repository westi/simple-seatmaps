import React, { Component }
from 'react';
import './App.css';
import Seat from './Seat';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seats: {
				'1A': false,
				'2A': false,
				'3A': false,
				'4A': false,
				'5A': false,
				'6A': false,
			},
		};
	};
	
	handleSeatSelection( seat ) {
		const seats = this.state.seats;
		seats[seat] = ! seats[seat];
		this.setState( { seats: seats } );
	};

	renderSingleSeat( position ) {
		return (
			<Seat
				value = { position }
				selectionState = { this.state.seats[position] ? 'selected' : 'unselected' }
				onClick = { () => this.handleSeatSelection(position) }
			/>
		);
	}

	render() {
		const seats = Object.keys( this.state.seats ).map( ( key ) => { return this.renderSingleSeat( key ) } );
		return seats;
	}
}

export default App;