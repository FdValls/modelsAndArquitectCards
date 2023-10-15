interface ApiResponse {
    data: User[]; // Suponiendo que data es un array de usuarios
    // Otras propiedades si las hay
  };
  interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
  }