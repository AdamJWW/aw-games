import { useParams } from "react-router-dom"

export default function CategoryList() {
    const {category_name} = useParams;
    return (
        <h1>{category_name}</h1>
    )
}