function scuberGreetingForFeet(distanceToTravel){
  

  const message= "This one is on me!";
  const messageAbove2000="I will gladly take your thirty bucks."
  const messageAbove2500 ="No can do."

  if(distanceToTravel<=400){
    return message;
  }
  else if (distanceToTravel >= 2000 && distanceToTravel<=2500){

    return messageAbove2000

  }
  else if(distanceToTravel >2500){
    return messageAbove2500;
  }
}

function ternaryCheckCity(City){
  // Write your code here!
  return City === "NYC" ?  "Ok, sounds good.":"No go.";
  
  }


function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){

  case 'generous':
    return "Thank you so much."

    case 'not as generous':
      return "Thank you."
      
        
        default:       
           return "Bye."
  }}