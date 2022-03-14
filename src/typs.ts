export interface User {
  name: string;
  id: number;
}

export interface Project {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number;
}
