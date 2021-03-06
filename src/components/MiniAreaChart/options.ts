function generateCustomOptions(strokeCurve, strokeWidth, color, gradientShade) {
  return {
    chart: {
      sparkline: { enabled: true },
      toolbar: {
        show: false
      },
      type: 'area' as const
    },
    tooltip: {
      enabled: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: strokeCurve,
      width: strokeWidth,
      colors: color === '#FFFFFF' ? ['#FFFFFF57'] : undefined
    },
    xaxis: {
      type: 'datetime' as const,
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
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    colors: [color],
    fill: {
      type: 'gradient' as const,
      gradient: {
        shade: gradientShade,
        opacityFrom: 0.7,
        opacityTo: 0.2
      }
    }
  };
}

export default generateCustomOptions;
