import { relativeTimeFromNow } from 'helpers/date';

function generateCustomOptions(ticker: string) {
  return {
    chart: {
      type: 'line',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    tooltip: {
      enabled: true,
      shared: true,
      marker: {
        show: true
      },
      x: {
        show: true,
        formatter: value => `${relativeTimeFromNow(value)}`
      },
      y: {
        show: true,
        formatter: value => `${parseFloat(value).toFixed(3)} ${ticker}`
      }
    },
    legend: {
      show: true,
      markers: {
        width: 16,
        height: 16,
        radius: 2
      },
      itemMargin: {
        horizontal: 6,
        vertical: 2
      },
      fontSize: '14px',
      fontFamily: 'Gilroy',
      fontWeight: 700,
      labels: {
        colors: ['#F3F4F6']
      },
      onItemClick: {
        toggleDataSeries: false
      }
    },
    markers: {
      size: 0,
      colors: undefined,
      strokeColors: ['#9F7EFF', '#FF83B0'],
      strokeWidth: 2,
      strokeOpacity: 1,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: 'circle',
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      onClick: undefined,
      onDblClick: undefined,
      showNullDataPoints: true,
      hover: {
        size: undefined,
        sizeOffset: 3
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    xaxis: {
      type: 'datetime',
      labels: {
        show: true,
        format: 'hh:mm TT',
        style: {
          cssClass: 'apexcharts-xaxis-label'
        }
      },
      tooltip: {
        enabled: false
      },
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: true,
        formatter(value) {
          return `${value}`;
        },
        offsetX: -15,
        style: {
          cssClass: 'apexcharts-yaxis-label'
        }
      }
    },
    grid: {
      show: true,
      borderColor: '#252C3B',
      strokeDashArray: 5,
      position: 'back',
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 12,
        left: 0
      }
    },
    colors: ['#9F7EFF', '#FF83B0']
  };
}

export default generateCustomOptions;
