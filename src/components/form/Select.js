import styles from './Select.module.css'

function Select({text, name , options, handeOnChange, value}){
    return(
        <div className={styles.form_control}>
        <label htmlFor={name}> {text}: </label>
        <select name={name} id={name}>
            <option>Select a Option</option>
        </select>
    </div>
    )
}

export default Select