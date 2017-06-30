import React from 'react';
import renderer from 'react-test-renderer';
import { App } from '../App';
import { fromJS } from 'immutable';
import Plot from '../Plot.js';

describe('components', function () {
	describe('<App />', function () {
		it('renders correctly', function () {
			let tree = renderer.create(
				<App location='' 
					 selected={fromJS({})}
					 data={fromJS({})}
					 dates={fromJS([])}
					 temps={fromJS([])} />).toJSON();
			expect(tree).toMatchSnapshot();
		});
	});

	describe('<Plot />', function () {
		global.Plotly = {
			newPlot: () => {}
		};
		global.document = {
	    	getElementById: function() { return {
	        	on: function() {}
	      	}}
	    };
		it('renders correctly', function () {
			const tree = renderer.create(<Plot xData={fromJS({})} yData={fromJS({})}/>).toJSON();
			expect(tree).toMatchSnapshot();
		});
	});
});