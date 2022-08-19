import { createCategory, updateCategory } from "../../managers/CategoryManager"

export const CategoryForm = ({ loadCategories, category, setCategory }) => {
  const saveCategoryEvent = (event) => {
    event.preventDefault()
    if (category.id) {
      updateCategory(category).then(setCategory({ label: '' })).then(loadCategories)
    } else {
      createCategory(category).then((data) => {
        loadCategories(data)
        setCategory({ label: '' })
      })
    }
  }

  return (
    <form>
      <div className="field">
        <label className="label">{category.id ? "Edit Category:" : "New Category:"}</label>
        <div className="control">

          <input
            required
            type="text"
            className="input"
            value={category.label}
            onChange={
              (evt) => {
                const copy = { ...category }
                copy.label = evt.target.value
                setCategory(copy)
              }
            } />
        </div>
      </div>
      <button
        onClick={(evt) => saveCategoryEvent(evt)}
        className="button is-primary">
        Save
      </button>
    </form>
  )
}


{/* <input type="text" name="category" required value={updatedCategory.label} onChange={handleUpdateCategory} />
<button className="submitNewCategoryB" type="submit"
    onClick={() => {addCategory(updatedCategory).then(() => navigate("/categories"))}}>Save</button> */}
