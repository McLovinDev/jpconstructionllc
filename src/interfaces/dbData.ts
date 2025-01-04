export interface RootObject {
    _id:             string;
    about:           About[];
    accountAddress:  string;
    beforeAfter:     any[];
    businessAddress: string;
    businessLicense: string;
    colors:          Colors;
    createdAt:       Date;
    dataGeneral:     DataGeneral;
    directorios:     RedesSociale[];
    domain:          string;
    estimateFree:    string;
    existingWebsite: string;
    gallery:         string[];
    home:            About[];
    landingsGallery: LandingsGallery[];
    languages:       string;
    logos:           Logos;
    methodsPayment:  string;
    gmb:             string;
    milesCover:      string;
    name:            string;
    nameCustomers:   string;
    redesSociales:   RedesSociale[];
    reviews:         Reviews;
    services:        Service[];
    landingLocations?: LandingLocation[];
    slogan:          string[];
    updatedAt:       Date;
    valuesContent:   ValuesContent;
    videoAnimado:    any[];
    widgets:         { [key: string]: boolean };
    yearsExperience: string;
   }
   
   export interface About {
    _id:        string;
    image:      string;
    list:       any[];
    text:       string;
    tipoImages: string;
    title:      string;
   }
   
   export interface Colors {
    btnColor:       string;
    btnHoverColor:  string;
    fourthColor:    string;
    primaryColor:   string;
    secondaryColor: string;
    tertiaryColor:  string;
    textColor:      string;
    titleColor:     string;
   }
   
   export interface DataGeneral {
    emails:       Email[];
    location:     Location[];
    openingHours: OpeningHour[];
    phones:       Phone[];
   }
   
   export interface Email {
    _id:   string;
    email: string;
    title: string;
   }
   
   export interface Location {
    _id:     string;
    city:    string;
    urlCity: string;
   }
   
   export interface OpeningHour {
    _id:   string;
    days:  string;
    hours: string;
   }
   
   export interface Phone {
    _id:    string;
    number: string;
    title:  string;
   }
   
   export interface LandingsGallery {
    _id:         string;
    imgLanding:  string[];
    nameLanding: string;
   }
   
   export interface Logos {
    favicon: string;
    primary: string;
    secondary: string;
   }
   
   export interface RedesSociale {
    _id:  string;
    icon: string;
    link: string;
    logo: string;
    name: string;
   }
   
   export interface Reviews {
    stateReviews: boolean;
    urlReviews:   string;
    viewAll:      boolean;
    viewHome:     boolean;
   }
   
   export interface Service {
    _id:         string;
    description: Description[];
    subtitle:    string;
    title:       string;
   }
   
   export interface Description {
    _id:        string;
    image:      string;
    text:       string;
    tipoImages: TipoImages;
   }
   
   export enum TipoImages {
    Photo = "photo",
    Stock = "stock",
   }
   
   export interface ValuesContent {
    mission:     string;
    vision:      string;
    whychooseUs: string;
   }
   
   
interface DescriptionLocations {
    title: string;
    subtitle: string;
    image: string;
    text: string;
    textbutton: string;
  }
  
  export interface LandingLocation {
    title: string;
    subtitle: string;
    keywords: string;
    seoTitle: string;
    slug: string;
    metadescription: string;
    feactureimage: string;
    date?: Date | string; // Use string if the date is in ISO format
    category: string;
    autor: string;
    description: DescriptionLocations[];
  }
  
  