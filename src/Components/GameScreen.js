import Header from './Header';
import Cards from './Cards';
import FeedbackGame from './FeedbackGame';

export default function GameScreen(){

    return (
        <div className="gameScreen">
            <Header/>
            <Cards/>
            <FeedbackGame/>        
        </div>
    );
}