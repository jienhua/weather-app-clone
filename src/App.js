import React, { Component } from 'react';
import './App.css';

import Plot from './Plot.js';

import { connect } from 'react-redux';

import { 
    changeLocation,
    setSelectedTemp,
    setSelectedDate,
    fetchData
} from './actions';

export class App extends Component {

    constructor () {
        super();
        this.onPlotClick = this.onPlotClick.bind(this);
    };

    fetchData (evt) {
        evt.preventDefault();
        let location = encodeURIComponent(this.props.location);

        let urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
        let urlSuffix = '&APPID=c45463aa2e7b9dfb9d79c3cb9b5b6c14&units=metric';
        let url = urlPrefix + location + urlSuffix;

        this.props.dispatch(fetchData(url));
    };
    
    changeLocation (evt) {
        this.props.dispatch(changeLocation(evt.target.value));
    };

    onPlotClick (data){
        if (data.points) {
            // let number = data.points[0].pointNumber;
            this.props.dispatch(setSelectedDate(data.points[0].x));
            this.props.dispatch(setSelectedTemp(data.points[0].y));
        }
    };

    render() {
        let currentTemp = 'not loaded yet';
        let { selected, data, location, dates, temps } = this.props;
        if (data.get('list')) {
            currentTemp = data.getIn(['list', '0', 'main', 'temp']);
        }
        return (
            <div>
                <h1>Weather</h1>
                <form onSubmit={(event)=>this.fetchData(event)}>
                    <label>I want to know the weather for
                        <input placeholder={'City, Country'} 
                               type='text' 
                               value={location}
                               onChange={(event)=>this.changeLocation(event)}/>
                    </label>
                </form>
     
                {(data.get('list')) ? (
                <div className='wrapper'>
                    <p className='temp-wrapper'>
                        <span className='temp'>{ selected.get('temp') ? selected.get('temp') : currentTemp }</span>
                        <span className='temp-symbol'>°C</span>
                        <span className="temp-date">
                            { selected.get('temp') ? selected.get('date') : ''}
                        </span>
                    </p>
                    <h2>Forecast</h2>
                    <Plot
                        xData={dates}
                        yData={temps}
                        onPlotClick={this.onPlotClick}
                        type='scatter'
                    />
                </div>
                ) : null}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        location: state.get('location'),
        selected: state.get('selected'),
        data: state.get('data'),
        dates: state.get('dates'),
        temps: state.get('temps')
    };
    // return state.toJS();
}


// export default App;
export default connect(
    mapStateToProps
)(App);