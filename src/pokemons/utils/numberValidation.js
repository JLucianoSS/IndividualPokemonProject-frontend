

export const numberValidation = (valor,fieldName) => {
    const errors = {};
    const isNumber = /^[0-9]+$/;
    if ( (valor <= 0 ) ){
       errors[fieldName] = `El campo ${fieldName} debe ser mayor a 0`;
   }else if( parseInt(valor) > 256 ){
       errors[fieldName] = `El campo ${fieldName} no puede  ser mayor a 256`;
   }else if( typeof valor !== 'number' || (!isNumber.test(valor)) ){
       errors[fieldName] = `El campo ${fieldName} solo acepta enteros`;
   }else {
       errors[valor] = "";
   }

   return errors;

}