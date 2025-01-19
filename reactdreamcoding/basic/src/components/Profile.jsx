import Avatar from "./Avatar";

export default function Profile({image, name, title , isNew}) {
  return (
    <div className="proFile">
        <div>
            <Avatar image={image} isNew={isNew}/>
        </div>
        <h1>{name}</h1>
        <p>{title}</p>
    </div>
  )
}

