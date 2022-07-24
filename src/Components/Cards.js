import Card from "./Card";

export default function Cards({feedbackList, setFeedbackList, deck}){



    return (
        <div className="cards">
            {deck.map((card, index) => <Card feedbackList={feedbackList} setFeedbackList={setFeedbackList} card={card} index={index+1}/> )}
        </div>
    );
}