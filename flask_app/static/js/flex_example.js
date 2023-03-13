let pivot_table_1 = new Flexmonster({
    container: "#pivot-container-1",
    componentFolder: "https://cdn.flexmonster.com/",
    height: 385,
    licenseFilePath: "https://cdn.flexmonster.com/jsfiddle.charts.key",
    report: {
      dataSource: {
        type: "json",
        filename: "data/dashboad-demo-data.json",
      },
      slice: {
        rows: [
          {
            uniqueName: "Division",
          },
        ],
        columns: [
          {
            uniqueName: "Patient Status",
          },
          {
            uniqueName: "[Measures]",
          },
        ],
        measures: [
          {
            uniqueName: "Treatment Cost",
            aggregation: "sum",
            format: "currency",
          },
        ],
      },
      conditions: [
        {
          formula: "#value < 6000",
          measure: "Treatment Cost",
          aggregation: "sum",
          format: {
            backgroundColor: "#00A45A",
            color: "#fff",
            fontFamily: "Arial",
            fontSize: "12px",
          },
          isTotal: false,
        },
        {
          formula: "#value > 12000",
          measure: "Treatment Cost",
          aggregation: "sum",
          format: {
            backgroundColor: "#df3800",
            color: "#fff",
            fontFamily: "Arial",
            fontSize: "12px",
          },
          isTotal: false,
        },
      ],
      options: {
        configuratorButton: false,
        drillThrough: false,
        timePattern: "m'h' ss'min'",
      },
      formats: [
        {
          name: "currency",
          currencySymbol: "$",
        },
        {
          name: "",
          decimalPlaces: 2,
        },
      ],
      tableSizes: {
        columns: [
          {
            tuple: [],
            measure: {
              uniqueName: "Treatment Cost",
              aggregation: "sum",
            },
            width: 180,
          },
          {
            tuple: ["patient status.[inpatient]"],
            measure: {
              uniqueName: "Treatment Cost",
              aggregation: "sum",
            },
            width: 180,
          },
          {
            tuple: ["patient status.[outpatient]"],
            measure: {
              uniqueName: "Treatment Cost",
              aggregation: "sum",
            },
            width: 180,
          },
        ],
      },
    },
  });
  
  let pivot_table_2 = new Flexmonster({
    container: "#pivot-container-2",
    componentFolder: "https://cdn.flexmonster.com/",
    height: 300,
    licenseFilePath: "https://cdn.flexmonster.com/jsfiddle.charts.key",
    report: {
      dataSource: {
        type: "json",
        filename: "data/dashboad-demo-data.json",
      },
      slice: {
        rows: [
          {
            uniqueName: "Satisfaction",
          },
        ],
        columns: [
          {
            uniqueName: "Patient Status",
          },
          {
            uniqueName: "[Measures]",
          },
        ],
        measures: [
          {
            uniqueName: "Average Waiting Time",
            formula: 'average("Waiting Time")',
            caption: "Waiting Time",
          },
          {
            uniqueName: "Treatment Cost",
            aggregation: "sum",
            active: false,
            format: "currency",
          },
        ],
        sorting: {
          column: {
            type: "asc",
            tuple: [],
            measure: {
              uniqueName: "Average Waiting Time",
            },
          },
        },
      },
      conditions: [
        {
          formula: "#value < 50",
          measure: "Average Waiting Time",
          isTotal: true,
          format: {
            backgroundColor: "#00A45A",
            color: "#FFFFFF",
            fontFamily: "Arial",
            fontSize: "12px",
          },
        },
        {
          formula: "#value > 102",
          measure: "Average Waiting Time",
          isTotal: true,
          format: {
            backgroundColor: "#df3800",
            color: "#FFFFFF",
            fontFamily: "Arial",
            fontSize: "12px",
          },
        },
      ],
      options: {
        configuratorButton: false,
        drillThrough: false,
        grid: {
          showHeaders: false,
          showFilter: false,
          dragging: false,
        },
      },
      formats: [
        {
          name: "currency",
          currencySymbol: "$",
        },
        {
          name: "",
          decimalPlaces: 2,
        },
      ],
    },
    customizeCell: customizeCell,
  });
  
  let bar_chart = new Flexmonster({
    container: "#bar-chart-container",
    componentFolder: "https://cdn.flexmonster.com/",
    height: 300,
    licenseFilePath: "https://cdn.flexmonster.com/jsfiddle.charts.key",
    report: {
      dataSource: {
        type: "json",
        filename: "data/dashboad-demo-data.json",
      },
      slice: {
        rows: [
          {
            uniqueName: "Division",
          },
        ],
        columns: [
          {
            uniqueName: "[Measures]",
          },
        ],
        measures: [
          {
            uniqueName: "Waiting Time",
            aggregation: "average",
          },
          {
            uniqueName: "Treatment Cost",
            aggregation: "sum",
            active: false,
            format: "currency",
          },
        ],
        sorting: {
          column: {
            type: "desc",
            tuple: [],
            measure: {
              uniqueName: "Waiting Time",
              aggregation: "average",
            },
          },
        },
      },
      options: {
        viewType: "charts",
        configuratorButton: false,
        drillThrough: false,
        chart: {
          type: "bar_h",
          showFilter: false,
          showMeasures: false,
        },
      },
      formats: [
        {
          name: "currency",
          currencySymbol: "$",
        },
        {
          name: "",
          decimalPlaces: 2,
        },
      ],
    },
  });
  
  let column_chart = new Flexmonster({
    container: "#column-chart-container",
    componentFolder: "https://cdn.flexmonster.com/",
    height: 390,
    licenseFilePath: "https://cdn.flexmonster.com/jsfiddle.charts.key",
    report: {
      dataSource: {
        type: "json",
        filename: "data/dashboad-demo-data.json",
      },
      slice: {
        rows: [
          {
            uniqueName: "Satisfaction",
          },
        ],
        columns: [
          {
            uniqueName: "Patient Status",
          },
          {
            uniqueName: "[Measures]",
          },
        ],
        measures: [
          {
            uniqueName: "Satisfaction Percentage",
            formula: 'count("Patient Status") / 200',
            caption: "Satisfaction Percentage",
            format: "satisfaction_perc",
          },
        ],
      },
      options: {
        viewType: "charts",
        configuratorButton: false, // this was false
        drillThrough: false, // false
        chart: {
          type: "stacked_column",
          showFilter: true, // false
          showMeasures: false, // false
        },
      },
      formats: [
        {
          name: "",
          decimalPlaces: 2,
        },
        {
          name: "satisfaction_perc",
          isPercent: true,
        },
      ],
    },
  });
  
  let pie_chart = new Flexmonster({
    container: "#pie-chart-container",
    componentFolder: "https://cdn.flexmonster.com/",
    height: 390,
    licenseFilePath: "https://cdn.flexmonster.com/jsfiddle.charts.key",
    report: {
      dataSource: {
        type: "json",
        filename: "data/dashboad-demo-data.json",
      },
      slice: {
        rows: [
          {
            uniqueName: "Satisfaction",
          },
        ],
        columns: [
          {
            uniqueName: "[Measures]",
          },
        ],
        measures: [
          {
            uniqueName: "Satisfaction Percentage",
            formula: 'count("Patient Status") / 200',
            caption: "Satisfaction Percentage",
            format: "satisfaction_perc",
          },
        ],
      },
      options: {
        viewType: "charts",
        configuratorButton: false,
        drillThrough: false,
        chart: {
          type: "pie",
          showFilter: false,
          showLegend: false,
          showMeasures: false,
        },
      },
      formats: [
        {
          name: "currency",
          currencySymbol: "$",
        },
        {
          name: "",
          decimalPlaces: 2,
        },
        {
          name: "satisfaction_perc",
          isPercent: true,
        },
      ],
    },
  });
  
  function customizeCell(cell, data) {
    if (data.hierarchy && data.type === "header" && data.hierarchy.caption === "Satisfaction" && data.member) {
      let name = data.member.caption;
      let face = `<img class="flag" style="width:23px; height:23px;" src="https://www.flexmonster.com/fm_uploads/2020/01/${name}Emoji.png">`;
      cell.text = `<div style="display:flex; align-items:center; font-size:12px; position:relative; bottom: 3px; left:2px;">${face}${data.member.caption}</div>`;
    }
  }