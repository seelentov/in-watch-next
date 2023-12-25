import Select, { GroupBase, Props } from 'react-select';
import styles from './Select.module.scss'

export function CustomSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
  return (
    <Select {...props} className={styles.main} theme={(theme: any) => ({ ...theme, borderRadius: 0 })} />
  );
}