import React, { Component }
from 'react';
import './App.css';
import Row from './Row';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rows: {
				'A': {
					'1A': false,
					'2A': false,
					'3A': false,
					'4A': false,
					'5A': false,
					'6A': false,
				},
				'B': {
					'1B': false,
					'2B': false,
					'3B': false,
					'4B': false,
					'5B': false,
					'6B': false,
				},
			},
		};
	};
	
	handleSeatSelection( row, seat ) {
		const rows = this.state.rows;
		rows[row][seat] = ! rows[row][seat];
		this.setState( { rows: rows } );
	};

	renderRow( row ) {
		return (
			<Row
				row = { row }
				seats = { this.state.rows[row] }
				handleSeatSelection = { (row, position) => this.handleSeatSelection( row, position ) }
				key = { 'row-' + row }
			/>
		);
	}

	render() {
		const seats = Object.keys( this.state.rows ).map( ( key ) => { return this.renderRow( key ) } );
		return seats;
	}
}

export default App;