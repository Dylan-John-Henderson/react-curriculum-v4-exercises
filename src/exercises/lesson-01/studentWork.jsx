//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Dylan John Henderson';
  const age = 30;
  const hobbies = [
    'Gaming',
    'Programming',
    '3D Graphics',
    'Artificial Intelligence',
    'Neuroscience',
    'Computer Science',
    'Robotics',
    'Animation',
    'Science & Astronomy',
  ];

  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hi, I'm {name}! I'm {age} years old and a software developer with a
        passion for technology and problem-solving. I enjoy building
        applications, experimenting with new technologies, and exploring areas
        such as artificial intelligence, 3D graphics, and computational
        neuroscience. I'm always looking for opportunities to learn, build, and
        turn interesting ideas into working projects.
      </p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
