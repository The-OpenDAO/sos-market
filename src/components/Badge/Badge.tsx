import Text from '../Text';

type BadgeVariant = 'normal' | 'filled';

type BadgeColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'pink'
  | 'blue'
  | 'purple';

type BadgeProps = {
  variant?: BadgeVariant;
  color?: BadgeColor;
  label?: string;
};

function Badge({ variant = 'normal', color = 'default', label }: BadgeProps) {
  return (
    <div
      className={
        variant === 'normal'
          ? `pm-c-badge-${variant}--${color}`
          : `pm-c-badge-${variant}`
      }
    >
      <div className="pm-c-badge__circle" />
      {label ? (
        <Text className="pm-c-badge__label" as="label">
          {label}
        </Text>
      ) : null}
    </div>
  );
}

Badge.displayName = 'Badge';

export default Badge;
