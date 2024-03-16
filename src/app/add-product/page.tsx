import FormSubmitButton from "@/components/FormSubmitButton";
import prisma from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Dodaj produkt - Flowmazon",
};

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Nalezy wypelnic wszystkie wymagane pola.");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/");
}

export default function AddProductPage() {
  return (
    <div>
      <h1 className="mb-2 text-lg font-bold">Dodaj produkt</h1>
      <form action={addProduct}>
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
        <FormSubmitButton className="btn-block">Dodaj produkt</FormSubmitButton>
      </form>
    </div>
  );
}
