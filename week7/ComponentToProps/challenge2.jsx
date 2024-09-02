function getImageUrl(person, size) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
}

function Avatar({ person, size }) {
    const checkSize = size < 90 ? 's' : 'b';
  return (
    <img
      className="avatar"
      src={getImageUrl(person, checkSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}
