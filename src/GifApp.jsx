import { useState } from "react"
import { AddCategory, CategoryItem } from "./components"

export function GifApp() {
    const [categories, setCategories] = useState(['One Punch'])
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories([...categories, newCategory])
    }
    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />
            
                {
                    categories.map(category => {
                        return <CategoryItem key={category} categoryTitle={category}/>
                    })
                }
        </>
    )
}