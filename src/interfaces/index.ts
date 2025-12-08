export interface IProduct{
    id:string;
    title:string;
    description:string;
    imageURL:string;
    price:string;
    colors: string[];
    category: {
        name:string;
        imageURL:string
    }
}

export interface IInputForm{
    id: string,
    // name: string,
    name: 'title'| 'description' | 'imageURL'| 'price',
    label: string,
    type: string
}
