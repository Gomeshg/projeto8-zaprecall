export default function FeedbackGame({feedbackList, deck}){

    return (
        <div className="feedbackGame">
            <div>
                <p>{feedbackList.length}/{deck.length} CONCLUÍDOS</p>
            </div>

            <div className="iconFeedbackGame">
                {feedbackList.map(item => <img src={item}></img>)}
            </div>

        </div>
    );
}