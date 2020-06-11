/* Graphing the chart for averages */
function graph_averages() {

    Highcharts.chart('averages_chart', {
        chart: {
            type: 'bar',
            backgroundColor: '#f3e5e5',
        },
        title: {
            text: 'Average Rating for All Shows',
            style: {
                color: 'black',
                fontSize: 20,

            }
        },
        subtitle: {
            text: 'Source: <a href="https://www.kaggle.com/ruchi798/tv-shows-on-netflix-prime-video-hulu-and-disney">Kaggle.com</a>',
            style: {
                color: 'black',
                fontSize: 10,

            }
        },
        xAxis: {
            categories: ['Netflix', 'Hulu', 'Prime Video', 'Disney+'],
            title: {
                text: null
        }
        },
        yAxis: {
        min: 0,
        title: {
            text: 'Rating',
            color: 'black',
            style: {
                color: 'black',
                fontSize: 15,

            }
        },
        labels: {
            overflow: 'justify'
        }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                enabled: true,
                },
            },
            series: {
                pointWidth: 42
            }
        },
        legend: {
            enabled: false
        },
        credits: {
        enabled: false
        },
        series: [{
        name: 'Rating', 
        data: [
            {name: 'Netflix', y: 7.16, color: '#ff3333'},
            {name: 'Hulu', y: 7.06, color: '#99cc33'},
            {name: 'Prime Video', y: 7.18, color: '#001a33'},
            {name: 'Disney+', y: 6.92, color: '#336699'}
        ]
    }]
    });
}

/* Function to graph the total highly rated shows */
function graph_totals() {

    Highcharts.chart('totals_chart', {
        chart: {
            type: 'bar',
            backgroundColor: '#f3e5e5',
        },
        title: {
            text: 'Number of Highly Rated Shows',
            style: {
                color: 'black',
                fontSize: 20,

            }
        },
        subtitle: {
            text: 'Source: <a href="https://www.kaggle.com/ruchi798/tv-shows-on-netflix-prime-video-hulu-and-disney">Kaggle.com</a>',
            style: {
                color: 'black',
                fontSize: 10,

            }
        },
        xAxis: {
            categories: ['Netflix', 'Hulu', 'Prime Video', 'Disney+'],
            title: {
                text: null
        }
        },
        yAxis: {
        min: 0,
        title: {
            text: 'Total',
            color: 'black',
            style: {
                color: 'black',
                fontSize: 15,

            }
        },
        labels: {
            overflow: 'justify'
        }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                enabled: true,
                },
            },
            series: {
                pointWidth: 42
            }
        },
        legend: {
            enabled: false
        },
        credits: {
        enabled: false
        },
        series: [{
        name: 'Highly Rated', 
        data: [
            {name: 'Netflix', y: 1330, color: '#ff3333'},
            {name: 'Hulu', y: 974, color: '#99cc33'},
            {name: 'Prime Video', y: 879, color: '#001a33'},
            {name: 'Disney+', y: 89, color: '#336699'}
        ]
    }]
    });
}


/* Creating a radar chart for age groups*/
function create_radar1() {
    var myConfig = {
            type: 'radar',
            backgroundColor: '#f3e5e5',
            title: {
                text: 'Total Amount of Shows for Each Age Group',
                fontColor: 'black'
            },
            legend: {
                align: "center",
                "vertical-align": "bottom",
                backgroundColor: '#f3e5e5',
                borderColor: '#f3e5e5',
            },
            plotarea: {
                "margin-bottom": 0,
                "margin-top": 0,
                backgroundColor: '#f3e5e5',
            },
            plot: {
            aspect: 'rose',
            animation: {
                effect: 3,
                sequence: 1,
                speed: 700
            },
            tooltip: {
              text: "%t: %v"
            },
        },
        scaleV: {
            visible: false
        },
        scaleK: {
            values: '0:3:1',
            labels: ['7+', '16+', '18+', 'all'],
            item: {
                fontColor: '#607D8B',
                backgroundColor: "white",
                borderColor: "#aeaeae",
                borderWidth: 1,
                padding: '5 10',
                borderRadius: 10
        },
        refLine: {
            lineColor: '#c10000'
        },
        tick: {
            lineColor: '#59869c',
            lineWidth: 2,
            lineStyle: 'dotted',
            size: 20
        },
        guide: {
            lineColor: "#607D8B",
            lineStyle: 'solid',
            alpha: 0.3,
            backgroundColor: "#c5c5c5 #718eb4"
        }
        },
        series: [{
            values: [296, 396, 359, 169],
            backgroundColor: '#ff3333',
            text: 'Netflix',
            'legend-marker': {
                'background-color': '#ff3333'
            }
        },
        {
            values: [364, 511, 238, 156],
            backgroundColor: '#99cc33',
            text: 'Hulu',
            'legend-marker': {
                'background-color': '#99cc33'
            }
        },
        {
            values: [217, 209, 182, 185],
            backgroundColor: '#001a33',
            text: 'Prime Video',
            'legend-marker': {
                'background-color': '#001a33'
            }
        },
        {
            values: [66, 3, 0, 80],
            backgroundColor: '#336699',
            text: 'Disney+',
            'legend-marker': {
                'background-color': '#336699'
            }
        }
        ]
    };
    
    // Rendering the chart
    zingchart.render({
        id: 'radar1',
        data: myConfig,
        height: '100%',
        width: '100%',
    });
}

/* Creating another radar chart for age of movies */
/* Creating a radar chart */
function create_radar2() {
    var myConfig = {
        "graphset": [{
          "type": "bar",
          "background-color": '#f3e5e5',
          "title": {
            "text": "Total Amount of Shows for Each Era",
            "font-color": "black",
            "backgroundColor": '#f3e5e5',
            "font-size": "22px",
            "alpha": 1,
            "adjust-layout": true,
          },
          "plotarea": {
            "margin": "dynamic"
          },
          "legend": {
            "layout": "x4",
            "alpha": 0.05,
            "shadow": false,
            "align": "center",
            "adjust-layout": true,
            "marker": {
              "type": "circle",
              "border-color": "none",
              "size": "10px"
            },
            "border-width": 0,
            "maxItems": 3,
            "toggle-action": "hide",

          },
          "plot": {
            "bars-space-left": 0.15,
            "bars-space-right": 0.15,
            "animation": {
              "effect": "ANIMATION_SLIDE_BOTTOM",
              "sequence": 0,
              "speed": 800,
              "delay": 800
            }
          },
          "scale-y": {
            "line-color": "#7E7E7E",
            "item": {
              "font-color": "#7e7e7e"
            },
            "values": "0:1800:10",
            "guide": {
              "visible": true
            },
            "label": {
              "text": "Number of Shows",
              "font-family": "arial",
              "bold": true,
              "font-size": "14px",
              "font-color": "#7E7E7E",
            },
          },
          "scaleX": {
            "values": [
              "Pre 80s",
              "80s and 90s",
              "Post 2000s",
            ],
            "placement": "default",
            "tick": {
              "size": 58,
              "placement": "cross"
            },
            "itemsOverlap": true,
            "item": {
              "offsetY": -55
            }
          },
          tooltip: {
            text: "%t %v Shows"
          },
          "series": [{
              "values": [
                9, 53, 1749
              ],
              "alpha": 0.95,
              "borderRadiusTopLeft": 7,
              "background-color": '#ff3333',
              "text": "Netflix",
            },
            {
              "values": [
                60, 150, 1307
              ],
              "borderRadiusTopLeft": 7,
              "alpha": 0.95,
              "background-color": '#99cc33',
              "text": "Hulu"
            },
            {
              "values": [
                76, 183, 1048
              ],
              "alpha": 0.95,
              "borderRadiusTopLeft": 7,
              "background-color": '#001a33',
              "text": "Prime Video"
            },
            {
              "values": [
                2, 29, 138
              ],
              "borderRadiusTopLeft": 7,
              "alpha": 0.95,
              "background-color": '#336699',
              "text": "Disney+"
            },
          ]
        }]
      };
       
      zingchart.render({
        id: 'radar2',
        data: myConfig,
        height: '100%',
        width: '100%'
      });
}

function graph_mean_rating() {

    Highcharts.chart('mean_rating_chart', {
        chart: {backgroundColor: '#f3e5e5'},
        title: {text: 'Average Rating of Movies per Year',
                  style: {
                      color: 'black',
                      fontSize: 20,
                  }
              },
              subtitle: {
                  text: 'Source: <a href="https://www.kaggle.com/ruchi798/movies-on-netflix-prime-video-hulu-and-disney">Kaggle.com</a>',
                  style: {
                      color: 'black',
                      fontSize: 10,
                  }
              },
      
        yAxis: {
          title: {
            text: 'Number of Movies'
          }
        },
      
        xAxis: {
          categories: [1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010]
        },
      
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },
        credits: {
            enabled: false
        },
        series: [{
          name: 'Amazon Prime Video',
          data: [6.070111731843572, 5.849853372434021, 5.760955056179775, 5.879126875852655, 5.89137134052389, 5.874593967517407, 5.736349574632645, 5.709177101967792]
      ,
          color: '#001a33'
        }, {
          name: 'Disney Plus',
          data: [6.855555555555555, 7.204347826086955, 6.913043478260868, 6.329411764705882, 6.817142857142858, 6.139603960396042, 6.101714285714285, 6.707741935483871],
          color: '#336699'
        }, {
          name: 'Netflix',
          data: [6.71818181818182, 6.05, 7.616666666666667, 6.797142857142856, 6.864705882352942, 6.534959349593497, 6.45971563981043, 6.182522522522526]
      ,
          color: '#ff3333'
        }, {
          name: 'Hulu',
          data: [6.8, 6.5, 6.950000000000001, 6.9, 6.611538461538462, 6.200000000000001, 6.541732283464566, 6.012593703148426]
      ,
          color: '#99cc33'
        }],
      
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }
      
      });
}

function graph_num_movies() {

    Highcharts.chart('num_movies_chart', {
        chart: {backgroundColor: '#f3e5e5'},

        title: {text: 'Number of Movies per Year',
                  style: {
                      color: 'black',
                      fontSize: 20,
                  }
              },
              subtitle: {
                  text: 'Source: <a href="https://www.kaggle.com/ruchi798/movies-on-netflix-prime-video-hulu-and-disney">Kaggle.com</a>',
                  style: {
                      color: 'black',
                      fontSize: 10,
                  }
              },
      
        yAxis: {
          title: {
            text: 'Number of Movies'
          }
        },
      
        xAxis: {
          categories: [1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010]
        },
      
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },
        credits: {
            enabled: false
        },
        series: [{
          name: 'Amazon Prime Video',
          data: [11, 2, 6, 35, 68, 123, 422, 2775],
          color: '#001a33'
        }, {
          name: 'Disney Plus',
          data: [3, 7, 4, 11, 26, 46, 127, 667],
          color: '#336699'
        }, {
          name: 'Netflix',
          data: [358, 341, 356, 733, 649, 862, 2586, 5590],
          color: '#ff3333'
        }, {
          name: 'Hulu',
          data: [9, 23, 23, 34, 35, 101, 175, 155],
          color: '#99cc33'
        }],
      
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }
      
    });
}
function chart_top_movies() {
    // Radialize the colors
  Highcharts.setOptions({
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
      return {
        radialGradient: {
          cx: 0.5,
          cy: 0.3,
          r: 0.7
        },
        stops: [
          [0, color],
          [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
        ]
      };
    })
  });
  
  // Build the chart
  Highcharts.chart('top_movies_chart', {
    chart: {
      backgroundColor: '#f3e5e5',
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Movies with rating larger than 8'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          connectorColor: 'silver'
        }
      }
    },
    credits: {
        enabled: false
    },
    series: [{
      name: 'Share',
      data: [
        { name: 'Netflix', y: 86, color: '#ff3333'},
        { name: 'Hulu', y: 14, color: '#99cc33'},
        { name: 'Prime Video', y: 172, color: '#001a33' },
        { name: 'Disney+', y:10, color: '#336699'}
      ]
    }]
  });
}
        
function init() {
    graph_averages();
    graph_totals();
    create_radar1();
    create_radar2();
    graph_num_movies();
    graph_mean_rating();
    chart_top_movies();
}

document.addEventListener('DOMContentLoaded', init, false);
