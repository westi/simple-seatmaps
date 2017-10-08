import React, { Component }
from 'react';
import './App.css';
import SeatBlock from './SeatBlock';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blocks: {
				'orchestra': {
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
					'C': {
						'1C': false,
						'2C': false,
						'3C': false,
						'4C': false,
						'5C': false,
						'6C': false,
					},
				},
				'left-balcony': {
					'D': {
						'1D' : false,
						'2D' : false,
						'3D' : false,
						'4D' : false,
						'5D' : false,
						'6D' : false,
					},
				},
				'right-balcony': {
					'D': {
						'7D' : false,
						'8D' : false,
						'9D' : false,
						'10D' : false,
						'11D' : false,
						'12D' : false,
					}
				}
			},
		};
	};
	
	handleSeatSelection( block, row, seat ) {
		const blocks = this.state.blocks;
		blocks[block][row][seat] = ! blocks[block][row][seat];
		this.setState( { blocks: blocks } );
	};

	renderSeatBlock( block ) {
		return (
			<div className={'seatblock ' + block }>
				<SeatBlock
					block = { block }
					seats = { this.state.blocks[block] }
					handleSeatSelection = { (block, row, position) => this.handleSeatSelection( block, row, position ) }
					key = { 'block-' + block }
				/>
			</div>
		);
	}

	render() {
		const blocks = Object.keys( this.state.blocks ).map( ( key ) => { return this.renderSeatBlock( key ) } );
		return blocks;
	}
}

export default App;