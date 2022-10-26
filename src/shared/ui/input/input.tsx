import styles from './input.module.scss';

interface InputProps {
  placeholder: string;
  className?: string;
}

export const Input = ({ placeholder, className = '' }: InputProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <input className={styles.containerInput} placeholder={placeholder} />
    </div>
  );
};
