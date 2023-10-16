

export const numberValidation = (valor,fieldName) => {
    const errors = {};
    const isNumber = /^[0-9]+$/;
    if ( (parseInt(valor) <= 0 ) ){
       errors[fieldName] = `El campo ${fieldName} debe ser mayor a 0`;
   }else if( parseInt(valor) > 1000 ){
       errors[fieldName] = `El campo ${fieldName} no puede  ser mayor a 1000`;
   }else if ( valor.trim() === '' ){
       errors[fieldName] = `El campo ${fieldName} no es válido`;
   }else if( typeof valor !== 'string' || (!isNumber.test(valor)) ){
       errors[fieldName] = `El campo ${fieldName} solo acepta enteros`;
   }else {
       errors[valor] = "";
   }

   return errors;

}