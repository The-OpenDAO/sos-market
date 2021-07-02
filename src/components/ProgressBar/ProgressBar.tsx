import { Line } from 'rc-progress';

export type ProgressBarColor =
  | 'pink'
  | 'blue'
  | 'success'
  | 'warning'
  | 'danger';

type ProgressBarProps = {
  /**
   * Completion percentage
   */
  percent: number;
  /**
   * The color of progress bar
   * @default 'blue'
   */
  color?: ProgressBarColor;
};

/**
 * Display the current progress of an operation flow
 */
function ProgressBar({ percent, color = 'blue' }: ProgressBarProps) {
  return (
    <Line
      percent={percent}
      trailWidth={1.4}
      strokeWidth={1.4}
      className={`pm-c-progress-bar--${color}`}
    />
  );
}

export default ProgressBar;
