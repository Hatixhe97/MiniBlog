
import './App.css'
import PostForm from './components/PostForm/PostForm'
import PostList from './components/PostList/PostList';

function App() {

  const blogs = [
    {
      title: 'Djokovic breaks Nadal record',
      description: 'Novak Djokovic added another historic feat to his already glittering résumé, breaking Nadal’s record for most match wins at Masters 1000 events.The 24-time grand slam singles champion picked up victory No. 411 at ATP Masters 1000 events by defeating Argentina’s Camilo Ugo Carabelli 6-1, 7-6(1).“I’m honored to have another milestone, another record broken,” Djokovic said, per the ATP. “There’s always something on the line pretty much every time I play, and of course that motivates me to do well at tournaments.”Djokovic’s records in Masters 1000 events are unmatched.He has 40 titles, four more than Nadal in second place, and is the only player in history to win all nine Masters 1000 tournaments. By 2020, he had won all nine events twice. Djokovic will face Italy’s Lorenzo Musetti in the round of 16 as he looks to win a record-extending seventh Miami Open title.',
      data:'24/03/2025',
      imageLink: 'https://e0.365dm.com/24/10/2048x1152/skysports-novak-djokovic-rafael-nadal_6721397.jpg?20241019191709" alt="Djokovic and Nadal'
    },

    {
      title: 'Djokovic breaks Nadal record',
      description: 'Novak Djokovic added another historic feat to his already glittering résumé, breaking Nadal’s record for most match wins at Masters 1000 events.The 24-time grand slam singles champion picked up victory No. 411 at ATP Masters 1000 events by defeating Argentina’s Camilo Ugo Carabelli 6-1, 7-6(1).“I’m honored to have another milestone, another record broken,” Djokovic said, per the ATP. “There’s always something on the line pretty much every time I play, and of course that motivates me to do well at tournaments.”Djokovic’s records in Masters 1000 events are unmatched.He has 40 titles, four more than Nadal in second place, and is the only player in history to win all nine Masters 1000 tournaments. By 2020, he had won all nine events twice. Djokovic will face Italy’s Lorenzo Musetti in the round of 16 as he looks to win a record-extending seventh Miami Open title.',
      data:'24/03/2025',
      imageLink: 'https://imageio.forbes.com/specials-images/imageserve/66a673ef1d74d9d1cf629708/TENNIS-FRA-OPEN/960x0.jpg?format=jpg&width=960" alt="Djokovic and Nadal'
    },

   
  ]
 
  return (
    <>
    <PostForm/>
    <PostList blogs={blogs}/>
    </>
  )
}

export default App;
