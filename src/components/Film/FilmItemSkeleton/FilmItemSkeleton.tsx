import styles from './FilmItemSkeleton.module.scss';


export const FilmItemSkeleton = () => {

  return (
    <div className={styles.item}>

      <div className={styles.content}>
        <div className={styles.likeBtn}>
          {/*<ButtonLike _id={film.id} />*/}
        </div>
        <div className={styles.img}>

        </div>
        <div className={styles.info}>
          <h3 className={styles.text}></h3>
          <p className={styles.text}></p>
        </div>
      </div>

    </div>
  );
}