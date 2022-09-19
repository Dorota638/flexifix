export const errHandler = (err: any) => {
  console.error('Error: ', err);
};

let RR = 0;
let S = 0;
let RL = 0;
export const getRepairNumber = () => {
  const date = new Date();
  RR++;
  return `RR${date.getDate()}${date.getMonth()+1}${date.getFullYear().toString().slice(-2)}/${RR}`;
};
export const getSaleNumber = () => {
  const date = new Date();
  S++;
  return `SL${date.getDate()}${date.getMonth()+1}${date.getFullYear().toString().slice(-2)}/${S}`;
};
export const getRentalNumber = () => {
  const date = new Date();
  RL++;
  return `RL${date.getDate()}${date.getMonth()+1}${date.getFullYear().toString().slice(-2)}/${RL}`;
};
