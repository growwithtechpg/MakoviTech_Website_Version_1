export interface ProductItem {
  id: string;
  name: string;
  shortDescription: string;
  detail: string;
  categoryTag: string;
  imageSrc: string;
}

export interface IndustryApplication {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface EnquiryFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  product: string;
  message: string;
}
