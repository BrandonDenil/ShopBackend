'use strict'

exports.preventDefault=(value)=>{
    if(value===undefined || value===null) return true
    return value
}

exports.verificarParametros=(_object,_array)=>{
    let valido = true
    _array.forEach(element=>{
        if(!_object.hasOwnProperty(element))valido=false
    })    
    return valido
}