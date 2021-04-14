/* Global Variables */
const content=document.getElementById('content').textContent='we thank you to visit our website';
    
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// to make a post request to data route
const postData= async (url='',data={})=>{
    //console.log(data);
    const response= await fetch(url,{
        method:'POST', // *GET , POST , PUT , DELETE, ETC.
        mode:'cors', //no-cors, *cors,same-origin
        cache:'no-cache', //* default, no-cache,reload , force-cache,only-if-cached
        credentials:'same-origin', //include , * same-origin, omit
        headers:{
            'Content-Type':'application/json',
        },
        redirect:'follow', //manuall ,* follow, error
        referrerPolicy:'no-referrer', // no-referrer, *no-referrer- when - downgrade, origin, origin-when-cross-origin,strict-origin-when -cross-origin,unsafe-url
        body:JSON.stringify(data),// Body data type must 'Content-Type' header
    });
    try{
        const newData= await response.json();
        //console.log(newData);
        return newData;
    }catch (error){
        console.log('error',error);
    }
}
fetch('/all').then(
    data=>{ return data.json(); }
).then(
    data=> {//updateUI();       
    console.log(data);
    //data.zip
    data.date
    data.temp
    data.feeling 
}
)

// Personal API Key for OpenWeatherMap API
let baseURL= 'http://api.openweathermap.org/data/2.5/weather?zip=';
const personalApiKey= '&appid=bfdad66ac528dc404c4fe7833e8aaa68&units=metric';  //metric

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click',performAction);


/* Function called by event listener */
function performAction(e){
 //select the actual value of an HTML input to include in post
 const newZip= document.getElementById('zip').value;
 const feeling=document.getElementById('feelings').value;
getZip(baseURL,newZip,personalApiKey)
// New syntax!
.then (function (data){
// Add data
console.log(data);
postData('/data',{zip:newZip,feeling:feeling,date:d,temp:data.main.temp});
//console.log(newEntry);
})
.then(() => updateUI())
}
const updateUI= async() => {
    const request= await fetch('/all');

    try{
        const allData=await request.json();
        //document.getElementById('zip').innerHTML=allData.zip;
        
        document.getElementById('date').innerHTML=allData.date;
        document.getElementById('temp').innerHTML=allData.temp;
        document.getElementById('content').innerHTML=allData.feeling;
        
    }
     catch (error){
        console.log('error',error);
    }
}
    
/* Function to GET Web API Data*/
const getZip= async(baseURL,zip,key)=>{
    const res = await fetch(baseURL+zip+key)
   
    
    try{
        const data= await res.json();
        console.log(data) 
        return data;   
    }catch (error){
        console.log('error',error);
        // appropraitely handle the error
    }

}
/* Function to GET Project Data */
const retrieveData= async(url='')=>{
    const request = await fetch(url)
    try{
        const allData= await request.json();
        console.log(allData);
        
    }catch (error){
        console.log('error',error);
        // appropraitely handle the error
    }
}