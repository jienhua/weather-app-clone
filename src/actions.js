import xhr from 'xhr';

function changeLocation(location) {
	return {
		type: 'CHANGE_LOCATION',
		location
	}
}

function setSelectedDate (date) {
	return {
		type: 'SET_SELECTED_DATE',
		date
	}
}

function setSelectedTemp (temp) {
	return {
		type: 'SET_SELECTED_TEMP',
		temp
	}
}

function setData (data) {
	return {
		type: 'SET_DATA',
		data
	}
}

function setDates (dates) {
	return {
		type: 'SET_DATES',
		dates
	}
}

function setTemps (temps) {
	return {
		type: 'SET_TEMPS',
		temps
	}
}

function fetchData (url) {
	return (dispatch) => {
		xhr({
            url: url
        }, (err, data) => {
            let body = JSON.parse(data.body);
            let list = body.list;
            let dates = [];
            let temps = [];
            if(list){
                for(let i=0;i<list.length;i++){
                    dates.push(list[i].dt_txt);
                    temps.push(list[i].main.temp);
                }
            }
            dispatch(setData(body));
            dispatch(setDates(dates));
            dispatch(setTemps(temps));
            dispatch(setSelectedTemp(null));
            dispatch(setSelectedDate(''));
        });
	}
}

export {
	changeLocation,
	setSelectedDate,
	setSelectedTemp,
	setData,
	setDates,
	setTemps,
	fetchData
};