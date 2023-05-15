import style from './box.module.css'

export function Box ({ hook }) {
  return (

    <div className={style.div}>
      <h2 className={style.hookName}>{hook}</h2>
      <input className={style.input} type="checkbox" />
    </div>

  )
}