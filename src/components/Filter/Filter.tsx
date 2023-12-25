'use client'

import { Filter } from '@/core/types/filter';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Filter.module.scss';
import cn from 'classnames';

export interface IFilterProps {
  filter?: Filter
}

export const FilterForm: FC<IFilterProps> = ({ filter }) => {

  const {
    register,
    handleSubmit,
    setError,
    resetField,
    formState: { errors },
  } = useForm({
    defaultValues: { ...filter },
    mode: 'onChange',
  })


  return (
    <div className={styles.main}>
      <div>
      <input {...register('name')}
        className={cn(styles.input, styles.nameInput)} placeholder='Поиск по названию'/>
      </div>
    </div>
  );
}