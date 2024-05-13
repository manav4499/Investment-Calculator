export default function inputFiled({label,val,onInput}){
    return(
        <div className="grid-child">
          <label For={label}>{label}</label>
          <input type="number" name={label} value={val} className="input-group" required onInput={onInput}/>
        </div>
    )
} 