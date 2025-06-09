const categories = [
  { name: 'Headphones', image: '/assets/shared/desktop/image-category-thumbnail-headphones.png' },
  { name: 'Speakers', image: '/assets/shared/desktop/image-category-thumbnail-speakers.png' },
  { name: 'Earphones', image: '/assets/shared/desktop/image-category-thumbnail-earphones.png' }
];

const CategoryFooter = () => (
  <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12 text-center">
    {categories.map((cat) => (
      <div key={cat.name} className="bg-[#f1f1f1] rounded-lg py-8">
        <img src={cat.image} alt={cat.name} className="mx-auto h-24 object-contain mb-4" />
        <h3 className="uppercase tracking-widest font-bold">{cat.name}</h3>
        <p className="text-sm tracking-wide text-[#D87D4A] mt-2 cursor-pointer hover:underline">
          Shop &rarr;
        </p>
      </div>
    ))}
  </section>
);

export default CategoryFooter;
