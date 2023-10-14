import {AiOutlineSearch} from 'react-icons/ai'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    changeRating,
    changeTitleSearch,
    changeCategory,
    activeTitleSearch,
    clearFilters,
    changeTitle,
  } = props

  const onClickRating = ratingId => {
    changeRating(ratingId)
  }

  const onChangeTitleSearch = event => {
    changeTitleSearch(event.target.value)
  }

  const onClickClearFilters = () => {
    clearFilters()
  }

  const onClickCategory = categoryId => {
    console.log(categoryId)
    changeCategory(categoryId)
  }

  const onHandleEnterKey = event => {
    if (event.key === 'Enter') {
      changeTitle()
    }
  }
  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          className="search-input"
          placeholder="search"
          value={activeTitleSearch}
          onChange={onChangeTitleSearch}
          onKeyPress={onHandleEnterKey}
        />
        <AiOutlineSearch className="search-icon" />
      </div>
      <h1 className="category-heading">Category</h1>
      <p onClick={() => onClickCategory(categoryOptions[0].categoryId)}>
        {categoryOptions[0].name}
      </p>
      <p onClick={() => onClickCategory(categoryOptions[1].categoryId)}>
        {categoryOptions[1].name}
      </p>
      <p onClick={() => onClickCategory(categoryOptions[2].categoryId)}>
        {categoryOptions[2].name}
      </p>
      <p onClick={() => onClickCategory(categoryOptions[3].categoryId)}>
        {categoryOptions[3].name}
      </p>
      <p onClick={() => onClickCategory(categoryOptions[4].categoryId)}>
        {categoryOptions[4].name}
      </p>

      <h1 className="ratings-heading">Rating</h1>
      <ul className="rating-list-container">
        {ratingsList.map(eachRating => (
          <li className="rating-img-container" key={eachRating.ratingId}>
            <button
              onClick={() => onClickRating(eachRating.ratingId)}
              type="button"
              className="rating-btn"
            >
              <img
                src={eachRating.imageUrl}
                className="rating-img"
                alt={`rating ${eachRating.ratingId}`}
              />
              & up
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="clear-filters-btn"
        onClick={onClickClearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
