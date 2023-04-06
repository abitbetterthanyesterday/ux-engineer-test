export interface IShow {
   id: number;
   name: string;
   summary: string;
   image: {
      original: string;
      medium: string;
   };
   premiered: string;
   _embedded: {
      cast: Array<ICastMember>;
   };
   // We extend the interface to allow extra properties.
   // In reality, the API returns a lot more properties than we use.
   [x: string | number | symbol]: unknown;
}

export interface ICastMember {
   person: {
      name: string;
      image: {
         medium: string;
      };
   };
   character: {
      name: string;
   };
}
