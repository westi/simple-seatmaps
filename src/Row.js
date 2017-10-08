import React from 'react';
import Seat from './Seat';

class Row extends React.Component {
	handleSeatSelection( row, position ){
		this.props.handleSeatSelection( row, position );
	}

	renderSingleSeat( position ) {
		return (
			<Seat
				value = { position }
				selectionState = { this.props.seats[position] ? 'selected' : 'unselected' }
				onClick = { () => this.handleSeatSelection( this.props.row, position ) }
				key = { position + '-' + this.props.row } 
			/>
		);
	}

	render() {
		const seats = Object.keys( this.props.seats ).map( ( key ) => { return this.renderSingleSeat( key ) } );
		return (
			<div className='row' >
				{ seats }
			</div>
		);
	}
}

export default Row;
