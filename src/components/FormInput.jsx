

function FormInput({ type, label, name, defaultValue,size }) {
  return (
    <div className="form-control">
        <label className="label">
            <span className="label-text capitalize">{label}</span>
        </label>
        <input 
          type={type} 
          name={name}
          defaultValue={defaultValue}
          placeholder={`Enter ${label}`}
          className={`input input-bordered input-${size}`}  
        />
    </div>
  )
}

export default FormInput