'use client'

import { Filter, FilterValues } from '@/core/types/filter';
import cn from 'classnames';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/Button/Button';
import styles from './Filter.module.scss';
import { ROUTING } from '@/core/config/routing.config';
import { useRouter } from 'next/navigation';

/**
  order?: string
  orderDir?: string
  ageRating?: string
  country?: string
  genres?: string
 */

export interface IFilterProps {
  filter?: Filter
  mayValues: FilterValues
}

export const FilterForm: FC<IFilterProps> = ({ filter, mayValues }) => {

  const navigate = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: { ...filter },
    mode: 'onChange',
  })

  const handleChange = (e: any) => {
    if (parseInt(e.target.value) > parseInt(e.target.max)) {
      setValue(e.target.name, e.target.max)
    }
    if (parseInt(e.target.value) < parseInt(e.target.min)) {
      setValue(e.target.name, e.target.min)
    }
  }

  const onSubmit = (values: any) => {
    const params = new URLSearchParams(values)
    navigate.push(`${ROUTING.SEARCH}?${params.toString()}`)
  }

  return (
    <form className={styles.main} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputRow}>
        <input {...register('name')}
          className={cn(styles.input, styles.nameInput)} placeholder='Поиск по названию' type='text' />
      </div>
      <div className={styles.inputRow}>
        <div className={styles.inputColumn}>
          <input {...register('yearMin')}
            className={cn(styles.input)} placeholder='Год, от' type='number'
            min={mayValues.yearMin} max={mayValues.yearMax} onChange={handleChange} />
          <input {...register('yearMax')}
            className={cn(styles.input)} placeholder='Год, до' type='number'
            min={mayValues.yearMin} max={mayValues.yearMax} onChange={handleChange} />
        </div>
        <div className={styles.inputColumn}>
          <input {...register('ratingMin')}
            className={cn(styles.input)} placeholder='Рейтинг, от' type='number' min={mayValues.ratingMin} max={mayValues.ratingMax} onChange={handleChange} />
          <input {...register('ratingMax')}
            className={cn(styles.input)} placeholder='Рейтинг, до' type='number' min={mayValues.ratingMin} max={mayValues.ratingMax} onChange={handleChange} />
        </div>
        <div className={styles.inputColumn}>
          <input {...register('movieLengthMin')}
            className={cn(styles.input)} placeholder='Длительность, от (мин)' type='number' min={mayValues.movieLengthMin} max={mayValues.movieLengthMax} onChange={handleChange} />
          <input {...register('movieLengthMax')}
            className={cn(styles.input)} placeholder='Длительность, до (мин)' type='number'
            min={mayValues.movieLengthMin} max={mayValues.movieLengthMax} onChange={handleChange} />
        </div>
      </div>
      <div className={styles.inputRow}>
        {/* Тут селекты для страны, жанра, возрастного рейтинга */}
      </div>
      <Button>Поиск...</Button>
    </form>
  );
}