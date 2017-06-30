import {
	changeLocation,
	setSelectedDate,
	setSelectedTemp,
	setData,
	setDates,
	setTemps
} from '../actions';

describe('actions', function () {
	describe('changeLocation', function () {
		it('should have a type of "CHANGE_LOCATION"', function () {
			expect(changeLocation().type).toEqual('CHANGE_LOCATION');
		});

		it('should pass on the location we pass in', function () {
			let location = 'Vienna, Austria';
			expect(changeLocation(location).location).toEqual(location);
		});
	});

	describe('setSelectedDate', function () {
		it('should have a type of SET_SELECTED_DATE', function () {
			expect(setSelectedDate().type).toEqual('SET_SELECTED_DATE');
		});

		it('should pass on the date we pass in', function () {
			const date = '2016-01-01';
			expect(setSelectedDate(date).date).toEqual(date);
		});
	});

	describe('setSelectedTemp', function () {
		it('should have a type of SET_SELECTED_TEMP', function () {
			expect(setSelectedTemp().type).toEqual('SET_SELECTED_TEMP');
		});

		it('should pass on the temp we pass in', function () {
			const temp = '31';
			expect(setSelectedTemp(temp).temp).toEqual(temp);
		});
	});

	describe('setData', function () {
		it('should have a type of SET_DATA', function () {
			expect(setData().type).toEqual('SET_DATA');
		});

		it('should pass on the data we pass in', function () {
			const data = {
				list:[]
			};
			expect(setData(data).data).toEqual(data);
		});
	});

	describe('setDates', function () {
		it('should have a type of SET_DATES', function () {
			expect(setDates().type).toEqual('SET_DATES');
		});

		it('should pass on the dates we pass in', function () {
			const dates = ['2017-01-01', '2017-01-02'];
			expect(setDates(dates).dates).toEqual(dates);
		});
	});

	describe('setTemps', function () {
		it('should have a type of SET_TEMPS', function () {
			expect(setTemps().type).toEqual('SET_TEMPS');
		});

		it('should pass on the temps we pass in', function () {
			const temps = ['23', '28'];
			expect(setTemps(temps).temps).toEqual(temps);
		});
	});
});