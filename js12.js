function call()
{
    //Table 2variable
    var name=n.value
    var roll=rn.value
    var father=fn.value
    var school=sn.value
    var gender1=gender.value
    

    //Table 1 variable
    var pic=`logo.png`
    var pic2=`cbse.png`

    
    
    //Table 3 variable
    var hindi=hin.value--
    var english=eng.value
    var maths=mths.value
    var physics=phy.value
    var chemistry=chm.value
    var biology=bio.value
    
    // condotion for gender 
     if (gender1=="Female")
     
    { var Pre="Miss"
    var bet="D/o"  
    }
    else{
       var Pre="Mr"
       var bet="S/o"
    }
    
    //condotion for pass and fail

    if (hindi>="34")
   {
    var dist="pass"
   }

    else
    var dist="fail"

    if (english>="34")
    {
     var dis="pass"
    }
    
     else
     var dis="fail"
   
     
     if (maths>="34")
     {
      var disti="pass"
     }
     
      else
      var disti="fail"
   
      
      if (physics>="34")
      {
       var distin="pass"
      }
      
       else
       var distin="fail"
   
       
       if (chemistry>="34")
       {
        var di="pass"
       }
       
        else
        var di="fail"

        if (biology>="34")
        {
         var dim="pass"
        }
        
         else
         var dim="fail"
        
       
   
   

    // Table 1
    var Total=parseInt(hindi)+parseInt(english)+parseInt(maths)+parseInt(physics)+parseInt(chemistry)+parseInt(biology)
    var output=`<table width='70%'  cellspacing='2' cellpadding='1'border='1' >`
    output+=`<caption><h3>Examination Result</h3></caption> `
    output+=`<tr><th><td> <img src='${pic}'></td> <td><img src='${pic2}'> </td></th></tr>`
    output+=`</table>`
   


    //Table 2
    var output2=`<table width='70%'  cellspacing='5' cellpadding='5'border='1'>`
    output2+=`<tr><td><b>${Pre}${name}${bet}${father}</b></td></tr>`
    output2+=`<tr> <td><b> ${father}</b></td></tr>`
    output2+=`<tr> <td><b> ${roll}</b></td></tr>`
    output2+=`<tr><td><b> ${school}</b></td></tr>`
    output2+=`</table>`




    //Table 3
    var Per=Total/6
    var output3=`<table style="background-image:url('logo.png'); background-repeat:no-repeat; background-position: center;  background-size:70%';" width='70%'  cellspacing='5' cellpadding='5'border='1' >`
    output3+=`<tr><td><b>Subject Code</b></td> <td><b>Subject</b></td> <td><b>Min Marks</b></td> <td><b>Max Marks</b></td> <td><b>Obt.Marks</b></td><td><b>Remarks</b></td></tr>`
    output3+=`<tr><td><b>1001</b></td> <td><b>Hindi</b></td> <td><b>35</b></td> <td><b>75</b></td> n<td><b>${hindi}</b></td><td><b>${dist}</b></td></tr>`
    output3+=`<tr><td><b>1002</b></td> <td><b>English</b></td> <td><b>35</b></td> <td><b>75</b></td> <td><b>${english}</b></td><td><b>${dis}</b></td></tr>`
    output3+=`<tr><td><b>1003</b></td> <td><b>Maths</b></td> <td><b>35</b></td> <td><b>75</b></td> <td><b>${maths}</b></td><td><b>${disti}</b></td></tr>`
    output3+=`<tr><td><b>1004</b></td> <td><b>Physics</b></td> <td><b>35</b></td> <td><b>75</b></td> <td><b>${physics}</b></td><td><b>${distin}</b></td></tr>`
    output3+=`<tr><td><b>1005</b></td> <td><b>Chemistry</b></td> <td><b>35</b></td> <td><b>75</b></td> <td><b>${chemistry}</b></td><td><b>${di}</b></td></tr>`
    output3+=`<tr><td><b>1006</b></td> <td><b>Biology</b></td> <td><b>35</b></td> <td><b>75</b></td> <td><b>${biology}</b></td><td><b>${dim}</b></td></tr>`
    output3+=`<tr><td><b>Total</b></td> <td><b>${Total}</b></td> <td><b>Percentage</b></td><td><b>${Per} %</b></td></tr>`
    output3+=`</table>`


    result.innerHTML=output+output2+output3
}