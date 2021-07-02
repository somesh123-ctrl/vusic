import React from 'react';
import Container from "../fragment/Container";
import Developer from "../fragment/Developer";
import Attribution from "../fragment/Attribution";

const About = () => {
    return (
        <Container>
            <div className={"About"}>
                {
                    <h1></h1>
                }
                <Developer/>
                <Attribution/>
            </div>
        </Container>
    );
}

export default About;