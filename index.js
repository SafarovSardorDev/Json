'use strict';


const data = `
[
    {
        "name": "Artel",
        "seo": "Akmaljon Abdullayev",
        "ishchilar": 97
    },

    {
        "name": "Shivaki",
        "seo": "Jasur Normatov",
        "ishchilar": 96
    },

    {
        "name": "Crafers",
        "seo": "Dilfuza Nodirova",
        "ishchilar": 97
    },

    {
        "name": "Sofia",
        "seo": "Sofiya Azimova",
        "ishchilar": 96
    }
]
`;

console.log();

// name
const artelLabel = document.querySelector('.artel');
const shivakiLabel = document.querySelector('.shivaki');
const crafersLabel = document.querySelector('.crafers');
const sofiaLabel = document.querySelector('.sofia');

// seo
const artelPower = document.querySelector('.artel-seo');
const shivakiessiPower = document.querySelector('.shivaki-seo');
const crafersPower = document.querySelector('.crafers-seo');
const sofiaPower = document.querySelector('.sofia-seo');

// work
const artelwork = document.querySelector('.artel-ishchilar');
const shivakiessiwork = document.querySelector('.shivaki-ishchilar');
const craferswork = document.querySelector('.crafers-ishchilar');
const sofiawork = document.querySelector('.sofia-ishchilar');



// name
artelLabel.textContent = JSON.parse(data)[0].name;
shivakiLabel.textContent = JSON.parse(data)[1].name;
crafersLabel.textContent = JSON.parse(data)[2].name;
sofiaLabel.textContent = JSON.parse(data)[3].name;

// seo
artelPower.textContent = JSON.parse(data)[0].seo;
shivakiessiPower.textContent = JSON.parse(data)[1].seo;
crafersPower.textContent = JSON.parse(data)[2].seo;
sofiaPower.textContent = JSON.parse(data)[3].seo;

// work
artelwork.textContent = JSON.parse(data)[0].ishchilar;
shivakiessiwork.textContent = JSON.parse(data)[1].ishchilar;
craferswork.textContent = JSON.parse(data)[2].ishchilar;
sofiawork.textContent = JSON.parse(data)[3].ishchilar;

