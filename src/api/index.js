import ajax from './ajax'


export const reqHome = () => ajax('/home')
export const reqCategory = () => ajax('/classify')
export const reqGeneral = () => ajax('/generalThings')

