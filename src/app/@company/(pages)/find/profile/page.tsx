export default function FindPage(){
    const profiles =  [
        {
            jobName: 'Full Stack',
            icon: <figure></figure>,
        },
        {
            jobName: 'Fron End',
            icon: <figure></figure>,
        }
    ];

    return (
        <section >
            <h1>Select the profile that you want</h1>
            <nav >
                {
                    profiles.map(({jobName, icon}) => (
                        <article >
                            <h4>{jobName}</h4>
                            {icon}
                        </article>
                    ))
                }
            </nav>
        </section>
    )

}