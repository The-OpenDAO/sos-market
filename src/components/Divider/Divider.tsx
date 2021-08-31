type DividerVariant = 'circle';

type DividerProps = {
  variant?: DividerVariant;
};

function Divider({ variant = 'circle' }: DividerProps) {
  return <div className={`pm-c-divider--${variant}`} />;
}

export default Divider;
