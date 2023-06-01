let pivot_table_ProvinciaCantonAnio = new Flexmonster({
    container: "#pivot-provinciaCanton",
    // licenseKey: "PUT YOUR LICENSE HERE", // alternative to the read
    licenseKey: document.getElementById("pivot-provinciaCanton").getAttribute("data-license-key"), 
    componentFolder: "https://cdn.flexmonster.com/",
    global: {
        localization: "https://cdn.flexmonster.com/loc/es.json"
    },
    height: 385,
    width: "100%",
    toolbar: true,
    beforetoolbarcreated: customizeToolbarTotalBlock,
    report: {
        dataSource: {
            type: "elasticsearch",
            node: "http://192.168.152.196:4200/api/cube",
            // node: "https://proxyanalitica.fiscalia.gob.ec/api/cube",
            index: "opendata_lake"
        },
        slice: {
            reportFilters: [
                {
                    uniqueName: "Delito"
                }
            ],
            rows: [
                {
                    uniqueName: "ProvinciaIncidente",
                    caption: "Provincia de Incidente"
                },
                {
                    uniqueName: "CantonIncidente",
                    caption: "Canton de Incidente"
                }
            ],
            columns: [
                {
                    uniqueName: "AñoRegistro",
                    caption: "Año de Registro"
                },
                {
                    uniqueName: "[Measures]"
                }
            ],
            measures: [
                {
                    uniqueName: "NoticiaDelito",
                    aggregation: "count",
                    caption: "Noticia del Delito"
                }
            ],
            sorting: {
                column: {
                    type: "desc",
                    tuple: [],
                    measure: {
                        uniqueName: "NoticiaDelito",
                        aggregation: "count"
                    }
                }
            }
        },
        options: {
            configuratorButton: false,
            drillThrough: false,
            grid: {
                type: "classic",
                showTotals: "off"
            }
        },
        tableSizes:{
            tuple:[],
            measure:{
                uniqueName: "NoticiaDelito",
                aggregation: "count",
            },
            width:80,
        },
        "formats": [
            {
                "name": "",
                "textAlign": "center"
            }
        ],
        "version": "2.9.46",
        "creationDate": "2023-03-10T16:52:56.168Z"
    },
});


let barras_ProvinciaCantonAnio = new Flexmonster({
    container: "#barras-ProvinciaCanton",
    licenseKey: document.getElementById("barras-ProvinciaCanton").getAttribute("data-license-key"), 
    componentFolder: "https://cdn.flexmonster.com/",
    global: {
        localization: "https://cdn.flexmonster.com/loc/es.json"
    },
    height: 500,
    width: "100%",
    toolbar: false,
    report: {
        dataSource: {
            type: "elasticsearch",
            node: "http://192.168.152.196:4200/api/cube",
            // node: "https://proxyanalitica.fiscalia.gob.ec/api/cube",
            index: "opendata_lake"
        },
        slice: {
            reportFilters: [
                {
                    uniqueName: "AñoRegistro",
                    caption: "Año de Registro"
                },
                {
                    uniqueName: "Delito"
                }
            ],
            rows: [
                {
                    uniqueName: "ProvinciaIncidente",
                    caption: "Provincia de Incidente"
                },
                {
                    uniqueName: "CantonIncidente",
                    caption: "Canton de Incidente"
                }
            ],
            columns: [
                {
                    uniqueName: "[Measures]"
                }
            ],
            measures: [
                {
                    uniqueName: "NoticiaDelito",
                    aggregation: "count",
                    caption: "Noticia del Delito"
                }
            ],
            sorting: {
                column: {
                    type: "desc",
                    tuple: [],
                    measure: {
                        uniqueName: "NoticiaDelito",
                        aggregation: "count"
                    }
                }
            }
        },
        options: {
            configuratorButton: false,
            drillThrough: false,
            viewType: "charts",
            grid: {
                showTotals: "off"
            },
            chart: {
                type: "bar_h"
            }
        },
        formats: [
            {
                name: "",
                isPercent: false
            }
        ],
        version: "2.9.46",
        creationDate: "2023-03-10T17:15:47.481Z"
    },
});


let pie_flagrantes = new Flexmonster({
    container: "#pie-flagrantes",
    licenseKey: document.getElementById("pie-flagrantes").getAttribute("data-license-key"), 
    componentFolder: "https://cdn.flexmonster.com/",
    global: {
        localization: "https://cdn.flexmonster.com/loc/es.json"
    },
    height: 500,
    width: "100%",
    toolbar: false,
    report: {
        dataSource: {
            type: "elasticsearch",
            node: "http://192.168.152.196:4200/api/cube",
            // node: "https://proxyanalitica.fiscalia.gob.ec/api/cube",
            index: "opendata_lake"
        },
        slice: {
            reportFilters: [
                {
                    uniqueName: "AñoRegistro",
                    sort: "unsorted"
                }
            ],
            rows: [
                {
                    uniqueName: "TipoFlagrante"
                }
            ],
            columns: [
                {
                    uniqueName: "ProvinciaIncidente"
                },
                {
                    uniqueName: "Delito"
                },
                {
                    uniqueName: "[Measures]"
                }
            ],
            measures: [
                {
                    uniqueName: "NoticiaDelito",
                    aggregation: "count",
                    caption: "Noticia del Delito"
                }
            ],
            sorting: {
                column: {
                    type: "asc",
                    tuple: [],
                    measure: {
                        uniqueName: "NoticiaDelito",
                        aggregation: "count"
                    }
                }
            }
        },
        options: {
            viewType: "charts",
            configuratorButton: false, // this was false
            drillThrough: false, // false
            grid: {
                type: "classic",
                showTotals: "off"
            },
            chart: {
                type: "pie",
                showFilter: true,
            }
        },
        formats: [
            {
                name: "",
                decimalPlaces:2,
                isPercent: true,
            }
        ],
        version: "2.9.46",
        creationDate: "2023-03-10T17:44:16.760Z"
    },
});

let tabla_delitosTipoAnio = new Flexmonster({
    container: "#tabla-delitosTipoAnio",
    licenseKey: document.getElementById("tabla-delitosTipoAnio").getAttribute("data-license-key"), 
    componentFolder: "https://cdn.flexmonster.com/",
    global: {
        localization: "https://cdn.flexmonster.com/loc/es.json"
    },
    height: 500,
    width: "100%",
    toolbar: true,
    beforetoolbarcreated: customizeToolbarTotalBlock,
    report: {
        dataSource: {
            type: "elasticsearch",
            node: "http://192.168.152.196:4200/api/cube",
            // node: "https://proxyanalitica.fiscalia.gob.ec/api/cube",
            index: "opendata_lake"
        },
        slice: {
            reportFilters:[
                {
                    uniqueName: "Delito",
                }
            ],
            rows: [
                {
                    uniqueName: "Delito"
                },
                {
                    uniqueName: "TipoDelito",
                    caption: "Tipo de Delito"
                }
            ],
            columns: [
                {
                    uniqueName: "AñoRegistro",
                    caption: "Año de Registro"
                },
                {
                    uniqueName: "[Measures]"
                }
            ],
            measures: [
                {
                    uniqueName: "NoticiaDelito",
                    aggregation: "count",
                    caption: "Noticia del Delito"
                }
            ],
            sorting: {
                column: {
                    type: "desc",
                    tuple: [],
                    measure: {
                        uniqueName: "NoticiaDelito",
                        aggregation: "count"
                    }
                }
            }
        },
        options: {
            configuratorButton: false, // this was false
            drillThrough: false, // false
            grid: {
                type: "classic",
                showTotals: "off"
            },
            chart: {
                type: "pie",
                showFilter: true,
            }
        },
        formats: [
            {
                name: "",
                isPercent: false,
                textAlign: "center"
            }
        ],
        version: "2.9.46",
        creationDate: "2023-03-10T17:27:46.872Z"    
    },
});


let barras_delitosHorarioAnio = new Flexmonster({
    container: "#barras-delitosHorarioAnio",
    licenseKey: document.getElementById("barras-delitosHorarioAnio").getAttribute("data-license-key"), 
    componentFolder: "https://cdn.flexmonster.com/",
    global: {
        localization: "https://cdn.flexmonster.com/loc/es.json"
    },
    height: 500,
    width: "100%",
    toolbar: false,
    report: {
        dataSource: {
            type: "elasticsearch",
            node: "http://192.168.152.196:4200/api/cube",
            // node: "https://proxyanalitica.fiscalia.gob.ec/api/cube",
            index: "opendata_lake"
        },
        slice: {
            reportFilters: [
                {
                    uniqueName: "ProvinciaIncidente"
                },
                {
                    uniqueName: "Delito"
                }
            ],
            rows: [
                {
                    uniqueName: "AñoRegistro"
                }
            ],
            columns: [
                {
                    uniqueName: "HorarioIncidente"
                },
                {
                    uniqueName: "[Measures]"
                }
            ],
            measures: [
                {
                    uniqueName: "NoticiaDelito",
                    aggregation: "count",
                    caption: "Noticia del Delito"
                }
            ]
        },
        options: {
            configuratorButton: false, // this was false
            drillThrough: false, // false
            viewType: "charts",
            chart: {
                type: "stacked_column",
                showFilter: true,
            }
        },
        version: "2.9.46",
        creationDate: "2023-03-10T19:54:45.605Z"
    },
});


// para activar y desactivar opciones del toolbar

function customizeToolbarTotalBlock(toolbar) {
    let tabs = toolbar.getTabs();
    toolbar.getTabs = function() {
      tabs = tabs.filter(tab => tab.id != "fm-tab-connect"); // desactiva connect
      tabs = tabs.filter(tab => tab.id != "fm-tab-open"); // desactiva open
      tabs = tabs.filter(tab => tab.id != "fm-tab-save"); // desactiva  save
      tabs = tabs.filter(tab => tab.id != "fm-tab-grid"); // desactiva  grid
      tabs = tabs.filter(tab => tab.id != "fm-tab-charts"); // desactiva  chart
      tabs = tabs.filter(tab => tab.id != "fm-tab-fields"); // desactiva  campos
      tabs = tabs.filter(tab => tab.id != "fm-tab-format"); // desactiva  format
      tabs = tabs.filter(tab => tab.id != "fm-tab-options"); // desactiva  options
      tabs = tabs.filter(tab => tab.id != "fm-tab-fullscreen"); // desactiva  fullscreen
      // tabs = tabs.filter(tab => tab.id != "fm-tab-export-pdf"); // desactiva  export2pdf no funca
      
      return tabs;
    }
}