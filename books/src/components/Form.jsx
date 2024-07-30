export default function Form({
  title,
  author,
  year,
  addBook,
  setTitle,
  setAuthor,
  setYear,
}) {
  return (
    <div>
      <form>
        <div>
          <label>Titre</label>
          <input
            type="text"
            placeholder="Saisir le titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Auteur</label>
          <input
            type="text"
            placeholder="Saisir le titre"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label>Année de publication</label>
          <input
            type="text"
            placeholder="Saisir le titre"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div></div>
      </form>
    </div>
  )
}
