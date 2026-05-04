function add10(num){
    return new Promise((resolve, reject)=>{
        //비동기 작업 실행하는 함수
        // executor
        setTimeout(()=>{
    
            if(typeof num =='number'){
                resolve(num+10);
            }else{
                reject("num이 숫자가 아닙니다.");
            }
        },2000);
    });
}



// console.log(promise);


// setTimeout(()=>{

//     console.log(promise);
    
// },3000);

// then  메서드 
// -> 그 후에
const p = add10(10).then((value)=>{
    console.log(value);
    return  add10(30);
}).then(v=>console.log(v)).catch((err)=>{
    // console.log(err);
    return err
});

