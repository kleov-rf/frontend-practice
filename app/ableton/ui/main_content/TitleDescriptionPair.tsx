export default function TitleDescriptionPair({
  title,
  description,
}: {
  title: string
  description: string[]
}) {
  return (
    <article className="flex flex-col max-w-screen-md gap-6">
      <p className="font-medium text-3xl">{title}</p>
      {description.map((description, key) => (
        <p className="font-light text-xl" key={key}>
          {description}
        </p>
      ))}
    </article>
  )
}
