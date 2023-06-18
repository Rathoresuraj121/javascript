function fillProducts()
{
    var i=pizza.selectedIndex
   
  if (pizza.value=="Vegetarian")
      {
       im="<img src='pizza/veg.png' cellspacing='0' cellpading='5' width='20%'>"
      }
else 
     {
    im="<img src='pizza/non.png' cellspacing='0' cellpading='5' width='20%'>"
     }


    switch(i)

    {
        case 1:
        veg=[["-select Product-",0],['Farmhouse',399],['Margerita cheese',120],['Oninon cheese',80],['Pepperoni',289]]
        fillDD(veg)
        break
        case 2:
        non=[["-select Product-",0],['Chicken',349],]
        fillDD(non)
        break
    }
}



    function fillDD(prd)
    {  removeOptions()
       for(i=0;i<prd.length;i++)
       {
        var opt=document.createElement('option')
        opt.text=prd[i][0]
        opt.value=prd[i][1]
        products.add(opt)
       }
    }




    function removeOptions()
{
    for(j=products.options.length-1;j>=0;j--)
    {
        products.remove(j)
    }
}

//table 1
function showProduct()
{
    var name=pizza.value+" "+products.options[products.selectedIndex].text
    var price=products.value
    var pic="pizza/"+name+".png"
    


    var output=`<table cellspacing='0' cellpading='5' width='20%' border='1'>`
    output+=`<tr><th><img src="pizza/logo23.png" cellspacing='0' cellpading='5' width='60%'></th></tr>` 
    output+=`<tr><th>${im}</th></tr>`
    output+=`<tr><th>${name}</th></tr>` 
    output+=`<tr><th><img src='${pic}' width='200'></th></tr>` 
    output+=`<tr><th>&#8377;${price}/-only</th></tr>`
    output+=`<tr><th>Quantity:</th><th><input type='text' id='ex1' placeholder='Enter Quantity' </th></tr>`
    output+=`<tr><th></th><th><input type='button'  value='submit'  onclick='call()'></th></tr>`
    output+='</table>'
    result.innerHTML=output
}
   
  function call()
   {
    var price=products.value
    var ex=ex1.value
    var qty=ex * price
    if (ex1.value<=5)
      {
        var im="<img src='pizza/single.png' cellspacing='0' cellpading='5' width='20%'>"

      }
      else 
      {
        var im="<img src='pizza/combo.png' cellspacing='0' cellpading='5' width='20%'>"
      }

   

    var output2=`<table cellspacing='0' cellpading='5' width='25%' border='1'>`
        output2+=`<tr><th>Total:</th><th>${qty}</th></tr>`
        output2+=`<tr><th>FREE FREE</th><th>${im}</th></tr>`
        output2+=`</table>`

        result1.innerHTML=output2
    }




 


