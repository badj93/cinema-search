import styles from './button.module.scss';

interface ButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
  to?: string;
}

export const Button = ({ title, onClick, className = '' }: ButtonProps) => {
  return (
    <div className={styles.container}>
      <button className={className} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};
