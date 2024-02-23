import {httpsCallable} from 'firebase/functions';
import {functions} from './firebase';
import {Frag, UserInfo} from '../utils';

const getFragsFunction = httpsCallable(functions, "getFrags");
const getFragFunction = httpsCallable(functions, "getFrag");
const getUserFunction = httpsCallable(functions, "getUser");

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