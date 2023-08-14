import { GeneralIcon } from './icon';

export interface CustomerType {
  id: string;
  login: string;
  merchant_name: string;
  superior_business_name: string;
  contacts: number;
  contacts_number: number;
  status: string;
  coupon_code: string;
  remarks: string;
  registration_time: string;

 
}
export interface ProductFiterType {
  id: number;
  filterbyTitle?: string;
  name?: string;
  sort?: string;
  icon?: GeneralIcon | any;
  devider?: boolean;
}

export interface ProductCardProps {
  id?: string | number;
  color?: string;
  like: string;
  star: number;
  value?: string;
}
