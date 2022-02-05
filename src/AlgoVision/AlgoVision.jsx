import React from 'react';
// import '.AlgoVision.css';

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
        for (let i=0; i<100; i++) {
            arr.push(randomIntFromInterval(3, 999));
        }
        this.setState({arr});
    }

    render() {
        const {arr} = this.state;
        
        return (
            <>
                {arr.map((value, idx) => (
                    <div className='arr-bar' key={idx}>
                        {value}
                    </div>
                ))}
            </>
        );
    }
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
    
export default AlgoVision