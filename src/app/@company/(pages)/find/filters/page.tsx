import './details.scss'

interface User {
    name: string;
    profilePicture: string;
    age: number;
    programmingLanguages: string[];
}

export default function Find() {
    const user: User = {
        name: 'John Doe Holbie Random', // The name of the user
        profilePicture: '/profile.jpg', // The path to the user's profile picture
        age: 30, // The age of the user
        programmingLanguages: ['JavaScript', 'Python', 'C', 'C++'], // An array of programming languages known by the user
    };

    return (
        <div className="container">
            <div className="card">
                <img className="profile-picture" src={user.profilePicture} alt="Foto de perfil" />
                <div className="user-info">
                    <h1 className="name">{user.name}</h1>
                    <p className="title">Software Engineer</p>
                    <p className="description">
                        Experiencia en la industria: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
                        condimentum tortor, vitae gravida ipsum. Nullam ut mi vel nisi auctor fermentum. In hac habitasse
                        platea dictumst. Vivamus rhoncus odio nec nisl efficitur tincidunt. Integer auctor tincidunt purus,
                        nec fringilla eros gravida sit amet.
                    </p>
                    <p className="description">
                        Lenguajes de Programación: {user.programmingLanguages.join(', ')}
                    </p>
                    <p className="description">
                        Tipo de trabajo buscado: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu diam eget
                        dui euismod commodo vitae eget augue. Mauris vitae vestibulum quam.
                    </p>
                </div>
            </div>
        </div>
    );
};