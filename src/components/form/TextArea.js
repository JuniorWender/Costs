import styles from './TextArea.module.css'

function TextArea({id,name,row,cols,text,placeholder}) {

    return (
      <div className={styles.form_control}> 
        <label htmlFor={name}>{text}</label>
        <textarea 
            id={id}
            name={name}
            row={row}
            cols={cols}
            placeholder={placeholder}
        />
       </div>
    )
}

export default TextArea;
