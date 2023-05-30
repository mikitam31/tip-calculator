import styles from './label.module.css'

export type LabelProps = {
  text: string;
  htmlFor?: string;
}

export const Label = ({ text, htmlFor }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={styles.root}>
      {text}
    </label>
  )
}
