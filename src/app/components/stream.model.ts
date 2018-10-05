export interface Stream {
  num: number;
  name: string;
  imgUrl: string;
  imgUrlOld?: string;
  streamUrl: string;
  success: boolean;
  cssLoading?: boolean;
  cssErrored?: boolean;
  cssInvalid?: boolean;
}
