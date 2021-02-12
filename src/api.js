/* eslint-disable prettier/prettier */
import React,{useEffect,useState} from 'react';
import {Text} from 'react-native';
import axios from 'axios';

class Api {


    get_data = async() =>{
        const resp = await axios.get('http://192.168.1.58/apicoronavirus/get_index.php')

        return (resp.data)

    }
}

export default new Api()
