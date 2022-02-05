import React from 'react';
import './AlgoVision.css';

class AlgoVision extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arr: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }
    
    resetArray() {
        const arr = [];
        for (let i = 0; i < 250; i++) {
            arr.push(randomIntFromInterval(3, 666));
        }
        this.setState({arr});
    }

    render() {
        const {arr} = this.state;
        
        return (
            <div>
                <div className='arr-container'>
                    {arr.map((value, idx) => (
                        <div className='arr-bar' 
                        key={idx}
                        style={{height: `${value}px`}}>
                        </div>
                    ))}
                </div>
                <div>
                    <button onClick={() => this.resetArray()}>Generate New Values</button>
                </div>
            </div>
        );
    }
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
    
export default AlgoVision