import style from './box.module.css'

export function Box ({ hook, info }) {

  return (

    <div className={style.div}>
      <div className={style.header}>
        <input className={style.input} type="checkbox" />
        <h2 className={style.hook}>{hook}</h2>
      </div>
      <p className={style.info}>{info}</p>
    </div>

  )
}