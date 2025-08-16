
const skills = {
    astrogation: 0,
    athletics: 0,
    charm: 0,
};

export default async function Page() {
    return (
        <div>
            <ul>
                {Object.keys(skills).map((skill, index) => (
                    <li>{skill}: {skills[skill]}</li>
                ))}
            </ul>
        </div>
    );
}