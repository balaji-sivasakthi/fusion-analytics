import React, { useLayoutEffect, useRef } from 'react'
import {Card,CardHeader} from '@mui/material'
import CardContent from '@mui/material/CardContent'

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


function ConverstionFlowChart() {
 useLayoutEffect(()=>{
  let chart = am4core.create("chartdiv", am4charts.SlicedChart);
  chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect


  chart.data = [{
      "name": "Footfall",
      "value": 1298
  }, {
      "name": "Billable Entities",
      "value": 504
  }, {
      "name": "Engagers",
      "value": 663
  },
  {
    "name": "Conversion",
    "value": 416
}];
  
  let series = chart.series.push(new am4charts.FunnelSeries());
  series.colors.step = 2;
  series.dataFields.value = "value";
  series.dataFields.category = "name";
  series.alignLabels = false;
  series.orientation = "horizontal";
  series.bottomRatio = 1;
  
  chart.legend = new am4charts.Legend();


  chart.legend.position = "bottom";
  chart.legend.valueLabels.template.disabled = true;
 },[])
  return (
    <Card>
      <CardHeader title="Conversion Flow Chart"/>
      <CardContent>
        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
      </CardContent>
    </Card>
  )
}

export default ConverstionFlowChart