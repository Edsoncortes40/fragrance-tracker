import {httpsCallable} from 'firebase/functions';
import {functions} from './firebase';

const getVideosFunction = httpsCallable(functions, 'getVideos');

export interface Frag {
    id?: string,
    name?: string,
}

export async function getVideos(){
    const response = await getVideosFunction();
    return response.data as Frag[];
}