

const validate = (input) => {

    const errors = {};


    if (input.name.trim() === '' || (typeof input.name !== 'string')){
        errors["name"] = "Nombre no puede estár vacío";
    }else if((input.name.length > 50)){
        errors["name"] = "Nombre muy largo";
    }else if(/^[0-9]*$|^[^a-zA-Z0-9-]*$/.test(input.name)){
        errors["name"] = "Nombre inválido";
    }else{
        errors["name"] = "";
    }


    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
    if (input.images.trim() === '' || (typeof input.images !== 'string')){
        errors["images"] = "El campo no puede estár vacío";
    }else if(!urlPattern.test(input.images)){
        errors["images"] = "Url no válida";
    }else{
        errors["images"] = "";
    }



    return errors;

};

export default validate;