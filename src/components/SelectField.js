function SelectField({options, width}) {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <label style={{color: 'rgba(0,0,0,.65)', marginBottom:'8px'}} for="select">{options[0]}</label>
            <select name="select" id="select" style={{width: width, height: '32px', outline: 'none', borderColor:'rgba(200, 200, 200, 1)', color: 'rgba(0,0,0,0.65)'}}>
            {options.map((item, index)=>(
                index === 0
                ? <option disabled selected style={{display: 'none'}} value={item}>{item}</option>
                : <option value={item}>{item}</option>
            ))}
            </select>
        </div>
    )
}
export default SelectField;