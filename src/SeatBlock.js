import React from 'react';
import Row from './Row';

class SeatBlock extends React.Component {
	handleSeatSelection( block, row, position ){
		this.props.handleSeatSelection( block, row, position );
	}

	renderRow( row ) {
		return (
			<Row
				row = { row }
				seats = { this.props.seats[row] }
				handleSeatSelection = { ( row, position) => this.handleSeatSelection( this.props.block, row, position ) }
				key = { 'block-' + this.props.block + '_row-' + row }
			/>
		);
	}

	render() {
		const seats = Object.keys( this.props.seats ).map( ( key ) => { return this.renderRow( key ) } );
		return seats;
	}
}

export default SeatBlock;
