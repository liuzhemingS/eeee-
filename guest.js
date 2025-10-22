"use strict";
const eE = new URLSearchParams(window.location.search);
const DONT_TOUCH = eE.get('accessKEY3.1');
const accessStatus = localStorage.getItem('accessStatusGranted');
if (DONT_TOUCH == 'eee123eee') {
    localStorage.setItem('accessStatusGranted', true)
} 

if (accessStatus == 'true') {
    window.location.href = "eee.html";
}

