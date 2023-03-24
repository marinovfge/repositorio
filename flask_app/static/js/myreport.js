let pivot = new Flexmonster({
    container: "#pivot-container-report",
    licenseKey: "Z7XQ-XJ4I0A-1X1229-69644T-0Z5I02-354C69-68654O-175L0S-333B4J-5C581I",
    componentFolder: "https://cdn.flexmonster.com/",
    global: {
        localization: "https://cdn.flexmonster.com/loc/es.json"
    },
    width: "100%",
    height: 430,
    toolbar: true,
    beforetoolbarcreated: customizeToolbar,
    report: {
      "dataSource": {
          type: "elasticsearch",
          node: "http://192.168.152.196:4200/api/cube",
        //   node: "https://proxyanalitica.fiscalia.gob.ec/api/cube",
          index: "opendata_lake",
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
                  "uniqueName": "NoticiaDelito",
                  "aggregation": "distinctcount",
                  "caption": "Noticia del Delito"
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
      tabs = tabs.filter(tab => tab.id != "fm-tab-open"); // desactiva open
      tabs = tabs.filter(tab => tab.id != "fm-tab-save"); // desactiva  save
      
      return tabs;
    }
  }
  