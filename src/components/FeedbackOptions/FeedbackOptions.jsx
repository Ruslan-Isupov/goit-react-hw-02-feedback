import PropTypes from "prop-types";
import { Button,ContainerButton } from "./FeedbackOptions.styled";
export const FeedbackOptions = ({ onLeaveFeedback }) => {
    return (
       <ContainerButton>
    
   <Button type ="button" id="good" onClick={onLeaveFeedback}>Good</Button>
   <Button type ="button" id="neutral"onClick={onLeaveFeedback}>Neutral</Button>
     <Button type ="button" id="bad" onClick={onLeaveFeedback}>Bad</Button>
    </ContainerButton>
    )
}
    FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired
      
};