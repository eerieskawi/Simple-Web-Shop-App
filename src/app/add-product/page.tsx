export const metadata = {
  title: "Dodaj produkt - Flowmazon",
};

export default function AddProductPage() {
  return (
    <div>
      <h1 className="mb-2 text-lg font-bold">Dodaj produkt</h1>
      <form>
        <input
          className="input input-bordered mb-2 w-full"
          required
          name="name"
          placeholder="Nazwa"
        />
        <textarea
          required
          name="description"
          placeholder="Opis"
          className="textarea textarea-bordered mb-2 w-full"
        ></textarea>
        <input
          className="input input-bordered mb-2 w-full"
          required
          name="imageUrl"
          type="url"
          placeholder="Adres zdjęcia"
        />
        <input
          className="input input-bordered mb-2 w-full"
          required
          name="price"
          type="number"
          placeholder="Cena"
        />
        <button className="btn btn-primary btn-block" type="submit">
          Dodaj produkt
        </button>
      </form>
    </div>
  );
}
