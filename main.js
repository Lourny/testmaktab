function User(firstName,lastName,isAdmin){
  this.firstName=firstName;
  this.lastName=lastName;
  this.isAdmin=isAdmin;
}
const ali=new User("ali","alavi",true);
console.log(ali);

const user2={
  name:"hadis",
  lastName:"jafari",

};
console.log(user2?.adreess?.street);
