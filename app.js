{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Import the functions you need from the SDKs you need\
import \{ initializeApp \} from "firebase/app";\
import \{ getAnalytics \} from "firebase/analytics";\
// TODO: Add SDKs for Firebase products that you want to use\
// https://firebase.google.com/docs/web/setup#available-libraries\
\
// Your web app's Firebase configuration\
// For Firebase JS SDK v7.20.0 and later, measurementId is optional\
const firebaseConfig = \{\
  apiKey: "AIzaSyD7skp_R0nvFr3AqCD_87TgcrZSEbnw8xc",\
  authDomain: "smart-ai-calendar.firebaseapp.com",\
  projectId: "smart-ai-calendar",\
  storageBucket: "smart-ai-calendar.firebasestorage.app",\
  messagingSenderId: "334351643450",\
  appId: "1:334351643450:web:a7a1be2c03cc6e60fe9603",\
  measurementId: "G-J44TJG4CRE"\
\};\
\
// Initialize Firebase\
const app = initializeApp(firebaseConfig);\
const analytics = getAnalytics(app);}