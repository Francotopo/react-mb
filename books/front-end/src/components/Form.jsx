import Button from './Button'

export default function Form({
  title,
  author,
  publishYear,
  setTitle,
  setAuthor,
  setPublishYear,
  editBook,
  _id,
  path,
  addBook,
}) {
  return (
    <div className="mt-11">
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">Titre</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            type="text"
            placeholder="Saisir le titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">Auteur</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            type="text"
            placeholder="Saisir l'auteur"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Année de publication
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            type="text"
            placeholder="Saisir l'année de publication"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
          />
        </div>

        {path === '/addbook' ? (
          <div className="flex justify-center">
            <Button
              onClick={addBook}
              className="w-52 mt-9  text-emerald-600 border-emerald-600  hover:bg-emerald-700 hover:text-emerald-100 drop-shadow-md"
            >
              Ajouter
            </Button>
          </div>
        ) : path === '/editbook' ? (
          <div className="flex justify-center">
            <Button
              onClick={(e) => editBook(e, _id)}
              className="w-52 mt-9 text-emerald-600 border-emerald-600 hover:bg-emerald-700 hover:text-emerald-100 drop-shadow-md"
            >
              Enregistrer
            </Button>
          </div>
        ) : null}
      </form>
    </div>
  )
}
