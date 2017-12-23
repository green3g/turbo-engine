import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'

const MINUTES = [ 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55 ];
const OFFSETS = [ 1, 2, 3, 4 ];
const MINUTE_MARKERS = MINUTES.map((minute, i) => {
    const offsets = OFFSETS.map((offset, j) => {
        return (
            <line key={j} className='minor' y1='42' y2='45' transform={`rotate( ${6 * ( minute + offset ) } )`}/>
        );
    });
    return (
        <g key={i}><line className='major' y1='35' y2='45' transform={`rotate(  ${30 * minute}  )`}/> {offsets}</g>
    );
});

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date,
        };
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({
                time: new Date,
            });
        }, 1000);
    }

    componentWillUnmount(){
        window.clearInterval(this.timer);
    }

    render(){


        const time = this.state.time;
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        return (
            <svg viewBox='-50 -50 100 100'>
                <circle className='clock-face' r='48'/>
                {MINUTE_MARKERS}
                
                <line className='hour' y1='2' y2='-20' transform={`rotate( ${ 30 * hours + minutes / 2 } )`}/>

                <line className='minute' y1='4' y2='-30' transform={`rotate( ${ 6 * minutes + seconds / 10 } )`}/>

                <g transform={`rotate( ${6 * seconds } )`}>
                    <line className='second' y1='10' y2='-38'/>
                    <line className='second-counterweight' y1='10' y2='2'/>
                </g>
            </svg>
        )
    }
}

export default Clock;