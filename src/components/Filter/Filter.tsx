'use client'

import { ROUTING } from '@/core/config/routing.config';
import { Filter, FilterValues } from '@/core/types/filter';
import { clearEmptyAttrs } from '@/core/utils/obj/clearEmptyAttrs';
import cn from 'classnames';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaFilter } from 'react-icons/fa6';
import { IoCloseSharp } from 'react-icons/io5';
import { Autocomplete } from '../Autocomplete/Autocomplete';
import { Button } from '../ui/Button/Button';
import { CustomSelect } from '../ui/Select/Select';
import styles from './Filter.module.scss';

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
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const [mayNames, setMayNames] = useState<string[]>([])
  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
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
    values.ageRating = values.ageRating?.value ? (values.ageRating?.value).toString() : ''
    values.country = values.country?.value || ''
    values.genres = values.genres?.value || ''

    const filteredValues = clearEmptyAttrs(values)
    const params = new URLSearchParams(filteredValues)

    navigate.push(`${ROUTING.SEARCH}?${params.toString()}`)
  }

  const clearFilter = (e: any) => {
    e.preventDefault()
    navigate.push(ROUTING.SEARCH)
    reset()
  }

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()

    if (value === '') return setMayNames([])

    const newMayNames: string[] = mayValues.name.filter(name => name.includes(e.target.value)).slice(0, 3)
    setMayNames(newMayNames)
  }

  const handleClickName = (name: string) => {
    setValue('name', name)
    setMayNames([])
  }

  return (
    <>
      <button className={styles.toggleBtn} onClick={() => setIsOpen(prev => !prev)}>
        {isOpen ? <IoCloseSharp size={20} /> : <FaFilter size={20} />}
      </button>
      <form className={cn(styles.main, isOpen && styles.isOpen)} onSubmit={handleSubmit(onSubmit)}>

        <div className={styles.inputRow}>
          <input {...register('name')}
            onChange={handleChangeName}
            className={cn(styles.input, styles.nameInput)} placeholder='Поиск по названию' type='text' />
          <Autocomplete
            mayNames={mayNames}
            handleClickName={handleClickName}
          />
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
          <div className={styles.inputColumn}>
            <Controller
              name="country"
              control={control}

              render={({ field }) => <CustomSelect
                placeholder='Страна'
                {...field}
                options={[{ value: '', label: 'Страна' }, ...mayValues.country.map(prop => {
                  return { value: prop, label: prop }
                }) as any]}
              />}
            />
          </div>
          <div className={styles.inputColumn}>
            <Controller
              name="genres"
              control={control}

              render={({ field }) => <CustomSelect
                placeholder='Жанр'
                {...field}
                options={[{ value: '', label: 'Жанр' }, ...mayValues.genres.map(prop => {
                  return { value: prop, label: prop }
                }) as any]}
              />}
            />
          </div>
          <div className={styles.inputColumn}>
            <Controller
              name="ageRating"
              control={control}

              render={({ field }) => <CustomSelect
                placeholder='Возрастной рейтинг'
                {...field}
                options={[{ value: '', label: 'Возрастной рейтинг' }, ...mayValues.ageRating.map(prop => {
                  return { value: prop, label: prop }
                }) as any]}
              />}
            />
          </div>
          {/* Тут селекты для страны, жанра, возрастного рейтинга */}
        </div>
        <Button className={styles.submit}>Поиск...</Button>
        <Button className={styles.submit} onClick={clearFilter}>Сбросить</Button>
      </form>
    </>
  );
}