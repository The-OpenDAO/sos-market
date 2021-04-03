export default {
  chart: {
    toolbar: {
      show: false
    },
    type: 'candlestick',
    height: 288
  },
  xaxis: {
    type: 'datetime',
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
    show: false,
    tooltip: {
      enabled: true
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
      bottom: 0,
      left: 0
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '25%'
    },
    candlestick: {
      colors: {
        upward: '#46D39A',
        downward: '#EF4444'
      },
      wick: {
        useFillColor: true
      }
    }
  }
};
