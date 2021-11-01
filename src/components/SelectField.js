function SelectField({options}) {
    return (
        <>
            <label style={{color: 'rgba(0,0,0,.65)'}} for="select">Cidade</label>
            <select name="select" id="select" style={{width: '89px', outline: 'none', borderColor:'rgba(200, 200, 200, 1)', color: 'rgba(0,0,0,0.65)'}}>
            {options.map((item, index)=>(
                index === 0
                ? <option disabled selected style={{display: 'none'}} value={item}>{item}</option>
                : <option value={item}>{item}</option>
            ))}
            </select>
        </>
    )
}
export default SelectField;