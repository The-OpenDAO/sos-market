function generateCustomOptions(strokeCurve, color) {
  return {
    chart: {
      toolbar: {
        show: false
      },
      type: 'area'
    },
    tooltip: {
      enabled: false
    },
    markers: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: strokeCurve,
      width: 1.7
    },
    xaxis: {
      type: 'datetime',
      labels: {
        show: false
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
        show: false
      }
    },
    grid: {
      show: false,
      padding: {
        top: -20,
        right: 0,
        bottom: -15,
        left: -10
      }
    },
    colors: [color],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.85,
        opacityTo: 0.5
      }
    }
  };
}

export default generateCustomOptions;
