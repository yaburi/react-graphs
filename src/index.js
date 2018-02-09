import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import FusionCharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

// Pass fusioncharts as a dependency of charts
charts(FusionCharts)


var myDataSource = {
    chart: {
        caption: "Harry's SuperMart",
        subCaption: "Top 5 stores in last month by revenue",
        numberPrefix: "$",
        theme: "ocean"
    },
    data: [{
        label: "Bakersfield Central",
        value: "880000"
    }, {
        label: "Garden Groove harbour",
        value: "730000"
    }, {
        label: "Los Angeles Topanga",
        value: "590000"
    }, {
        label: "Compton-Rancho Dom",
        value: "520000"
    }, {
        label: "Daly City Serramonte",
        value: "330000"
    }]
};

var revenueChartConfigs = {
    id: "revenue-chart",
    type: "column2d",
    width: "80%",
    height: 400,
    dataFormat: "json",
    dataSource: myDataSource
};

ReactDOM.render( < ReactFC {...revenueChartConfigs }/>,
	document.getElementById('chart-container')
);

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
