export interface DataProps {
  data: {
    mal_id?: string;
    url?: string;
    type?: string;
    title?: string;
    source?: string;
    episodes?: string;
    status?: string;
    rank?: string;
    score?: string;
    popularity?: string;
    background?: string;
    images: {
      jpg: {
        large_image_url: "string";
      };
    };
  };
}
