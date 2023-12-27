import { ChangeEvent, FC } from 'react'
import styles from './Autocomplete.module.scss'

export interface IAutocompleteProps {
  mayNames: string[]
  handleClickName: (arg0: string) => void
}

export const Autocomplete: FC<IAutocompleteProps> = ({ mayNames, handleClickName }) => {

  
  return (
    <ul className={styles.main}>
      {mayNames.map(name =>
        <li key={name} onClick={() => handleClickName(name)}>{name}</li>
      )}
    </ul>
  );
}