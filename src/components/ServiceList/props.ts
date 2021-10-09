export interface ListProps {
  id: number;
  name: string;
  image: string;
  description: string;
  location: LocationProps;
}
interface LocationProps {
  street: string;
  city: string;
  state: string;
  postcode: string;
  coordinates: CoordinatesProps;
}
interface CoordinatesProps {
  latitude: string;
  longitude: string;
}
