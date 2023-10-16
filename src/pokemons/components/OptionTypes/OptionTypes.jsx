


export const OptionTypes = ({types}) => {

    const handleOnChange = (event) => {
        const valor = event.target.value;
        console.log(valor);
        
    }

  return (
    <div>
        {types.map((type) => (
            <>
              <input key={type.ID} type="checkbox"  name={type.name} value={type.ID} onChange={handleOnChange}></input>
              <span key={type.UUID}> {type.ID}. {type.name} </span>
            </>
          ))}
    </div>
  );
}
