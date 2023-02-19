const DateConverter = (DateString, Type) => {
  let text = DateString;
  if (text){

  
  const myArray = text.split(".");
  const FResult1 = myArray[0].split("T");
  if (Type === "Date") {
    return FResult1[0];
  }
  if (Type === "Time") {
    return FResult1[1];
  }
}
else{
  return "found none"
}
};

export default DateConverter;
