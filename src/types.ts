export interface Airline {
  _id: string;
  name: string;
  country: string;
  logo: string;
  slogan: string;
  head_quaters: string;
  website: string;
  established: string;
  __v: number;
}

export interface PassengerData {
  _id: string;
  name: string;
  trips: number;
  airline?: Airline[];
  __v: number;
}

export interface PassengerResponse {
  totalPassengers: number;
  totalPages: number;
  data: PassengerData[];
}
export type Data = PassengerData;