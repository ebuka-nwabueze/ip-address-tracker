
interface Location {
  country: string,
  region: string,
  timezone: string,
  city: string,
  lat: number,
  lng: number,
  postalCode: string,
  geonameId: string
}

interface AS {
  asn: string,
  name: string,
  route: string,
  domain: string,
  type: string
}

export interface GetIpResponse {
  ip: string,
  location: Location,
  domains: string[],
  as: AS,
  isp: string
}

