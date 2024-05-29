import { uploadPhoto, createUser } from "./utils";
export default async function handleProfileSignup(){
    return Promise.all([uploadPhoto(), createUser()])
    .then((responses) => {
        console.log(`${responses[0].body} ${responses[1].firstName} ${responses[1].lastName}`);
    }).catch((error)=> {
        console.error("Signup system offline");
    })
}
