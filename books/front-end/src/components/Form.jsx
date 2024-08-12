export default function Form({
  title,
  author,
  year,
  addBook,
  setTitle,
  setAuthor,
  setPublishYear,
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
            placeholder="Saisir l'auteur"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label>Année de publication</label>
          <input
            type="text"
            placeholder="Saisir l'année de publication"
            value={year}
            onChange={(e) => setPublishYear(e.target.value)}
          />
        </div>
        <div></div>
      </form>
    </div>
  )
}
