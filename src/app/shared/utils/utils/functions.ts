
export const trackById = (_: number, item: any): number => {
    return item.id;
  }

export const errorImage = (event: any, bool?:boolean): void => {
  if(bool) event.target.src = '../../../../assets/images/avatar.png'
  else event.target.src = '../../../../assets/images/image_not_found.png';
}

export const emptyObject = (object: any): boolean => {
  if(typeof object !== 'object') return false
  return Object.keys(object || {})?.length > 0 ? true : false
}

export const now_date = () => {
  const newDate = new Date();
  return newDate.getTime();
}



