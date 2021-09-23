// Your web app's Firebase configuration
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB8m-89XtKjCdxDppCJE5Foqm9trsiA48o",
    authDomain: "blackstack-b07f7.firebaseapp.com",
    projectId: "blackstack-b07f7",
    storageBucket: "blackstack-b07f7.appspot.com",
    messagingSenderId: "785321663655",
    appId: "1:785321663655:web:54b7c7693da9e81873cf82"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
    productData:[
        {
            id:1,
            title: "Home Indoor Compact One Person",
            desc: "Buffa",
            price: 48.00,
            stars:4,
        },

        {
            id:2,
            title: "China Manufacturer 8mm HDF",
            desc: "BUCKYZ",
            price: 80.00-90.00,
            stars:5,
        },

        {
            id:3,
            title: "Frameless Glass Shower Doors",
            desc: "CERRY",
            price: 49.00
        },

        {
            id:4,
            title: "Elegant Style Satin with Digital",
            desc: "BUCKYZ",
            price: 200.00,
            stars:5
        },
        {
            id:5,
            title: "Pinto Accent Chair",
            desc: "IKEA",
            price: 81
        },
        {
            id:6,
            title: "Accessories Set in Memphis",
            desc: "FENDIZA",
            price: 44.00
        }
        ,
        {
            id:7,
            title: "Poppy Cafe Chair",
            desc: "PARADIX",
            price: 99.00,
            stars:4
        }
        ,
        {
            id:8,
            title: "Ceramic Pedestal Basin for",
            desc: "CERRY",
            price: 44.00,
            stars:5
        }
        ,
        {
            id:9,
            title: "Steam Shower Cabin Room",
            desc: "CERRY",
            price: 70.00
        }
        ,
        {
            id:10,
            title: "Supply Medical exam table",
            desc: "BUFFA",
            price: 120.00-140.00
        }
    ]
});