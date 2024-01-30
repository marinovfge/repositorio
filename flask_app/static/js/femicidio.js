let pivot = new Flexmonster({
    container: "#pivot-container-report",
    licenseKey: document.getElementById("pivot-container-report").getAttribute("data-license-key"),
    componentFolder: "https://cdn.flexmonster.com/",
    global: {
        localization: "https://cdn.flexmonster.com/loc/es.json"
    },
    width: "100%",
    height: 800,
    toolbar: true,
    beforetoolbarcreated: customizeToolbar,
    report: {
      "dataSource": {
          type: "elasticsearch",
          node: "http://192.168.152.196:4200/api/cube",
        //   node: "https://proxyanalitica.fiscalia.gob.ec/api/cube",
          index: "femicidio_opendata",
          mapping: {
          } 
      },
      "slice": {
          "columns": [
              {
                  "uniqueName": "[Measures]"
              }
          ],
          "measures": [
              {
                  "uniqueName": "TotalNdd",
                  "aggregation": "sum",
                  "caption": "Total"
              }
          ]
      },
      "version": "2.9.41",
      "creationDate": "2023-01-04T16:25:18.393Z"
  
  }
});


function customizeToolbar(toolbar) {
    let tabs = toolbar.getTabs();
    toolbar.getTabs = function() {
      tabs = tabs.filter(tab => tab.id != "fm-tab-connect"); // desactiva connect
    //   tabs = tabs.filter(tab => tab.id != "fm-tab-open"); // desactiva open
    //   tabs = tabs.filter(tab => tab.id != "fm-tab-save"); // desactiva  save
      
      return tabs;
    }
  }
  