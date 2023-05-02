


function distanceFromHqInBlocks(blocks){
    const distance = 42;
    if (blocks < distance){
    return distance - blocks;}
        else {return blocks - distance;}
    }
     
    const blockdistance = 264;
function distanceFromHqInFeet(blocks){
    
    return distanceFromHqInBlocks(blocks) * blockdistance;
 
}

function distanceTravelledInFeet(sblock,dblock){
    if (sblock < dblock){
        return ((dblock-sblock) * blockdistance); 
    }
    return ((sblock-dblock) * blockdistance);
}

function calculatesFarePrice(sblock,dblock){
    if (distanceTravelledInFeet(sblock,dblock) <= 400){
        return 0;
    }
    else if (distanceTravelledInFeet(sblock,dblock) < 2000){
        return (distanceTravelledInFeet(sblock,dblock) - 400) * 2 / 100;
    }
    else if (distanceTravelledInFeet(sblock,dblock) < 2500){
        return 25;
    }
    else if (distanceTravelledInFeet(sblock,dblock) > 2500){
        return ("cannot travel that far");
    }
    

}
    
  



    
    
    
    
    
   


  

     

   
    


   


