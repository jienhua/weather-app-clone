import mainReducer from '../reducers.js';
import { fromJS } from 'immutable';


describe('mainReducer', function () {
	it('should return the initial state', function() {
		expect(mainReducer(undefined, {})).toEqual(fromJS({
			location: '',
			data: {},
			dates: [],
			temps: [],
			selected: {
				date: '',
				temp: null
			}
		}));
	});

	it('should react to an action with the type CHANGE_LOCATION', function (){
		let location = 'Taipei';
		expect(mainReducer(undefined, {
			type: 'CHANGE_LOCATION',
			location: location
		})).toEqual(fromJS({
			location: location,
			data: {},
			dates: [],
			temps: [],
			selected: {
				date: '',
				temp: null
			}
		}));
	});

	it('should react to an action with the type SET_DATES', function () {
		const dates = ['2015-01-03', '2015-39-29'];
		expect(mainReducer(undefined, {
			type: 'SET_DATES',
			dates: dates
		})).toEqual(fromJS({
			location: '',
			data: {},
			dates: dates,
			temps: [],
			selected: {
				date: '',
				temp: null
			}
		}));
	});

	it('should react to an action with the type  SET_TEMPS', function () {
		const temps = ['23', '42'];
		expect(mainReducer(undefined, {
			type: 'SET_TEMPS',
			temps: temps
		})).toEqual(fromJS({
			location: '',
			data: {},
			dates: [],
			temps: temps,
			selected: {
				date: '',
				temp: null
			}
		}));
	});

	it('should react to an action with the type SET_DATA', function () {
		const data = {list: []};
		expect(mainReducer(undefined, {
			type: 'SET_DATA',
			data: data
		})).toEqual(fromJS({
			location: '',
			data: data,
			dates: [],
			temps: [],
			selected: {
				date: '',
				temp: null
			}
		}));
	});

	it('should react to an action with the type  SET_SELECTED_TEMP', function () {
		const temp = '12';
		expect(mainReducer(undefined, {
			type: 'SET_SELECTED_TEMP',
			temp: temp
		})).toEqual(fromJS({
			location: '',
			data: {},
			dates: [],
			temps: [],
			selected: {
				date: '',
				temp: temp
			}
		}));
	});

	it('should react to an action with the type SET_SELECTED_DATE', function () {
		const date = '2028-92-92';
		expect(mainReducer(undefined, {
			type: 'SET_SELECTED_DATE',
			date: date
		})).toEqual(fromJS({
			location: '',
			data: {},
			dates: [],
			temps: [],
			selected: {
				date: date,
				temp: null
			}
		}));
	});
});