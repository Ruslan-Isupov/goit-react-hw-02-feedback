import PropTypes from "prop-types";
import { Title,Container,List,Item } from "./Statistics..styled";
import { Notification } from "components/Notification/Notification"

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

     
return  <Container>
<Title>Statistics</Title>
{total > 0 ? (
        
     <List>
<Item >Good:{good}</Item>
<Item >Neutral:{neutral}</Item>
<Item >Bad:{bad}</Item>
<Item >Total:{total}</Item>
<Item >Positive feedback:{positivePercentage}%</Item>

</List>
):
(<Notification message="There is no feedback"/>)
}
</Container>
}
Statistics.propTypes = {
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
      positivePercentage: PropTypes.number.isRequired,
};