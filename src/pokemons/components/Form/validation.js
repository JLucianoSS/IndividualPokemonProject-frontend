

import { numberValidation } from "../../utils/numberValidation";

const validate = (input) => {

    const { name, images, hp, attack, defense, speed, height, weight, types  } = input;
    let errors = {};

    /*Validaciones de name */
    if ( name.trim() === '' || (typeof name !== 'string') ){
        errors["name"] = "Nombre no puede estár vacío";
    }else if((name.length > 50)){
        errors["name"] = "Nombre muy largo";
    }else if(/^[0-9]*$|^[^a-zA-Z0-9-]*$/.test(name)){
        errors["name"] = "Nombre no válido";
    }else{
        errors["name"] = "";
    }

    /*Validaciones de images */
    const urlPattern = /^https?:\/\/[^\s/$.?#].[^\s]*\.(gif|png|jpg)$/i;
    if (images.trim() === '' || (typeof images !== 'string')){
        errors["images"] = "Image no puede estár vacío";
    }else if(!urlPattern.test(images)){
        errors["images"] = "Url no válida ";
    }else{
        errors["images"] = "";
    }

    /*Validaciones de campos tipo number */
    errors = { ...errors, ...numberValidation(hp,'hp') }
    errors = { ...errors, ...numberValidation(attack,'attack') }
    errors = { ...errors, ...numberValidation(defense,'defense') }
    errors = { ...errors, ...numberValidation(speed,'speed') }
    errors = { ...errors, ...numberValidation(height,'height') }
    errors = { ...errors, ...numberValidation(weight,'weight') }


    if(types.length === 0){
        errors["types"] = "Seleccione al menos un type";
      }else{
        errors["types"] = "";
      }


    return errors;

};

export default validate;