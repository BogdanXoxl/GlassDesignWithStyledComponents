import React from "react";
import {CardInfo, Percentage, Progress, StyledCard} from "./Card.styles";

const Card = ({title, desc, percentage, src}) => {
    return (
        <StyledCard>
            <img src={src} alt=""/>
            <CardInfo>
                <h2>{title}</h2>
                <p>{desc}</p>
                <Progress percentage={percentage}></Progress>
            </CardInfo>
            <Percentage>{percentage}%</Percentage>
        </StyledCard>
    );
};
export default Card;