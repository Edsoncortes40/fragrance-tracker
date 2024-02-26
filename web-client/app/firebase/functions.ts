import {httpsCallable} from 'firebase/functions';
import {functions} from './firebase';
import {Frag, UserInfo} from '../utils';

const getFragsFunction = httpsCallable(functions, "getFrags");
const getFragFunction = httpsCallable(functions, "getFrag");
const getUserFunction = httpsCallable(functions, "getUser");
const createFragFunction = httpsCallable(functions, "createFrag");

export async function getFrags(){
    const response = await getFragsFunction();
    return response.data as Frag[];
}

export async function getFrag(fragName: string){
    const response = await getFragFunction({fragName: fragName});
    console.log("Function.ts logs: " + JSON.stringify(response.data as Frag));
    return response.data as Frag;
}

export async function getUserInfo(userId: string){
    const response = await getUserFunction({userId: userId});

    return response.data as UserInfo;
}

export async function createFragrance(brand: string, description: string, gender: string, imageUrl: string, name: string){
    await createFragFunction({brand: brand, description: description, gender: gender, imageUrl: imageUrl, name: name});
}