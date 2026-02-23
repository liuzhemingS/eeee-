"use strict";
const eE = new URLSearchParams(window.location.search);
const DONT_TOUCH = eE.get('k');
const accessStatus = localStorage.getItem('accessStatusGranted');
if (DONT_TOUCH == 1234 ) {
    localStorage.setItem('accessStatusGranted', true)
} 

if (accessStatus == 'true') {
    window.location.href = "eee.html";
}


