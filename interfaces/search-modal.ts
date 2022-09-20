export interface SearchProps {
  isOpen?: boolean;
  setIsOpen?: any;
}

export interface DataProps {
  data: {
    mal_id?: string;
    title?: string;
    type?: string;
    episodes?: string;
    status?: string;
    images: {
      jpg: {
        image_url: "string";
      };
    };
  }[];
}
