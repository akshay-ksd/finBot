import { MMKV } from 'react-native-mmkv'

const storage = new MMKV()


export const storeData = (data:any,key:string)=>{
    storage.set(key, JSON.stringify(data));
}

export const getData = (key:string) => {
    const data = storage.getString(key);
    return data;
}