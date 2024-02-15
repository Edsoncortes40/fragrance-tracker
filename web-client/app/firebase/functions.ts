import {httpsCallable} from 'firebase/functions';
import {functions} from './firebase';
import {Frag} from '../utils';

const getFragsFunction = httpsCallable(functions, 'getFrags');


export async function getFrags(){
    const response = await getFragsFunction();
    return response.data as Frag[];
}