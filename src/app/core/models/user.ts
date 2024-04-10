export class User_Response {
  id!:number;
  firstName!:string;
  lastName!:string;
  email!:string;
  role!:string;
  accountId!:string;
  token!:string;
}

export class User_Register_Request {
  firstname!:string;
  lastname!:string;
  email!:string;
  password!:string;
  confirmedPassword!:string;
}

export class User_Login_Request {
  email!:string;
  password!:string;
}
