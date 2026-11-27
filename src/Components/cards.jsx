import './cards.css'

export function Cards() {
    return(
        <>
        <div className="cards-header">
            <h2>Top courses</h2>
            <span>Go to the catalog</span>
        </div> 
        <section className="cards-body">
            <article className="type-card">
                <span className='courses-type green'>Career path</span>
                <h3>Data Scientist: Machine Learning Engineer</h3>
                <p>Learn the skills you need to become a machine learning engineer. In this career path, you'll learn how to build and train machine learning models, and how to deploy them in production.</p>
                <div className="card-footer">
                    <span>Beginner Friendly</span>
                    <span>95 hours</span>
                </div>
            </article>

            <article className="type-card">
                <span className='courses-type blue'>Career path</span>
                <h3>Data Scientist: Machine Learning Engineer</h3>
                <p>Learn the skills you need to become a machine learning engineer. In this career path, you'll learn how to build and train machine learning models, and how to deploy them in production.</p>
                <div className="card-footer">
                    <span>Beginner Friendly</span>
                    <span>95 hours</span>
                </div>
            </article>

            <article className="type-card">
                <span className='courses-type red'>Career path</span>
                <h3>Data Scientist: Machine Learning Engineer</h3>
                <p>Learn the skills you need to become a machine learning engineer. In this career path, you'll learn how to build and train machine learning models, and how to deploy them in production.</p>
                <div className="card-footer">
                    <span>Beginner Friendly</span>
                    <span>95 hours</span>
                </div>
            </article>  

        <article className="type-card">
                <span className='courses-type yellow'>Career path</span>
                <h3>Data Scientist: Machine Learning Engineer</h3>
                <p>Learn the skills you need to become a machine learning engineer. In this career path, you'll learn how to build and train machine learning models, and how to deploy them in production.</p>
                <div className="card-footer">
                    <span>Beginner Friendly</span>
                    <span>95 hours</span>
                </div>
            </article>

        </section>
        </>
    );
}
