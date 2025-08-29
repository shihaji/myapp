
export default interface formValidation{
  name:string;
  type:string;
  label:string;
  value:string;
  validators:{
    required?:boolean;
    pattern?:string;
    min?:number;
    max?:number
  }
}
