import axios from 'axios';
import React from 'react';

const backend = axios.create({
    baseURL:'https://accounts.spotify.com/authorize'
})

export {backend}