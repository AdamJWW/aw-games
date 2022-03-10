import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { fetchCategories } from "./Api";
export default function CategoryMenu() {

    useEffect(() => {
        fetchCategories().then((data) => {
            setCategories(data);
        }).catch((err) => {
            alert(err);
        })
    }, [])
    const [categories, setCategories] = useState([])

    return (
        <ul className='categoryList' id="categoryList">
                <li className='categoryList-item'>
                    <Link to="/reviews">
                        All reviews
                    </Link>
                </li>
                {categories.map((category) => {
                    return(
                        <li key={category.slug} className='categoryList-item'>
                            <Link to={`/categories/${category.slug}`}>
                                {category.slug}
                            </Link>
                        </li>
                    )
                })}
            </ul>
    )
}