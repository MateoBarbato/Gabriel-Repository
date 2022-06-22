// import React from 'react'
const itemsDB = [
    {id : 1,
    name: 'Jabonardo',
    type:"soapbar",
    precio : '120$',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    stock : 5,
    initial : 1,
    imageurl:'https://i.postimg.cc/rsPNynsp/8-FADD3-C3-2-C37-4360-8-DFC-DBB711-B9-EFDA.png'},
    {id : 2,
    name: 'Jabonardo',
    type:"soapbar",
    precio : '120$',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    stock : 6,
    initial : 1,
    imageurl:'https://i.postimg.cc/VkMW1F8Y/IMG-4905.png'},
    {id : 3,
    name: 'Liquid Soap',
    type:"misc",
    precio : '120$',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    stock : 5,
    initial : 1,
    imageurl:'https://i.postimg.cc/FRFyy5JR/IMG-5198.png'},
    {id : 4,
    name: 'Jabonardo',
    type:"soapbar",
    precio : '120$',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    stock : 7,
    initial : 1,
    imageurl:'https://i.postimg.cc/8Pxmq0xK/IMG-5215.png'},
    {id : 5,
    name: 'Liquid Soap',
    type:"misc",
    precio : '120$',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    stock : 2,
    initial : 1,
    imageurl:'https://i.postimg.cc/9FDBghgw/IMG-5216.png'},
    {id : 6,
    name: 'Liquid Soap',
    type:"misc",
     precio : '120$',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    stock : 3,
    initial : 1,
    imageurl:'https://i.postimg.cc/QN4bqtmr/IMG-5217.png'},
    {id : 7,
    name: 'Liquid Soap',
    type:"misc",
     precio : '120$',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    stock : 3,
    initial : 1,
    imageurl:'https://i.postimg.cc/1zr0V5X2/IMG-5218.png'},
    {id : 8,
    name: 'Liquid Soap',
    type:"misc",
     precio : '120$',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    stock : 3,
    initial : 1,
    imageurl:'https://i.postimg.cc/3wTCwD82/IMG-5219.png'},
    {id : 9,
    name: 'Liquid Soap',
    type:"misc",
     precio : '120$',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    stock : 3,
    initial : 1,
    imageurl:'https://i.postimg.cc/9MxG18GB/IMG-5220.png'},
    {id : 10,
    name: 'Liquid Soap',
    type:"misc",
     precio : '120$',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    stock : 3,
    initial : 1,
    imageurl:'https://i.postimg.cc/90rykdbH/IMG-5221.png'},
    {id : 10,
    name: 'Liquid Soap',
    type:"misc",
     precio : '120$',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    stock : 3,
    initial : 1,
    imageurl:'https://i.postimg.cc/Bbk2fj7L/IMG-5222.png'},
    {id : 10,
    name: 'Liquid Soap',
    type:"misc",
     precio : '120$',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    stock : 3,
    initial : 1,
    imageurl:'https://i.postimg.cc/NGz6HnGs/IMG-5223.png'},
    {id : 10,
    name: 'Liquid Soap',
    type:"misc",
     precio : '120$',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    stock : 3,
    initial : 1,
    imageurl:'https://i.postimg.cc/P5G16880/IMG-5225.png'},
    {id : 10,
    name: 'Liquid Soap',
    type:"misc",
     precio : '120$',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    stock : 3,
    initial : 1,
    imageurl:'https://i.postimg.cc/L6gzBVhz/IMG-5226.png'}
]

export const itemsPromise = (timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(itemsDB.length>0){
                resolve(itemsDB)
            }else{
                reject('error al obtener los items')
            }
        }, timeout);
    })
}

export const itemsPromiseid = (id,timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(itemsDB.filter(item => item.id===2))
            reject ('error al obtener el item con id :'+id)
        }, timeout);
    })
}

export const itemsbyFilter = (filter,timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(itemsDB.filter(item => 
                // hay que agregar el fiter
                item))
            reject ('error al obtener el item con id :'+filter)
        }, timeout);
    })
}
