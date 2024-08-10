export default function TitleDescriptionPair({
  title,
  description,
}: {
  title: string
  description: string[]
}) {
  return (
    <article className="flex flex-col max-w-screen-md gap-6">
      <span className="font-medium text-3xl">{title}</span>
      {description.map((description, key) => (
        <span className="font-light text-xl" key={key}>
          {description}
        </span>
      ))}
    </article>
  )
}
