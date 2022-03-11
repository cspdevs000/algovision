import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`

`;

export default class Slider extends React.component {
    state = {
        value: 150
    }

    render() {
        return (
            <Styles>
                <div>
                    <input type='range' min={1} max={299} value={this.state.value} className='slider' onChange={this.handleSlide} />
                    <div className='value'>{this.state.value}</div>
                </div>
            </Styles>
        );
    }
}

